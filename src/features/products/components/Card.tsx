import { AnchorHTMLAttributes} from "react"
import ProductsCSS from '../styles/products.module.css'


type CardProps = {
    id:string
    title:string,
    img:string,
    price:string
    description:string

}& AnchorHTMLAttributes<HTMLAnchorElement>
export default function Card({id,title,img,price,description,...props}:CardProps) {
    return (
        <a
            className={ProductsCSS.cardProduct}
            key={id}
            {...props}
        >
            <div className={ProductsCSS.cardProductImage}>
                <img src={img} alt={title} />
            </div>
            <div className={ProductsCSS.cardProductInfo}>
                <div className={ProductsCSS.cardProductInfoTitlePrice}>
                    <h2>{title}</h2>
                    <p>{price}$</p>
                </div>
                <div className={ProductsCSS.cardProductDescription}>
                    <p className={ProductsCSS.description}>{description}</p>

                </div>
            </div>
        </a>
    )
}
