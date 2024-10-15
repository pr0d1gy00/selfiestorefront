import { ChangeEvent, Dispatch, FormEvent, useContext, useEffect, useState } from "react";
import ButtonRegisterLogin from "../../ui/buttons/components/ButtonRegisterLogin";
import Input from "../../ui/inputs/components/Input";
import ProductsCSS from '../styles/products.module.css'
import { RegisterActions } from "../../reducers/register-user";
import { RegisterProductInterfaces } from "../interfaces/ProductsInterfaces";
import { GetCategories } from "../../category/helpers/GetCategories";
import { GetCategoryInterfaces } from "../../category/interfaces/Category";
import { RegisterContext } from "../../register/context/RegisterContext";
import Alert from "../../ui/alerts/components/Alert";
import OtherTitle from "../../ui/OtherTitle/components/OtherTitle";

type RegisterProductsProps={
	state:RegisterProductInterfaces | undefined
	dispatch:Dispatch<RegisterActions>
}
const initialState ={
	Category_id: '1',
	Name_product: '',
	Description: '' ,
	Image:null,
	Status: '1',
	Price:'0',
	Amount_inventory:'0'
}

export default function RegisterProducts({state,dispatch}:RegisterProductsProps) {
	const context = useContext(RegisterContext)
	const [categories, setCategories]=useState<GetCategoryInterfaces[] | null>(null)
	const [product,setProduct]=useState<RegisterProductInterfaces>(initialState)
    const [showAlert, setShowAlert]=useState(false)
	console.log(state?.Description)
	if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    
    const {success,msj} = context;
	const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
		setProduct({
			...product,
			[e.target.id]:e.target.value
		})
	}
	const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
		e.preventDefault()
		dispatch({type:'registerProduct',payload:{product:product}})
		setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },4000)
		setProduct({
			...initialState
		})
		
	}
	const disableButton = product.Price === '0' || product.Amount_inventory === '0' || product.Name_product.length < 3 || product.Description.length < 3;
	useEffect(()=>{
		GetCategories().then(response=>{
			setCategories(response)
		}).catch(error=>{
			console.log(error)
		})
	},[])

	return (
		<section className={ProductsCSS.containerRegisterProducts}>
			<OtherTitle title={"Bienvenido Jose"} subtitle={"Registra tu producto aquí!"}/>
			{showAlert && (success ?
                    <Alert title={msj} isOk={true} content={'felicidades, ahora carga las imagenes para que se muestre a los usuarios'}/> 
                :
                    <Alert title={'Error'} isOk={false} content={msj}/> 
            )}
			<div className={ProductsCSS.registerProducts}>
				<form action="POST" onSubmit={handleSubmit}>
					<p className={ProductsCSS.textRegisterProducts}>Nombre</p>
					<Input type="text" id="Name_product" onChange={handleChange} value={product.Name_product} placeholder="Pantalon caballeros"/>
					<p className={ProductsCSS.textRegisterProducts}>Descripción</p>
					<Input type="text" id="Description" onChange={handleChange} value={product.Description} placeholder="pantalon para que vistas a la moda"/>
					<p className={ProductsCSS.textRegisterProducts}>Estado</p>
					<select title="status" id="Status" onChange={handleChange} value={product.Category_id}>
						<option value="1" key={1}>Disponible</option>
						<option value="0" key={0}>Agotado</option>
					</select>
					<p className={ProductsCSS.textRegisterProducts}>Categoria</p>
					<select title="status" id="Category_id" onChange={handleChange} value={product.Category_id}>
						{categories?.map(category=>
							<option key={category.IdCategory} value={category.IdCategory}>{category.Name_category}</option>
						)}
					</select>
					<p className={ProductsCSS.textRegisterProducts}>Precio $</p>
					<Input type="number" id="Price" onChange={handleChange} value={product.Price}/>
					<p className={ProductsCSS.textRegisterProducts}>Cantidad en inventario</p>
					<Input type="number" id="Amount_inventory" onChange={handleChange} value={product.Amount_inventory}/>
					<ButtonRegisterLogin disabled={disableButton} title={"Registrar"}
						
					/>
				</form>
			</div>					
		</section>
	)
}
