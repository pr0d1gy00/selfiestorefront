import ProductsCSS from '../styles/products.module.css'
import DeleteProductIcon from '../../../assets/x.png'
import { RegisterActions } from '../../reducers/register-user'
import { Dispatch } from 'react'
import rest from '../../../assets/menos.png'
import plus from '../../../assets/mas-positivo-suma-simbolo-matematico.png'
type ProductCartProps={
	id:string
	image:string | null
	nameProduct:string
	price:string
	quantity:number
	dispatch: Dispatch<RegisterActions>
}
export default function ProductCart({image,nameProduct,price,quantity,dispatch,id}:ProductCartProps) {
	return (
		<div className={ProductsCSS.productCart}>
			<img src={`http://localhost/selfistore/${image}`} alt="" />
			<div className={ProductsCSS.infoProductCart}>
				<div >
					<p className={ProductsCSS.nameProduct}>{nameProduct}</p>
					<p><strong>Precio:</strong>{parseFloat(price) * quantity}$</p>
				</div>
				<div className={ProductsCSS.buttonsQuantity}>
					<button title='increaseQuantity' onClick={()=>{
						dispatch({type:'decreaseQuantity',payload:{id:id}
						})
					}}>
						<img src={rest} alt="" />
					</button>
						<p>{quantity}</p>

					<button title='increaseQuantity' onClick={()=>{
						dispatch({type:'increaseQuantity',payload:{id:id}
						})
					}}>
						<img src={plus} alt="" />
					</button>
				</div>
			</div>
			<button type='button'
				onClick={()=>{
					dispatch({type:'removeProduct',payload:{id:id}})
				}}
			>
				<img src={DeleteProductIcon} alt="eliminar" />
			</button>
		</div>
	)
}
