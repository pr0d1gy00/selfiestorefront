import { SidebarItemData } from "../interfaces/SIdebarData";
import BuyIcon from '../../../../assets/bolsa-de-la-compra-sidebar.png'
import { useEffect, useState } from "react";
import ProductsIcon from '../../../../assets/ropa-limpia-sidebar.png'
import RegisterUserIcon from '../../../../assets/agregar.png'
import UploadImagesIcon from '../../../../assets/subir-imagenes.png'
import ProductsListIcon from '../../../../assets/lista-productos.png'
import RegisterProductsAndCategoriesIcon from '../../../../assets/anadir.png'
import CategoriesListIcon from '../../../../assets/categorias.png'
import { registerState } from "../../../reducers/register-user";
const products : SidebarItemData ={
    content: "Productos",
    iconPath:ProductsIcon ,
    type: "submenu",
    path: "/"
}

const buy : SidebarItemData = {
    content: 'Tus compras',
    iconPath: BuyIcon,
    type: "submenu",
    path: "yourPurchase"
}
const registerProductForm : SidebarItemData = {
    content: 'Registrar Producto',
    iconPath: RegisterProductsAndCategoriesIcon,
    type: "submenu",
    path: "product/register"
}
const showProductsRegistered : SidebarItemData = {
    content: 'Lista de productos',
    iconPath: ProductsListIcon,
    type: "submenu",
    path: "product/showList"
}
const RegisterCategoryForm : SidebarItemData = {
    content: 'Registrar categoria',
    iconPath: RegisterProductsAndCategoriesIcon,
    type: "submenu",
    path: "category/register"
}
const ShowCategoriesTable : SidebarItemData = {
    content: 'Lista Categorias',
    iconPath: CategoriesListIcon,
    type: "submenu",
    path: "category/showList"
}
const UploadImagesProductsForm : SidebarItemData = {
    content: 'Imagen Producto',
    iconPath: UploadImagesIcon,
    type: "submenu",
    path: "products/upload/images"
}
const RegisterUserForm : SidebarItemData = {
    content: 'Registrarme',
    iconPath: RegisterUserIcon,
    type: "submenu",
    path: "user/register"
}

export const useSidebarData = (state:registerState | undefined)=>{
    const [sidebarData,setSidebarData]=useState<SidebarItemData[]>([

    ])

    useEffect(()=>{
        if(!state)return
        
        // if(state.userLoggedIn.Rol_id=== '2')
        //     return setSidebarData(()=>[
        //         products,
        //         buy              
        //     ])
        // if(!state.userLoggedIn)
        //     return setSidebarData(()=>[
        //         products,
        //        RegisterUserForm
        // ])
        return setSidebarData(()=>[
            products,
            buy,
            registerProductForm,
            showProductsRegistered,
            RegisterCategoryForm,
            ShowCategoriesTable,
            UploadImagesProductsForm,
            RegisterUserForm
            
            ]
        )

    },[state])

    return sidebarData
}