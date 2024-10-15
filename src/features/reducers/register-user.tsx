import { CreateCategory } from "../category/helpers/CreateCategory";
import { DeleteCategory } from "../category/helpers/DeleteCategory";
import { CategoryInterfaces } from "../category/interfaces/Category";
import { useRegister } from "../register/context/useRegister";
import { CreateUser } from "../register/helpers/CreateUser";
import { RegisterUserInterface } from "../register/interfaces/RegisterInterfaces";
import { RegisterProductInterfaces, UploadImagesProductsInterfaces } from "../products/interfaces/ProductsInterfaces";
import { CreateProduct } from "../products/helpers/CreateProduct";
import { UploadImageProduct } from "../products/helpers/UploadImageProduct";

export type registerActions = {type:'registerUSer',payload:{user:RegisterUserInterface}}

export type RegisterCategoryAction = {
    type: 'registerCategory';
    payload: { category: CategoryInterfaces };
};

export type DeleteCategoryAction ={
    type:'deleteCategory',
    payload:{id:string}
}

export type RegisterProductAction={
    type:'registerProduct',
    payload:{product:RegisterProductInterfaces}
}
export type UploadImagesProducts={
    type:'uploadProduct',
    payload:{uploadImages:UploadImagesProductsInterfaces}
}

export type registerState = {
    register:RegisterUserInterface
    category:CategoryInterfaces
    product:RegisterProductInterfaces
}
export type RegisterActions = registerActions | RegisterCategoryAction | DeleteCategoryAction | RegisterProductAction | UploadImagesProducts;

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
    },
    product:{
        Category_id: '1',
        Name_product: '',
        Description: '' ,
        Image:null,
        Status: '1',
        Price:'0',
        Amount_inventory:'0'
    },
    uploadImage:{
        id:'',
        image1:undefined,
        image2:undefined,
        image3:undefined,
        image4:undefined,
        image5:undefined,
    }
}

export const RegisterReducer = (
    state:registerState = initialState,
    actions:RegisterActions

)=>{
    const {setSuccess,setError,setMsj,setShowAlert}= useRegister();
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
                setShowAlert(true)
                setTimeout(()=>{
                    setShowAlert(false)
                },3000)
                setMsj(response.statusText)
                setSuccess(true)
                setError(false)
            }).catch(error=>{
                console.log(error)
                setError(true)
                setShowAlert(true)
                setTimeout(()=>{
                    setShowAlert(false)
                },3000)
                setSuccess(false)
            })
            break;
        }
        case 'registerProduct':{
            CreateProduct(actions.payload.product).then(response=>{
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
        case 'uploadProduct':{
            UploadImageProduct(actions.payload.uploadImages).then(response=>{
                console.log(response)
                setMsj(response ? response.statusText : '')
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