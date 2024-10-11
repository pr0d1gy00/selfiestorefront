import { Dispatch, useContext, useEffect, useState } from 'react'
import TableBody from '../../ui/table/components/TableBody'
import { GetCategories } from '../helpers/GetCategories'
import { RegisterContext } from '../../register/context/RegisterContext'
import { GetCategoryInterfaces } from '../interfaces/Category'
import Alert from '../../ui/alerts/components/Alert'
import TableHead from '../../ui/table/components/TableHead'
import TableContent from '../../ui/table/components/TableContent'
import CategoryCSS from '../styles/category.module.css'
import OtherTitle from '../../ui/OtherTitle/components/OtherTitle'
import { RegisterActions } from '../../reducers/register-user'

type CategoryFormProps={
	dispatch: Dispatch<RegisterActions>
}


export default function CategoryTable({dispatch}:CategoryFormProps) {
	const context = useContext(RegisterContext)
	const [dataContent,setDataContent]=useState<GetCategoryInterfaces[]>([])

	if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    const data = [
		{name:'Id'},
		{name:'Nombre'},
		{name:'Acciones'}

	]
    const {setError,error,setMsj,msj,success,showAlert,setShowAlert} = context;

	useEffect(()=>{
		GetCategories().then(response=>{
			setDataContent(response)
		}).catch(error=>{
			console.log(error)
			setError(true)
			setMsj('Error al mostrar las categorias')
			setShowAlert(true)
			setTimeout(()=>{setShowAlert(false)},5000)
		})
	},[])
	
	return (
		<div className={CategoryCSS.categoryTable}>
			{showAlert && (success ?
				<Alert title={msj} isOk={true} content={''}/> 
			: 
				<Alert title={'Error'} isOk={false} content={msj}/> 
			)}
			<OtherTitle title={'Bienvenido José!'} subtitle={'Aqui estan todas las categorias creadas!'}/>
			<TableBody>
				<TableHead data={data}/>
				<TableContent
					showActions={true} 
					dataContent={dataContent}
					dispatch={dispatch}/>
			</TableBody>
		</div>
	)
}
