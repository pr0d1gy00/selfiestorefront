import HeaderCSS from '../styles/header.module.css'
import MenuIcon from '../../../../assets/menu.svg'
import LoginIcon from '../../../../assets/login.png'
import useScreenSize from '../../../hooks/useScreenSize'
export default function Header() {
    const {width}=useScreenSize()
    return (
        <header className={HeaderCSS.header}>
            {width < 1200 ?
                <div>
                    <img src={MenuIcon} alt="Menu" />
                </div>
                : null
            }

            <div>
                <button className={HeaderCSS.buttonLogin}>
                    Login
                    <img src={LoginIcon} alt="Entrar" />
                </button>
            </div>
            
        </header>
    )
}
