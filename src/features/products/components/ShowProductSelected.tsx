import { useEffect, useState } from 'react'
import ProductsCSS from '../styles/products.module.css'
import ProductSelected from './ProductSelected'
import { GetProductSelected } from '../helpers/GetProductSelected'
import { GetProductsInterfaces, ImageProductSelected } from '../interfaces/ProductsInterfaces'
import RelatedProducts from './RelatedProducts'

const initialState={
	IdProduct:'',
	Category_id: '',
	Name_product: '',
	Description: '' ,
	Image:'',
	Status: '',
	Price:'',
	Amount_inventory:''
}

export default function ShowProductSelected() {
	const imageDefault = [
		{Images:'../../../assets/franelaOversize.jpeg'}
	]
	const [images, setImages] = useState<ImageProductSelected[]>(imageDefault)
	const [productSelected,setProductSelected]=useState<GetProductsInterfaces>(initialState)
	const [relatedProducts,setRelatedProducts]=useState<GetProductsInterfaces[] | null>(null)

	useEffect(()=>{
		GetProductSelected().then(response=>{
			setProductSelected(response[0])
			setImages(response[1])
			setRelatedProducts(response[2])
		}).catch(error=>{	
			console.log(error)
		})
	},[])
	console.log(images)
	return (
		<div className={ProductsCSS.showProductSelectedContainer}>
			<ProductSelected title={productSelected?.Name_product} ammount={productSelected?.Amount_inventory} description={productSelected?.Description} price={productSelected?.Price} images={images ? images : imageDefault}/>
			<div className={ProductsCSS.relatedProducts}>
				<h2>Productos relacionados</h2>
				{relatedProducts === null || relatedProducts.length === 0?
					<h3>No hay productos</h3>
				:
					<div className={ProductsCSS.relatedProductCardContainer}>
						{relatedProducts.map(relatedProducts=>
						<RelatedProducts image={`http://localhost/selfistore/public/ImageProducts/bolso.jpg`} nameProduct={relatedProducts.Name_product}/>
						)}
					</div>
					
				}
			</div>
		</div>
	)
}
