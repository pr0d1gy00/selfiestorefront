import HeaderCSS from '../styles/header.module.css'
import MenuIcon from '../../../../assets/menu.svg'
import LoginIcon from '../../../../assets/login.png'
import useScreenSize from '../../../hooks/useScreenSize'
import cartEmpty from '../../../../assets/carro-de-compras-vista-lateral-vacia.webp'
import ProductCart from '../../../products/components/ProductCart'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type HeaderProps={
    setShowSidebar:Dispatch<SetStateAction<boolean>>
    showSidebar:boolean
}

export default function Header({showSidebar,setShowSidebar}:HeaderProps) {
    const {width}=useScreenSize()
    const [showCart,setShowCart]=useState(false)

    useEffect(()=>{
        if(width > 999) setShowSidebar(true)
    },[width,setShowSidebar])
    return (
        <header className={HeaderCSS.header}>
            {width < 1000 ?
                <div>
                    <button type='button' onClick={()=>{
                        setShowSidebar(!showSidebar)
                    }} className={HeaderCSS.buttonSidebar}>
                        <img src={MenuIcon} alt="Menu" />
                    </button>
                </div>
                : null
            }

            <div className={HeaderCSS.buttonLoginCartContainer}>
                <button onClick={()=>{
                    setShowCart(!showCart)
                }} className={HeaderCSS.buttonCart}>
                    <img src={cartEmpty} alt="cart" />
                </button>
                <button className={HeaderCSS.buttonLogin}>
                    Login
                    <img src={LoginIcon} alt="Entrar" />
                </button>
                {
                    showCart ? 
                    <div className={HeaderCSS.contentCart}>
                        <h3>Productos añadidos</h3>
                        <ProductCart image={'ddddddd'} nameProduct={'Franela oversize'} price={'10'} quantity={1}/>
                        <ProductCart image={'ddddddd'} nameProduct={'Franela oversize'} price={'10'} quantity={1}/>
                    </div>
                    :null
                }
                
            </div>
            
            
        </header>
    )
}
