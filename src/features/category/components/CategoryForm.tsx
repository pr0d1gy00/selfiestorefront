import { ChangeEvent, Dispatch, FormEvent, useContext, useEffect, useState } from 'react'
import ButtonRegisterLogin from '../../ui/buttons/components/ButtonRegisterLogin'
import Input from '../../ui/inputs/components/Input'
import CategoryCSS from '../styles/category.module.css'
import { CategoryInterfaces } from '../interfaces/Category'
import { RegisterActions } from '../../reducers/register-user'
import { RegisterContext } from '../../register/context/RegisterContext'
import Alert from '../../ui/alerts/components/Alert'
import { useDispatch } from '../../ui/container/Components/ContainerApp'
import OtherTitle from '../../ui/OtherTitle/components/OtherTitle'
import { useNavigate, useParams } from 'react-router-dom'
import { GetCategoryById } from '../helpers/GetCategoryById'

const initialState ={
	name:''
}
type CategoryFormProps={
	state:CategoryInterfaces | undefined
	dispatch: Dispatch<RegisterActions>
}

export default function CategoryForm({dispatch}:CategoryFormProps) {
	const {state}=useDispatch()
	const context = useContext(RegisterContext)
	const [name, setName]=useState(initialState)
    const [showAlert, setShowAlert]=useState(false)
	const navigate = useNavigate()
	if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
	const {id}=useParams()
console.log(id)
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
		if(!id){
			dispatch({type:"registerCategory",payload:{category:name}})
			setTimeout(()=>setShowAlert(true),400)
			setTimeout(()=>{
				setShowAlert(false)
			},3000)
			setName({
				...initialState
			})
		}else{
			dispatch({type:'editCategory',payload:{category:{IdCategory:id,Name_category:name.name}}})
			setTimeout(()=>setShowAlert(true),400)
			if(success){
				setTimeout(()=>{
					navigate('../category/showList')
					setShowAlert(false)
				},3000)
				setName({
					...initialState
				})
			}

		}
        
    }
	useEffect(() => {
        if (!id) return;
        GetCategoryById(id).then(response => {
            if (response) {
                setName({ name: response.Name_category });
            } else {
                console.error(response);
            }
        }).catch(error => console.error(error));
    }, [id]);
	return (
		<section className={CategoryCSS.containerRegisterCategory}>
			{showAlert &&
				(success ? (
					<Alert
						title={msj}
						isOk={true}
						content={
							"felicidades, ahora puedes identificar a un producto con esta categoria"
						}
					/>
				) : (
					<Alert
						title={"Error"}
						isOk={false}
						content={msj}
					/>
				))}
			<OtherTitle
				title={`Bienvenido ${state?.userLoggedIn.Name_user}`}
				subtitle={"registra una categoria!"}
			/>
			<div className={CategoryCSS.registerCategory}>
				<form action="POST" onSubmit={handleSubmit}>
					<p className={CategoryCSS.textRegisterCategory}>
						Nombre
					</p>
					<Input
						type="text"
						value={name.name}
						id="name"
						onChange={handleChange}
					/>
					<ButtonRegisterLogin
						type="submit"
						title={"Registrar"}
						disabled={disableButton}
					/>
				</form>
			</div>
		</section>
	);
}
