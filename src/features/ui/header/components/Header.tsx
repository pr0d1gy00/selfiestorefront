import HeaderCSS from '../styles/header.module.css'
import MenuIcon from '../../../../assets/menu.svg'
import LoginIcon from '../../../../assets/login.png'
import useScreenSize from '../../../hooks/useScreenSize'
import cartEmpty from '../../../../assets/carro-de-compras-vista-lateral-vacia.webp'
import ProductCart from '../../../products/components/ProductCart'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartItem } from '../interfaces/HeaderInterfaces'
import ButtonRegisterLogin from '../../buttons/components/ButtonRegisterLogin'
import { RegisterActions, registerState } from '../../../reducers/register-user'
import dollarPrice from '../../../../../public/dollarPrice.json'
type HeaderProps={
    setShowSidebar:Dispatch<SetStateAction<boolean>>
    showSidebar:boolean
    dispatch:Dispatch<RegisterActions>
	state: registerState | undefined
}

export default function Header({showSidebar,setShowSidebar,dispatch,state}:HeaderProps) {
    const price = useMemo(()=>{
        return state?.cart.reduce((total,product)=> total + (product.quantity * parseFloat(product.price)),0)
    },[state?.cart])
    const {width}=useScreenSize()
    let priceDollar = dollarPrice.price
    const [productsToShow,setProductsToShow]=useState<CartItem[] | undefined>(undefined)
    const [showCart,setShowCart]=useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if(width > 1300) setShowSidebar(true)
    },[width,setShowSidebar])

    useEffect(()=>{
        if(!state)return
        setProductsToShow(state.cart)
    },[state])
	console.log(state
		,dispatch
	)
    return (
        <header className={HeaderCSS.header}>
            {width < 1300 ?
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
                <button className={HeaderCSS.buttonLogin} onClick={()=>navigate('user/login/auth')}>
                    Login
                    <img src={LoginIcon} alt="Entrar" />
                </button>
                {
                    showCart && (
                        productsToShow === undefined || productsToShow?.length === 0 ?(
                            <div className={HeaderCSS.contentCart}>
                                <h3>Carrito de compras</h3>
                                <h2>No hay productos</h2>

                            </div>
                        ):
                        <div className={HeaderCSS.contentCart}>
                            <h3>Carrito de compras</h3>
                            {productsToShow.map(product=>(
                            <>
                                <ProductCart id={product.id} image={product.image} nameProduct={product.nameProduct} price={product.price} quantity={product.quantity} key={product.id} dispatch={dispatch}/>

                            </>

                                ))
                            }
                            <div className={HeaderCSS.AmountTotal}>
                                <h3>Precio total de la compra</h3>
                                <p>Precio en Dolares: <strong>{price}$</strong></p>
                                <p>Precio en Bolivares: <strong>{price ? price * parseInt(priceDollar) : 0 }Bs</strong></p>
                            </div>
                            <ButtonRegisterLogin title={'Comprar'}/>
                        </div>
                    )
                }

            </div>


        </header>
    )
}
