import { FavoritePcMark } from "./favoritePcMark"
import { User } from "./user"

export class Form {
    idForm: number
    user:User
    email: string
    comments:string
    favoritePcMark: FavoritePcMark
    responseDate: Date
}