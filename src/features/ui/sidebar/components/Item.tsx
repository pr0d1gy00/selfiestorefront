import { SidebarItemData } from "../interfaces/SIdebarData"
import SidebarCSS from '../styles/sidebar.module.css'
import {  useNavigate } from 'react-router-dom';
type ItemProps ={
    data: SidebarItemData
    index:number
}


export default function Item({data,index}:ItemProps) {
    const navigate = useNavigate();
    const handleProductClick = (path: string) => {
        navigate(`${path}`);
    };

    return (
            <button className={SidebarCSS.item} key={index} onClick={()=>{handleProductClick(data.path)}} >
                <img src={data.iconPath} alt={data.content} />
                <p>{data.content}</p>
            </button>        
    )
}
