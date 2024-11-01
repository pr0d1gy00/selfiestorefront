import LoginCSS from '../styles/login.module.css'
import Title from '../../ui/title/components/Title'
import Input from '../../ui/inputs/components/Input'
import ButtonRegisterLogin from '../../ui/buttons/components/ButtonRegisterLogin'
import { ChangeEvent, Dispatch, FormEvent, useContext, useState } from 'react'
import { RegisterActions } from '../../reducers/register-user'
import { RegisterContext } from '../../register/context/RegisterContext'
import { useNavigate } from 'react-router-dom'
import Alert from '../../ui/alerts/components/Alert'

const initialState ={
    id:'',
    password:''
}
type LoginUserProps={
	state:{id:string,password:string} | undefined
	dispatch:Dispatch<RegisterActions>
}
export default function LoginForm({state,dispatch}:LoginUserProps) {
    const context = useContext(RegisterContext)
    const [infoLogin,setInfoLogin]=useState(initialState)
    const [showAlert, setShowAlert]=useState(false)
    if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    const {success,msj}=context
    const navigate = useNavigate();

    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setInfoLogin({
            ...infoLogin,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(dispatch)
        dispatch({type:'loginUser',payload:{id:infoLogin.id,password:infoLogin.password}})
        setTimeout(()=>setShowAlert(true)
        ,500)
        setTimeout(() => {
            setShowAlert(false)
            
        }, 2000)
        // setTimeout(()=>{
        //     if (success) {
        //         navigate('/')
        //     }
        // },1000)
    }
    return (
        <section className={LoginCSS.loginContainer}>
            {showAlert && (success ?
                    <Alert title={msj} isOk={true} content={'Autenticado con éxito'}/> 
                :
                    <Alert title={'Error, por favor verifique los campos o la conexión'} isOk={false} content={msj}/> 
            )}
            <Title/>
            <h3>Ingresa!</h3>
                <div className={LoginCSS.containerForm}>
                    <form action="POST" onSubmit={handleSubmit}>
                        <p>Cédula</p>
                        <Input
                            placeholder='1234567'
                            type='number'
                            id='id'
                            onChange={handleChange}
                        />
                        <p>Contraseña</p>
                        <Input
                            placeholder='*******'
                            type='text'
                            id='password'
                            onChange={handleChange}
                        />
                        <ButtonRegisterLogin type="submit" title={'Ingresar'}/>
                    </form>
                </div>
            
        </section>
    )
}