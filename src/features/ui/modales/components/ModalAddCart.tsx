import ModalsCSS from '../styles/modals.module.css'
import CartGif from '../../../../assets/carro-de-la-compra.gif'
export default function ModalAddCart() {
	return (
		<div className={ModalsCSS.modalAddCartContainer}>
			<img src={CartGif} alt="cart" />
			<p>Felicidades, ve al carrito para finalizar la compra!</p>
		</div>
	)
}
