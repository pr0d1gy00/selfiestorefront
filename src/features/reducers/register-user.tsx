import { useRegister } from "../register/context/useRegister";
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

export const RegisterReducer = (
    state:registerState = initialState,
    actions:registerActions

)=>{
    const {setSuccess,setError}= useRegister();
    console.log(actions.payload.user)
    if(actions.type === 'registerUSer'){

        CreateUser(actions.payload.user).then(response=>{
            console.log(response)
            setSuccess(true)
            setError(false)
        }).catch(error=>{
            console.log(error)
            setError(true)
            setSuccess(false)
        })
        return {
            ...state,
            register:actions.payload.user
        }
    }
}