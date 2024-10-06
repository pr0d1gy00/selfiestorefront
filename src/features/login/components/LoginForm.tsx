import LoginCSS from '../styles/login.module.css'
import Title from '../../ui/title/components/Title'
import Input from '../../ui/inputs/components/Input'
import ButtonRegisterLogin from '../../ui/buttons/components/ButtonRegisterLogin'

export default function LoginForm() {
    return (
        <section className={LoginCSS.loginContainer}>
            <Title/>
            <h3>Ingresa!</h3>
            <div className={LoginCSS.containerForm}>
                <p>Cédula</p>
                <Input
                    placeholder='1234567'
                    type='number'
                />
                <p>Contraseña</p>
                <Input
                    placeholder='*******'
                    type='text'
                />
                <ButtonRegisterLogin title={'Ingresar'}/>
            </div>
        </section>
    )
}
