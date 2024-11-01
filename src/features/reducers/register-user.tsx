import { CreateCategory } from "../category/helpers/CreateCategory";
import { DeleteCategory } from "../category/helpers/DeleteCategory";
import { CategoryInterfaces } from "../category/interfaces/Category";
import { useRegister } from "../register/context/useRegister";
import { CreateUser } from "../register/helpers/CreateUser";
import { RegisterUserInterface } from "../register/interfaces/RegisterInterfaces";
import { RegisterProductInterfaces, UploadImagesProductsInterfaces } from "../products/interfaces/ProductsInterfaces";
import { CreateProduct } from "../products/helpers/CreateProduct";
import { UploadImageProduct } from "../products/helpers/UploadImageProduct";
import { LoginUser } from "../login/helpers/LoginUser";
import { CartItem } from "../ui/header/interfaces/HeaderInterfaces";

export type registerActions = {type:'registerUSer',payload:{user:RegisterUserInterface}}

export type RegisterCategoryAction = {
    type: 'registerCategory';
    payload: { category: CategoryInterfaces };
};
export type LoginUserAction ={
    type:'loginUser',
    payload:{id:string,password:string}
}
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
    login:{id:string,password:string}
    cart:CartItem[]
}
export type addToCartActions = { type:'addToCart', payload:{cart:CartItem}}
export type increaseQuantity = {type: 'increaseQuantity', payload:{id:CartItem['id']}}
export type decreaseQuantity = {type: 'decreaseQuantity', payload:{id:CartItem['id']}}
export type clearCart =    { type: 'clear-cart' }
export type removeProduct = {type:'removeProduct',payload:{id:CartItem['id']}}
export type RegisterActions = registerActions | RegisterCategoryAction | DeleteCategoryAction | RegisterProductAction | UploadImagesProducts | LoginUserAction | addToCartActions | increaseQuantity | decreaseQuantity | clearCart | removeProduct;


const localStorageCart = localStorage.getItem('cart')
export const initialState ={ 
    register:{
        Id: '',
        Password: '',
        Name_user: '',
        Last_name: '',
        Phome_number: '',
        Email: '',
        Rol_id:'1'
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
    },
    login:{
        id:'',
        password:''
    },
    cart: localStorageCart ? JSON.parse(localStorageCart) : []

}

export const RegisterReducer = (
    state:registerState =initialState,
    actions:RegisterActions

)=>{
    const context = useRegister()
    if(!context)return
    const {setSuccess,setError,setMsj,setShowAlert}= context;

    switch(actions.type){
        case'registerUSer':{
            CreateUser(actions.payload.user).then(response=>{
                console.log(response)
                if(response.ok){
                    setSuccess(true)
                }
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
        case 'loginUser':{
            LoginUser({id:actions.payload.id, password:actions.payload.password}).then(response=>{
                setMsj(response ? response.statusText : '')
                setError(false)
                if(response.ok){
                    setSuccess(true)
                }
            }).catch(error=>{
                console.log(error)
                setError(true)
                setSuccess(false)
            }) 
            break;     
        }
        case 'addToCart':{
            console.log(actions.payload.cart.id)
            const productExist = state.cart.find(product=> product.id === actions.payload.cart.id)
            let updatedCart : CartItem[] = []
            console.log(productExist)
            if(productExist){
                updatedCart = state.cart.map(product =>{
                    if(product.id === actions.payload.cart.id){
                        return{
                            ...product,
                            quantity: product.quantity + 1
                        }
                    }else{
                        return product
                    }
                }
                )
            }else{
                const newItem : CartItem = {...actions.payload.cart,quantity:1} 
                updatedCart = [...state.cart, newItem]
            }
            return {
                ...state,
                cart:updatedCart
            }
            
        }
        case 'decreaseQuantity':{
            const cart = state.cart.map(product=>{
                if(product.id === actions.payload.id){
                    return{
                        ...product,
                        quantity:product.quantity - 1
                    }
                }
                return product
            })
            localStorage.setItem('cart',JSON.stringify(cart))
            return{
                ...state,
                cart
            }
        }
        case 'increaseQuantity':{
            const cart = state.cart.map(product=>{
                if(product.id === actions.payload.id){
                    return{
                        ...product,
                        quantity:product.quantity + 1
                    }
                }
                return product
            })
            localStorage.setItem('cart',JSON.stringify(cart))

            return{
                ...state,
                cart
            }
        }
        case 'removeProduct':{
            const cart= state.cart.filter(product=>product.id !== actions.payload.id)
            return{
                ...state,
                cart
            }
        }
        
        case 'clear-cart':{
            localStorage.removeItem('cart')
            return{
                ...state,
                cart:[]
            }
        }
        default:
            return state
    }
}
// Hook personalizado para sincronizar el carrito con localStorage
