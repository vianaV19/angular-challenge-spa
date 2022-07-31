import { Injectable } from "@angular/core";
import { User } from "../Model/User";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor() {}

    retrieveAll(){
        return USERS;
    }
}

//mock

var USERS: User[] = [
    {
        name: 'carlos',
        email: 'carlos@gmail.com',
        website: 'carlos.com.br',
        added_date: '11/02/2002'
    },
    {
        name: 'andre',
        email: 'carlos@gmail.com',
        website: 'carlos.com.br',
        added_date: '11/02/2002'
    },
    {
        name: 'matheus',
        email: 'carlos@gmail.com',
        website: 'carlos.com.br',
        added_date: '11/02/2002'
    }
]