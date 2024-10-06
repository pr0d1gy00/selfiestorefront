import { SidebarItemData } from "../interfaces/SIdebarData";
import BuyIcon from '../../../../assets/bolsa-de-la-compra.png'
import { useEffect, useState } from "react";
import ProductsIcon from '../../../../assets/ropa-limpia.png'


const products : SidebarItemData ={
    content: "Productos",
    iconPath:ProductsIcon ,
    type: "submenu",
    path: "products"
}

const buy : SidebarItemData = {
    content: 'Tus compras',
    iconPath: BuyIcon,
    type: "submenu",
    path: "yourPurchase"
}

export const useSidebarData = ()=>{
    const [sidebarData,setSidebarData]=useState<SidebarItemData[]>([])

    useEffect(()=>{

        return setSidebarData(()=>[
            products,
            buy
            ]
        )

    },[])

    return sidebarData
}