import { act } from "react";
import { CreateUser } from "../register/helpers/CreateUser";
import { RegisterUserInterface } from "../register/interfaces/RegisterInterfaces";

export type registerActions = {type:'registerUSer',payload:{user:RegisterUserInterface}}

export type registerState = {
    register:RegisterUserInterface
}

export const initialState ={ 
    register:{
        Id: '',
        Password: '',
        Name_user: '',
        Last_name: '',
        Phome_number: '',
        Email: ''
    }
}

export const registerReducer = (
    state:registerState = initialState,
    actions:registerActions
)=>{
    console.log(actions.payload.user)
    if(actions.type === 'registerUSer'){
        
        CreateUser(actions.payload.user).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
        return {
            ...state,
            register:actions.payload.user
        }
    }
}