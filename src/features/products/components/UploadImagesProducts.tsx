import { ChangeEvent, Dispatch, FormEvent, useContext, useEffect, useState } from 'react'
import OtherTitle from '../../ui/OtherTitle/components/OtherTitle'
import ProductsCSS from '../styles/products.module.css'
import { GetProducts } from '../helpers/GetProducts'
import { RegisterContext } from '../../register/context/RegisterContext'
import { GetProductsInterfaces, UploadImagesProductsInterfaces } from '../interfaces/ProductsInterfaces'
import Alert from '../../ui/alerts/components/Alert'
import Input from '../../ui/inputs/components/Input'
import ButtonRegisterLogin from '../../ui/buttons/components/ButtonRegisterLogin'
import { RegisterActions } from '../../reducers/register-user'

type UploadImagesProductsProps ={
	dispatch:Dispatch<RegisterActions>
}
const initialState ={
	id:'',
	image1:undefined,
	image2:undefined,
	image3:undefined,
	image4:undefined,
	image5:undefined
}
export default function UploadImagesProducts({dispatch}:UploadImagesProductsProps) {
	const context = useContext(RegisterContext)
	const [dataContent,setDataContent]=useState<GetProductsInterfaces[]>([])
	const [selectedImages,setSelectedImages]=useState<UploadImagesProductsInterfaces>(initialState)
	console.log(selectedImages)
	if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    const {setError,setMsj,msj,success,showAlert,setShowAlert} = context;
	const handleChange = (e:ChangeEvent<HTMLInputElement| HTMLSelectElement>)=>{
		if(e.target instanceof HTMLInputElement){
			const file = e.target.files?.[0]
			setSelectedImages({
				...selectedImages,
				[e.target.id]:file
			})
		}else if(e.target instanceof HTMLSelectElement){
			setSelectedImages(
				{ ...selectedImages,
					id: e.target.value 
				});
		}
		

	}
	const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
		e.preventDefault()

		dispatch({type:"uploadProduct",payload:{uploadImages:selectedImages}})
		setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },3000)
		setSelectedImages({...initialState})
	}
	const disableButton=!selectedImages.image1 || !selectedImages.image2 || !selectedImages.image3 || !selectedImages.image4|| !selectedImages.image5 || selectedImages.id === '0'
	
	useEffect(()=>{
		GetProducts().then(response =>{
			setDataContent(response)
		}).catch(error=>{
			console.log(error)
			setError(true)
			setMsj('Error al mostrar los productos')
			setShowAlert(true)
			setTimeout(()=>{setShowAlert(false)},5000)
		})
	},[])

	return (
		<div className={ProductsCSS.containerRegisterProducts}>
			{showAlert && (success ?
				<Alert title={msj} isOk={true} content={''}/> 
			: 
				<Alert title={'Error'} isOk={false} content={msj}/> 
			)}
			<OtherTitle title={'Bienvenido Jose'} subtitle={'Sube las imagenes que se le mostraran al usuario'}/>
			<div className={ProductsCSS.registerProducts}>
				<form action="POST" onSubmit={handleSubmit}>
					<p className={ProductsCSS.textRegisterProducts}>Selecciona el producto</p>
					<select title='product' name="product" id="id" onChange={(e)=>{
						setSelectedImages({
							...selectedImages,
							id:e.target.value
						})
					}}>
						{dataContent.map(dataContent=>
							<option value={dataContent.IdProduct}>{dataContent.Name_product}</option>
						)}
					</select>
					<p className={ProductsCSS.textRegisterProducts}>Imagen 1</p>
					<Input type='file' id='image1' accept='image/jpeg,image/png,image/webp' onChange={handleChange}
					/>
					<p className={ProductsCSS.textRegisterProducts}>Imagen 2</p>
					<Input type='file' id='image2' disabled={!selectedImages.image1} accept='image/jpeg,image/png,image/webp' onChange={handleChange}
					/>
					<p className={ProductsCSS.textRegisterProducts}>Imagen 3</p>
					<Input type='file' id='image3' disabled={!selectedImages.image2}accept='image/jpeg,image/png,image/webp' onChange={handleChange}
					/>
					<p className={ProductsCSS.textRegisterProducts}>Imagen 4</p>
					<Input type='file' id='image4' disabled={!selectedImages.image3}accept='image/jpeg,image/png,image/webp' onChange={handleChange}
					/>

					<p className={ProductsCSS.textRegisterProducts}>Imagen 5</p>
					<Input type='file' id='image5' disabled={!selectedImages.image4}accept='image/jpeg,image/png,image/webp' onChange={handleChange}
					/>
					<div className={ProductsCSS.containerPreviewImages}>
					{selectedImages && (
						<div>	
							{selectedImages.image1 ? <img
								className={ProductsCSS.previewImage}
								src={URL.createObjectURL(selectedImages.image1)}
								width={50}
								height={50}
								alt="Imagen seleccionada"
							/>
							: 
								null
							}
							{selectedImages.image2 ? 
								<img
								className={ProductsCSS.previewImage}
								src={URL.createObjectURL(selectedImages.image2)}
								width={50}
								height={50}
								alt="Imagen seleccionada"
								/>	 
							:	null
							}
							{selectedImages.image3 ? 
								<img
								className={ProductsCSS.previewImage}
								src={URL.createObjectURL(selectedImages.image3)}
								width={50}
								height={50}
								alt="Imagen seleccionada"
								/> 
							:
								null 
							}
							
							{selectedImages.image4 ? 
								<img
								className={ProductsCSS.previewImage}
								src={URL.createObjectURL(selectedImages.image4)}
								width={50}
								height={50}
								alt="Imagen seleccionada"
								/>		
							: 
								null
							}
							{selectedImages.image5 ?
								<img
								className={ProductsCSS.previewImage}
								src={URL.createObjectURL(selectedImages.image5)}
								width={50}
								height={50}
								alt="Imagen seleccionada"
								/>
							:
								null
							}

						</div>
						

					)}
					</div>
					<ButtonRegisterLogin title='Registrar' disabled={disableButton}/>
				</form>
			</div>
		</div>
	)
}
