import Card from "./Card";
import franelaOversize from '../../../assets/franelaOversize.jpeg'
import data from '../../../../public/priceDollar.json'
import ProductsCSS from '../styles/products.module.css'
import Logo from '../../../assets/logo.webp'
export default function ShowProducts() {

    let dollar = data.price

    return (
        <div className={ProductsCSS.container}>
            <div className={ProductsCSS.productsHeader
            }>   
                <div>
                    <h1>Productos</h1>
                    <h2>Compra ya!</h2>
                    <h3>Los mejores productos para ti!</h3>
                </div>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                
            </div>
            <div className={ProductsCSS.productsContainer}>
                <Card title={"Camisa Oversize para caballeros"} img={franelaOversize} price={(10.99).toString()} id={(1).toString()} description="Tremenda camisa para que vistas a la moda y puedas enamorar very muchas nenasdddddddddddddddddddddddddddddddddgsffffffffffffffffffffddddddd"/>
                <Card title={"Camisa Oversize para caballeros"} img={franelaOversize} price={(10.99*dollar).toFixed(2).toString()} id={(1).toString()} description="Tremenda camisa para que vistas a la moda y puedas enamorar very muchas nenas"/>
                <Card title={"Camisa Oversize para caballeros"} img={franelaOversize} price={(10.99).toString()} id={(1).toString()} description="Tremenda camisa para que vistas a la moda y puedas enamorar very muchas nenas"/>
                <Card title={"Camisa Oversize para caballeros"} img={franelaOversize} price={(10.99).toString()} id={(1).toString()} description="Tremenda camisa para que vistas a la moda y puedas enamorar very muchas nenas"/>
                <Card title={"Camisa Oversize para caballeros"} img={franelaOversize} price={(10.99).toString()} id={(1).toString()} description="Tremenda camisa para que vistas a la moda y puedas enamorar very muchas nenas"/>
                <Card title={"Camisa Oversize para caballeros"} img={franelaOversize} price={(10.99).toString()} id={(1).toString()} description="Tremenda camisa para que vistas a la moda y puedas enamorar very muchas nenas"/>
            </div>
        </div>
        
    )
}
