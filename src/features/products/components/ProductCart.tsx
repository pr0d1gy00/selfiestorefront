import ProductsCSS from '../styles/products.module.css'
import DeleteProductIcon from '../../../assets/x.png'
type ProductCartProps={
	image:string
	nameProduct:string
	price:string
	quantity:number
}
export default function ProductCart({image,nameProduct,price,quantity}:ProductCartProps) {
	return (
		<div className={ProductsCSS.productCart}>
			<img src={`http://localhost/selfistore/public/ImageProducts/pantalon.jpg`} alt="" />
			<div className={ProductsCSS.infoProductCart}>
				<div >
					<p>{nameProduct}</p>
					<p><strong>Precio:</strong>{price}$</p>
				</div>
				<p>{quantity}</p>
			</div>
			<button type='button'>
				<img src={DeleteProductIcon} alt="eliminar" />
			</button>
		</div>
	)
}
