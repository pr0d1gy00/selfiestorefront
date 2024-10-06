import { NavLink } from "react-router-dom"
import { SidebarItemData } from "../interfaces/SIdebarData"
import SidebarCSS from '../styles/sidebar.module.css'
type ItemProps ={
    data: SidebarItemData
}


export default function Item({data}:ItemProps) {
    return (
        <div>
            <NavLink to={data.path}>
                <div className={SidebarCSS.item}>
                    <img src={data.iconPath} alt={data.content} />
                    <p>{data.content}</p>
                </div>
            </NavLink>
        </div>
        
        
    )
}
