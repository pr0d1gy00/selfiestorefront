import { ChangeEvent, Dispatch, FormEvent, useContext, useState } from 'react'
import ButtonRegisterLogin from '../../ui/buttons/components/ButtonRegisterLogin'
import Input from '../../ui/inputs/components/Input'
import CategoryCSS from '../styles/category.module.css'
import { CategoryInterfaces } from '../interfaces/Category'
import { RegisterActions } from '../../reducers/register-user'
import { RegisterContext } from '../../register/context/RegisterContext'
import Alert from '../../ui/alerts/components/Alert'

const initialState ={
	name:''
}
type CategoryFormProps={
	state:CategoryInterfaces | undefined
	dispatch: Dispatch<RegisterActions>
}

export default function CategoryForm({dispatch}:CategoryFormProps) {
	const context = useContext(RegisterContext)
	const [name, setName]=useState(initialState)
    const [showAlert, setShowAlert]=useState(false)

	if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    
    const {success,msj} = context;
	const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
		e.preventDefault()
		setName({
			...name,
			[e.target.id]:e.target.value
		})

	}
	const disableButton = name.name.length <= 3
	const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch({type:"registerCategory",payload:{category:name}})
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },3000)
        setName({
            ...initialState
        })
    }
console.log(name)
	return (
		<section className={CategoryCSS.containerRegisterCategory}>
			{showAlert && (success ?
                    <Alert title={msj} isOk={true} content={'felicidades, ahora puedes identificar a un producto con esta categoria'}/> 
                :
                    <Alert title={'Error'} isOk={false} content={msj}/> 
            )}
			<h2>Bienvenido José!</h2>
			<h3>Registra la categoría aquí!</h3>
			<div className={CategoryCSS.registerCategory}>
				<form action="POST" onSubmit={handleSubmit}>
					<p className={CategoryCSS.textRegisterCategory}>Nombre</p>
					<Input type="text"
						value={name?.name}
						id='name'
						onChange={handleChange}
					/>
					<ButtonRegisterLogin 
						type='submit'
						title={'Registrar'}
						disabled={disableButton}
					/>
				</form>
			</div>
		</section>
	)
}
