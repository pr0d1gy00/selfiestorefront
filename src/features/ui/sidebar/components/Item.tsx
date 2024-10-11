import { SidebarItemData } from "../interfaces/SIdebarData"
import SidebarCSS from '../styles/sidebar.module.css'
type ItemProps ={
    data: SidebarItemData
    index:number
}


export default function Item({data,index}:ItemProps) {
    return (
            <div className={SidebarCSS.item} key={index}>
                <img src={data.iconPath} alt={data.content} />
                <p>{data.content}</p>
            </div>        
    )
}
