import { SidebarItemData } from "../interfaces/SIdebarData";
import BuyIcon from '../../../../assets/bolsa-de-la-compra-sidebar.png'
import { useEffect, useState } from "react";
import ProductsIcon from '../../../../assets/ropa-limpia-sidebar.png'


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
    iconPath: BuyIcon,
    type: "submenu",
    path: "product/register"
}
const showProductsRegistered : SidebarItemData = {
    content: 'Lista de productos',
    iconPath: BuyIcon,
    type: "submenu",
    path: "product/showList"
}
const RegisterCategoryForm : SidebarItemData = {
    content: 'Registrar categoria',
    iconPath: BuyIcon,
    type: "submenu",
    path: "category/register"
}
const UploadImagesProductsForm : SidebarItemData = {
    content: 'Imagen Producto',
    iconPath: BuyIcon,
    type: "submenu",
    path: "products/upload/images"
}
const RegisterUserForm : SidebarItemData = {
    content: 'Registrarme',
    iconPath: BuyIcon,
    type: "submenu",
    path: "user/register"
}
const ShowCategoriesTable : SidebarItemData = {
    content: 'Lista Categorias',
    iconPath: BuyIcon,
    type: "submenu",
    path: "category/showList"
}
export const useSidebarData = ()=>{
    const [sidebarData,setSidebarData]=useState<SidebarItemData[]>([

    ])

    useEffect(()=>{
        setSidebarData(()=>[
            products,
            buy,
            registerProductForm,
            showProductsRegistered,
            RegisterCategoryForm,
            UploadImagesProductsForm,
            RegisterUserForm,
            ShowCategoriesTable
        ])

        return setSidebarData(()=>[
            products,
            buy,
            registerProductForm,
            showProductsRegistered,
            RegisterCategoryForm,
            UploadImagesProductsForm,
            RegisterUserForm,
            ShowCategoriesTable
            ]
        )

    },[])

    return sidebarData
}