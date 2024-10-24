import ProductsCSS from '../styles/products.module.css'

type RelatedProductsProps={
	image:string
	nameProduct:string
}
export default function RelatedProducts({image,nameProduct}:RelatedProductsProps) {
	return (
		<div className={ProductsCSS.relatedProductCard}>
			<img src={image} alt={nameProduct} loading='lazy' />
			<p>{nameProduct}</p>
		</div>	

	)
}
