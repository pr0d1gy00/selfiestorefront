import SidebarCSS from '../styles/sidebar.module.css'
import Logo from '../../../../assets/logo.webp'
export default function SidebarHeader() {
return (
    <div className={SidebarCSS.asideHeader}>
        <img src={Logo} alt="" className={SidebarCSS.logo} />
        <h2>Selfie Store</h2>
    </div>
)
}
