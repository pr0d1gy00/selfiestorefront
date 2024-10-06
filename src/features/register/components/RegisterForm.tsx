import Input from '../../ui/inputs/components/Input'
import RegisterCSS from '../styles/register.module.css'
import ButtonRegisterLogin from '../../ui/buttons/components/ButtonRegisterLogin'
import Title from '../../ui/title/components/Title'

export default function RegisterForm() {
    return (
        <section className={RegisterCSS.containerRegister}>
            <Title/>
            {/* <div className={RegisterCSS.containerImage}>
                <img src={logo} alt="selfiestore" />
            </div> */}
            <h3>Registrate!</h3>
            <div className={RegisterCSS.containerForm}>
                <p>Nombre</p>
                <Input
                    placeholder='Juan Jose'
                    type='text'
                />
                <p>Apellido</p>
                <Input
                    placeholder='Perez Perez'
                    type='text'
                />
                <p>Cedula</p>
                <Input
                    placeholder='1234567'
                    type='number'
                />
                <p>Telefono (con whatsapp)</p>
                <Input
                    placeholder='4145550001'
                    type='number'
                />
                <p>Contraseña</p>
                <Input
                    placeholder='*******'
                    type='text'
                />
                <ButtonRegisterLogin 
                
                    title={'Registrarme'}
                    
                />

            </div>
        </section>
    )
}
