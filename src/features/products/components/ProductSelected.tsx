import ProductsCSS from '../styles/products.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ArrowNext from '../../../assets/next.png'
import ArrowBack from '../../../assets/back.png'

type ProductSelectedProps={
	id:string
	title:string
	ammount:string
	description:string
	price:string
	images:string[]
	setIdAddToCart: Dispatch<SetStateAction<string>>
}

export default function ProductSelected({title,ammount,description,price,images,id,setIdAddToCart}:ProductSelectedProps) {
	const image = images
	const [selectedIndex, setSelectedIndex]=useState(0)
	const [selectedImage, setSelectedImage] = useState<string>('');

    useEffect(() => {
        if (images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [images]);
	
	const selectedNewImage = (index:number,images:string[] ,next = true)=>{
			const condition = next ? selectedIndex < image.length -1 : selectedIndex > 0
			const nextIndex = next ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex -1 : image.length-1
			setSelectedImage(image[nextIndex])
			setSelectedIndex(nextIndex)
	}
	const previous = ()=>{
		selectedNewImage(selectedIndex, image, false)
	}
	const next = ()=>{
		selectedNewImage(selectedIndex, image)
	}
	console.log(image)
	return (
		<section className={ProductsCSS.productSelectedContainer}>
			<div className={ProductsCSS.imageProductSelectedContainer}>
				{!selectedImage ? 
					<h2>Cargando</h2> 
					:
					<>
						<img src={`http://localhost/selfistore/${selectedImage}`} loading='lazy' alt={title}
						className={ProductsCSS.imageProductSelected}/>
						<div className={ProductsCSS.buttonsContainer}>
							<button type='button' title='back' onClick={previous}><img src={ArrowBack} alt="Back" /></button>
							<button type='button' title='next' onClick={next}><img src={ArrowNext} alt="Next" /></button>
						</div>
					</>
				}
				
			</div>
			<div className={ProductsCSS.infoProductSelectedContainer}>
				<h2>{title}</h2>
				<p><strong>Cantidad disponible:</strong> {ammount}</p>
				<p><strong>Precio: </strong>{price}$</p>
				<p className={ProductsCSS.infoProductSelectedDescription}><strong>Descripción del producto:</strong></p>
				<p>{description}</p>
				{parseInt(ammount) > 0 ?
					<button type='button' onClick={()=>setIdAddToCart(id)}>Añadir al carrito</button>

					:
					<button type='button' disabled  >Agotado</button>
				}
			</div>
		</section>
	)
}
