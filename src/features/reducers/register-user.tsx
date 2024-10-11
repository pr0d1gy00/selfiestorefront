import { CreateCategory } from "../category/helpers/CreateCategory";
import { DeleteCategory } from "../category/helpers/DeleteCategory";
import { CategoryInterfaces } from "../category/interfaces/Category";
import { useRegister } from "../register/context/useRegister";
import { CreateUser } from "../register/helpers/CreateUser";
import { RegisterUserInterface } from "../register/interfaces/RegisterInterfaces";

export type registerActions = {type:'registerUSer',payload:{user:RegisterUserInterface}}
export type RegisterCategoryAction = {
    type: 'registerCategory';
    payload: { category: CategoryInterfaces };
};
export type DeleteCategoryAction ={
    type:'deleteCategory',
    payload:{id:string}
}

export type registerState = {
    register:RegisterUserInterface
    category:CategoryInterfaces
}
export type RegisterActions = registerActions | RegisterCategoryAction | DeleteCategoryAction;

export const initialState ={ 
    register:{
        Id: '',
        Password: '',
        Name_user: '',
        Last_name: '',
        Phome_number: '',
        Email: ''
    },
    category:{
        name:''
    }
}

export const RegisterReducer = (
    state:registerState = initialState,
    actions:RegisterActions

)=>{
    const {setSuccess,setError,setMsj}= useRegister();
    switch(actions.type){
        case'registerUSer':{
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
        case 'registerCategory':{
            CreateCategory(actions.payload.category.name).then(response=>{
                console.log(response)
                setMsj(response.statusText)
                setSuccess(true)
                setError(false)
            }).catch(error=>{
                console.log(error)
                setError(true)
                setSuccess(false)
            })
            break;
        }
        case 'deleteCategory':{
            DeleteCategory(parseInt(actions.payload.id)).then(response=>{
                console.log(response)
                setMsj(response.statusText)
                setSuccess(true)
                setError(false)
            }).catch(error=>{
                console.log(error)
                setError(true)
                setSuccess(false)
            })
            break;
        }
        default:
            return state
    }
}