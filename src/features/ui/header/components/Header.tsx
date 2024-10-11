import HeaderCSS from '../styles/header.module.css'
import MenuIcon from '../../../../assets/menu.svg'
import LoginIcon from '../../../../assets/login.svg'
import { useSidebarData } from '../../sidebar/hooks/useSidebarData'
export default function Header() {
    const data = useSidebarData()
    const size = document.documentElement.clientWidth
    return (
        <header className={HeaderCSS.header}>
            {size < 1200 ?
                <div>
                    <img src={MenuIcon} alt="Menu" />
                </div>
                : null
            }
            
            <div className={HeaderCSS.actions}>
                {data.map(element=>
                <div>
                    <img id='image' src={element.iconPath} alt={element.content} />
                    <a id='link' href="">{element.content}</a>

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
