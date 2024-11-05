import { Dispatch, useContext, useEffect, useState } from "react";
import OtherTitle from "../../ui/OtherTitle/components/OtherTitle";
import TableBody from "../../ui/table/components/TableBody";
import TableContent from "../../ui/table/components/TableContent";
import TableHead from "../../ui/table/components/TableHead";
import { RegisterContext } from "../../register/context/RegisterContext";
import { GetProductsInterfaces } from "../interfaces/ProductsInterfaces";
import Alert from "../../ui/alerts/components/Alert";
import { GetProducts } from "../helpers/GetProducts";
import { RegisterActions } from "../../reducers/register-user";
import ProductsCSS from '../styles/products.module.css'
import { useDispatch } from "../../ui/container/Components/ContainerApp";

type ShowProductsTableProps={
	dispatch: Dispatch<RegisterActions>
}

export default function ShowProductsTable({dispatch}:ShowProductsTableProps) {
	const {state}=useDispatch()
	const context = useContext(RegisterContext)
	const [dataContent, setDataContent] = useState<Omit<GetProductsInterfaces, 'Image'>[]>([]);
	if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    const {setError,setMsj,msj,success,showAlert,setShowAlert} = context;
	const dataHeader =[{name:'Id'},{name:'Categoria'},{name:'Nombre'},{name:'Descripcion'},{name:'Estado'},{name:'Precio'}, {name:'Inventario'},{name:'Acciones'}]
	
	useEffect(()=>{
		GetProducts().then(response =>{
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const filteredData = response.map(({ Image, ...rest }) => rest);
			setDataContent(filteredData)
		}).catch(error=>{
			console.log(error)
			setError(true)
			setMsj('Error al mostrar los productos')
			setShowAlert(true)
			setTimeout(()=>{setShowAlert(false)},5000)
		})
	},[])
	return (
		<div className={ProductsCSS.productsTable}>
			{showAlert && (success ?
				<Alert title={msj} isOk={true} content={''}/> 
			: 
				<Alert title={'Error'} isOk={false} content={msj}/> 
			)}
			<OtherTitle title={`Bienvenido ${state?.userLoggedIn.Name_user}`} subtitle={"Mira todos los productos que tienes registrados!"}/>
			<TableBody>
				<TableHead data={dataHeader}/>
				<TableContent dataContent={dataContent} dispatch={dispatch} showActions={true} showEdit={true} showDelete={false}/>
			</TableBody>
		</div>
	)
}
