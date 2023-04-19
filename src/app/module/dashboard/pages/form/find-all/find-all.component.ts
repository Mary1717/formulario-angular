import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { timeout } from 'rxjs';
import { FavoritePcMark } from 'src/app/core/models/favoritePcMark';
import { Form } from 'src/app/core/models/form';
import { User } from 'src/app/core/models/user';
import { FavoritePcMarkService } from 'src/app/core/services/favoritePcMark/favorite-pc-mark.service';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class FindAllComponent implements OnInit {

  forms: Form[];
  newForm:Form;
  marks: FavoritePcMark[] = [];
  visible: boolean = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private formService: FormService, private confirmationService: ConfirmationService, private messageService: MessageService, private markService:FavoritePcMarkService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      comments: ["", [Validators.required]],
      favoritePcMark: ["", [Validators.required]],
      responseDate: [new Date()]
    })
    this.findMarks();
    this.findAll();
  }

  findAll() {
    this.formService.findAll().subscribe({
      next: (forms) => {
        this.forms = forms;
      }
    })
  }

  deleteForm(idForm: number) {
    this.formService.deleteById(idForm).subscribe({
      next: (form) => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Eliminando...' });
        //Simulacion tiempo de espera
        setTimeout(() => {
          this.ngOnInit();
        }, 1000);
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Error al eliminar.' });
      }
    })
  }

  confirm(event: Event, idForm: number) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Está seguro de eliminar esta respuesta?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteForm(idForm);
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Respuesta no eliminada.' });
      }
    });
  }
  findMarks(){
    this.markService.findAll().subscribe({
      next:(marks)=>{
        this.marks=marks;
      }
    })
  }

  saveForm(){
    this.newForm={
      idForm:0,
      user:new User,
      email:this.form.value.email,
      comments:this.form.value.comments,
      favoritePcMark: this.form.value.favoritePcMark,
      responseDate:this.form.value.responseDate
    }
    this.formService.create(this.newForm,this.form.value.user,this.form.value.favoritePcMark.idMark).subscribe({
      next:(form)=>{
        if(form != null){
          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Encuesta creada!' });
          this.visible = false;
        }else{
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Numero de documento no encontrado!' });
        }
      },
      complete:() =>{
        setTimeout(() => {
          this.ngOnInit();
        }, 1000);
      }
    })
  }


}

