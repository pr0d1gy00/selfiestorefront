import HeaderCSS from '../styles/header.module.css'
import MenuIcon from '../../../../assets/menu.svg'
import LoginIcon from '../../../../assets/login.svg'
import { useSidebarData } from '../../sidebar/hooks/useSidebarData'
export default function Header() {
    const data = useSidebarData()

    return (
        <header className={HeaderCSS.header}>
            <div>
                <img src={MenuIcon} alt="Menu" />
            </div>
            
            <div className={HeaderCSS.actions}>
                {data.map(element=>
                <div>
                    <img src={element.iconPath} alt={element.content} />
                    <a href="">{element.content}</a>

                </div>
                )}
            </div>
            <div>
                <button className={HeaderCSS.buttonLogin}>
                    Login
                    <img src={LoginIcon} alt="Entrar" />
                </button>
            </div>
            
        </header>
    )
}
