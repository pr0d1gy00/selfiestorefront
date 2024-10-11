import Input from "../../ui/inputs/components/Input";
import ProductsCSS from '../styles/products.module.css'
export default function RegisterProducts() {
	return (
		<section className={ProductsCSS.containerRegisterProducts}>
			<h2>Bienvenido José!</h2>
			<h3>Registra tú producto aquí!</h3>
			<div className={ProductsCSS.registerProducts}>
				<form action="POST">
					<p className={ProductsCSS.textRegisterProducts}>Nombre</p>
					<Input type="text"/>
					<p className={ProductsCSS.textRegisterProducts}>Descripción</p>
					<Input type="text"/>
					<p className={ProductsCSS.textRegisterProducts}>Estado</p>
					<select title="status">
						<option value="">Disponible</option>
						<option value="">Agotado</option>
					</select>
					<p className={ProductsCSS.textRegisterProducts}>Categoria</p>
					<select title="status">
						<option value="">Disponible</option>
						<option value="">Agotado</option>
					</select>
					<p className={ProductsCSS.textRegisterProducts}>Precio $</p>
					<input title="image" type="file"/>
					<p className={ProductsCSS.textRegisterProducts}>Imágenes</p>
					<input title="image" type="file"/>
					
				</form>
			</div>					
		</section>
	)
}
