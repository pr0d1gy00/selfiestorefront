import ProductsCSS from '../styles/products.module.css'
import data from '../../../../public/priceDollar.json'
import { useState } from 'react'
import ArrowNext from '../../../assets/next.png'
import ArrowBack from '../../../assets/back.png'

type ProductSelectedProps={
	title:string
	ammount:string
	description:string
	price:string
	images:{
		Images:string
	}[]
}

export default function ProductSelected({title,ammount,description,price,images}:ProductSelectedProps) {
	const image = images
	const [selectedIndex, setSelectedIndex]=useState(0)
	const [selectedImage,setSelectedImage]=useState(image[0].Images)

	let dollar = data.price
	console.log(image)
	const selectedNewImage = (index:number,images:{Images:string}[] ,next = true)=>{
			const condition = next ? selectedIndex < image.length -1 : selectedIndex > 0
			const nextIndex = next ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex -1 : image.length-1
			setSelectedImage(image[nextIndex].Images)
			setSelectedIndex(nextIndex)
	}
	const previous = ()=>{
		selectedNewImage(selectedIndex, image, false)
	}
	const next = ()=>{
		selectedNewImage(selectedIndex, image)
	}
	console.log(selectedIndex)
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
				<p>{description}</p>
				<button type='button'>Añadir al carrito</button>
			</div>
		</section>
	)
}
