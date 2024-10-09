import Input from '../../ui/inputs/components/Input'
import RegisterCSS from '../styles/register.module.css'
import ButtonRegisterLogin from '../../ui/buttons/components/ButtonRegisterLogin'
import Title from '../../ui/title/components/Title'
import { ChangeEvent, Dispatch, FormEvent, useContext, useState } from 'react'
import { RegisterUserInterface } from '../interfaces/RegisterInterfaces'
import { registerActions } from '../../reducers/register-user'
import Alert from '../../ui/alerts/components/Alert'
import { RegisterContext } from '../context/RegisterContext'

type RegisterFormProps ={
    dispatch:Dispatch<registerActions>
    state:RegisterUserInterface | undefined
}
const initialState ={
    Id: '',
    Password: '',
    Name_user: '',
    Last_name: '',
    Phome_number: '',
    Email: ''
}

export default function RegisterForm({dispatch}:RegisterFormProps) {
	const context = useContext(RegisterContext)
    const [register,setRegister]=useState<RegisterUserInterface>(initialState)
    const [showAlert, setShowAlert]=useState(false)

    if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    
    const {success} = context;
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setRegister({
            ...register,
            [e.target.id]:e.target.value
        })
    }
    console.log(register)

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch({type:'registerUSer',payload:{user:register}})
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },3000)
        // setRegister({
        //     ...initialState
        // })
    }
    return (
        <section className={RegisterCSS.containerRegister}>
            {showAlert && (success ?
                    <Alert title={'Registrado correctamente'} isOk={true} content={'Felicidades, ahora puedes comprar con gusto'}/> 
                :
                    <Alert title={'Error'} isOk={false} content={'Verifica los campos'}/> 
            )}
            
            <form action="POST" onSubmit={handleSubmit}>
                <Title/>
                {/* <div className={RegisterCSS.containerImage}>
                    <img src={logo} alt="selfiestore" />
                </div> */}
                <h3>Registrate!</h3>
                <div className={RegisterCSS.containerForm}>
                    <p>Nombre</p>
                    <Input
                        id='Name_user'
                        placeholder='Juan Jose'
                        type='text'
                        onChange={handleChange}
                    />
                    <p>Apellido</p>
                    <Input
                        id='Last_name'
                        placeholder='Perez Perez'
                        type='text'
                        onChange={handleChange}
                    />
                    <p>Cedula</p>
                    <Input
                    id='Id'
                        placeholder='1234567'
                        type='number'
                        onChange={handleChange}
                    />
                    <p>Telefono (con whatsapp)</p>
                    <Input
                        id='Phome_number'
                        placeholder='4145550001'
                        type='number'
                        onChange={handleChange}
                    />
                    <p>Correo</p>
                    <Input
                        id='Email'
                        placeholder='correo@correo.com'
                        type='email'
                        onChange={handleChange}
                    />
                    <p>Contraseña</p>
                    <Input
                        id='Password'
                        placeholder='*******'
                        type='text'
                        onChange={handleChange}
                    />
                    <ButtonRegisterLogin 
                        type='submit'
                        title={'Registrarme'}
                        
                    />
                </div>

            </form>
                
        </section>
    )
}
