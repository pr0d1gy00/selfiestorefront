import Card from "./Card";
import ProductsCSS from '../styles/products.module.css'
import Logo from '../../../assets/logo.webp'
import { useContext, useEffect, useState } from "react";
import { GetProducts } from "../helpers/GetProducts";
import { GetProductsInterfaces} from "../interfaces/ProductsInterfaces";
import { RegisterContext } from "../../register/context/RegisterContext";
import Alert from "../../ui/alerts/components/Alert";
import { useNavigate } from 'react-router-dom';

export default function ShowProducts() {
    const context = useContext(RegisterContext)
    const [productsToShow,setProductsToShow]=useState<GetProductsInterfaces[] | null>(null)
    const navigate = useNavigate();
    const handleProductClick = (id: string) => {
        navigate(`/product/detailsproduct/${id}`);
    };

	if (!context) {
        throw new Error('RegisterContext must be used within a RegisterProvider');
    }
    const {setError,setMsj,msj,success,showAlert,setShowAlert} = context;


    useEffect(()=>{
        GetProducts().then(response=>{
			setProductsToShow(response)
		}).catch(error=>{
			console.log(error)
			setError(true)
			setMsj('Error al mostrar los productos')
			setShowAlert(true)
			setTimeout(()=>{setShowAlert(false)},5000)
		})
    },[setError, setMsj, setShowAlert])

    return (
        <div className={ProductsCSS.container}>
            {showAlert && (success ?
				<Alert title={msj} isOk={true} content={''}/> 
			: 
				<Alert title={'Error'} isOk={false} content={msj}/> 
			)}
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
                {productsToShow === null || productsToShow.length ===0 ?(
                    <h2 className={ProductsCSS.textNoProducts}>No hay productos para mostrar</h2>
                ):
                productsToShow?.map(products=>
                    <Card key={products.IdProduct} onClick={()=>handleProductClick(products.IdProduct)} id={products.IdProduct} title={products.Name_product} img={`http://localhost/selfistore/${products.Image}`} price={`${products.Price}`} description={products.Description}/>
                )}
            </div>
        </div>
        
    )
}
