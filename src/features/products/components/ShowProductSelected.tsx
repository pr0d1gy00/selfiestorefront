import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCartSync } from '../../hooks/useCartSync'
import ProductsCSS from '../styles/products.module.css'
import ProductSelected from './ProductSelected'
import { GetProductSelected } from '../helpers/GetProductSelected'
import { GetProductsInterfaces} from '../interfaces/ProductsInterfaces'
import RelatedProducts from './RelatedProducts'
import { useDispatch } from '../../ui/container/Components/ContainerApp'

const initialStateProduct={
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
	const {state,dispatch}=useDispatch()
	const [images, setImages] = useState<string[]>([])
	const [productSelected,setProductSelected]=useState<GetProductsInterfaces>(initialStateProduct)
	const [relatedProducts,setRelatedProducts]=useState<GetProductsInterfaces[] | null>(null)
	const [idAddToCart,setIdAddToCart]=useState('')
	const {id}=useParams()

	useEffect(()=>{
		if(!id)return
		GetProductSelected(parseInt(id)).then(response=>{
			setProductSelected(response[0])
			setImages(response[1].map((images: { Images: string })=> images.Images))
			setRelatedProducts(response[2])
		}).catch(error=>{	
			console.log(error)
		})
	},[id])
	//OPTIMIZAR CON EVENTO EN EL BOTON
	console.log(state?.cart);

	useEffect(() => {
		if (!idAddToCart) return;
		dispatch({
			type: "addToCart",
			payload: {
				cart: {
					id: productSelected.IdProduct,
					image: images[0],
					nameProduct: productSelected.Name_product,
					price: productSelected.Price,
					quantity: 1,
					quantityMax: parseInt(
						productSelected.Amount_inventory
					),
				},
			},
		});
		setIdAddToCart("");
	}, [
		idAddToCart,
		images,
		productSelected.Amount_inventory,
		productSelected.IdProduct,
		productSelected.Name_product,
		productSelected.Price,
		dispatch
	]);


	useCartSync(state ? state.cart: [])

	return (
		<div className={ProductsCSS.showProductSelectedContainer}>
			<ProductSelected
				id={productSelected.IdProduct}
				setIdAddToCart={setIdAddToCart}
				title={productSelected?.Name_product}
				ammount={productSelected?.Amount_inventory}
				description={productSelected?.Description}
				price={productSelected?.Price}
				images={images}
			/>
			<div className={ProductsCSS.relatedProducts}>
				<h2>Productos relacionados</h2>
				<div
					className={
						ProductsCSS.relatedProductCardContainer
					}
				>
					{relatedProducts === undefined ||
					relatedProducts === null ? (
						<h3>No hay productos relacionados</h3>
					) : (
						relatedProducts.map((relatedProducts) => (
							<RelatedProducts
								image={relatedProducts.Image ? relatedProducts.Image : ''}
								nameProduct={
									relatedProducts.Name_product
								}
								key={relatedProducts.IdProduct}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}
