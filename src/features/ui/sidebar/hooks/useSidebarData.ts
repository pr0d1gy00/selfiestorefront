import { SidebarItemData } from "../interfaces/SIdebarData";
import BuyIcon from '../../../../assets/bolsa-de-la-compra-sidebar.png'
import { useEffect, useState } from "react";
import ProductsIcon from '../../../../assets/ropa-limpia-sidebar.png'


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
    const [sidebarData,setSidebarData]=useState<SidebarItemData[]>([

    ])

    useEffect(()=>{
        setSidebarData(()=>[
            products,
            buy
        ])

        return setSidebarData(()=>[
            products,
            buy
            ]
        )

    },[])

    return sidebarData
}