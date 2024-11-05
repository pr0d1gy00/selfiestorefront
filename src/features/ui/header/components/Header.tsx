import HeaderCSS from "../styles/header.module.css";
import MenuIcon from "../../../../assets/menu.svg";
import LoginIcon from "../../../../assets/login.png";
import useScreenSize from "../../../hooks/useScreenSize";
import cartEmpty from "../../../../assets/carro-de-compras-vista-lateral-vacia.webp";
import ProductCart from "../../../products/components/ProductCart";
import {
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { CartItem, SendBuy } from "../interfaces/HeaderInterfaces";
import ButtonRegisterLogin from "../../buttons/components/ButtonRegisterLogin";
import {
	RegisterActions,
	registerState,
} from "../../../reducers/register-user";
import dollarPrice from "../../../../../public/dollarPrice.json";
import { RegisterContext } from "../../../register/context/RegisterContext";
import { loginProps } from "../../../login/helpers/LoginUser";
import LogoutIcon from "../../../../assets/logout.png";
import BuyIconAnimated from "../../../../assets/carro-de-la-compra.gif";
type HeaderProps = {
	setShowSidebar: Dispatch<SetStateAction<boolean>>;
	showSidebar: boolean;
	dispatch: Dispatch<RegisterActions>;
	state: registerState | undefined;
};
const loginInitialState = {
	logged_id: false,
	Id: "",
	Name_user: "",
	Last_name: "",
	Phome_number: "",
	Rol_id: "",
};
export default function Header({
	showSidebar,
	setShowSidebar,
	dispatch,
	state,
}: HeaderProps) {
	const context = useContext(RegisterContext);
	const price = useMemo(() => {
		return state?.cart.reduce(
			(total, product) =>
				total + product.quantity * parseFloat(product.price),
			0
		);
	}, [state?.cart]);
	const { width } = useScreenSize();
	// eslint-disable-next-line prefer-const
	let priceDollar = dollarPrice.price;
	const [productsToShow, setProductsToShow] = useState<
		CartItem[] | undefined
	>(undefined);
	const [showCart, setShowCart] = useState(false);
	const [showFinishBuy, setShowFinishBuy] = useState(false);
	const [productsSend, setProductsSend] = useState<SendBuy>({
		User_id: "",
		Products: [],
	});
	const [loginSession, setLoginSession] =
		useState<loginProps>(loginInitialState);
	const navigate = useNavigate();

	if (!context) {
		throw new Error(
			"RegisterContext must be used within a RegisterProvider"
		);
	}
	const { success } = context;
	useEffect(() => {
		if (width > 1300) setShowSidebar(true);
	}, [width, setShowSidebar]);
	useEffect(() => {
		if (!state) return;
		setProductsToShow(state.cart);
		const data = {
			User_id: state.userLoggedIn.Id,
			Products: state.cart.map((products) => ({
				Product_id: products.id,
				Amount_product: products.quantity
					? products.quantity.toString()
					: "1",
				Price_unitary: products.price,
			})),
		};
		setProductsSend(data);
	}, [state?.cart, state]);

	useEffect(() => {
		setTimeout(() => {
			setShowFinishBuy(false);
		}, 4000);
		if (success) {
			setProductsToShow(undefined);
		}
	}, [showFinishBuy, success]);
	useEffect(() => {
		if (!state?.userLoggedIn) return;

		setLoginSession(state?.userLoggedIn);

	}, [state?.userLoggedIn]);

	return (
		<header className={HeaderCSS.header}>
			{showFinishBuy &&
				(success ? (
					<div className={HeaderCSS.finishBuy}>
						<img src={BuyIconAnimated} alt="compra" />
						<div>
							<h2 className={HeaderCSS.finishBuyTitle}>
								Confirmar compra
							</h2>
							<p>
								Para confirmar la compra vaya a la
								sección "Tus Compras" y sube el
								capture del pago
							</p>
						</div>
					</div>
				) : (
					<div className={HeaderCSS.finishBuy}>
						<h2 className={HeaderCSS.finishBuyTitle}>
							Error
						</h2>
						<p>
							Espere un momento y vuelva a intentar, si
							el problema persiste contacte al numero
							telefonico
						</p>
					</div>
				))}

			{width < 1300 ? (
				<div>
					<button
						type="button"
						onClick={() => {
							setShowSidebar(!showSidebar);
						}}
						className={HeaderCSS.buttonSidebar}
					>
						<img src={MenuIcon} alt="Menu" />
					</button>
				</div>
			) : null}

			<div className={HeaderCSS.buttonLoginCartContainer}>
				{state?.userLoggedIn.logged_id ? (
					<div className={HeaderCSS.containerInfoLogged}>
						<button
							title="logut"
							type="button"
							className={HeaderCSS.buttonLogout}
							onClick={() => {
								dispatch({ type: "logoutUser" });
							}}
						>
							<img src={LogoutIcon} alt="" />
						</button>
						<p>
							{loginSession.Name_user +
								" " +
								loginSession.Last_name}
						</p>
					</div>
				) : (
					<button
						type="button"
						className={HeaderCSS.buttonLogin}
						onClick={() => navigate("user/login/auth")}
					>
						Login
						<img src={LoginIcon} alt="Entrar" />
					</button>
				)}
				<button
					title="cart"
					type="button"
					onClick={() => {
						setShowCart(!showCart);
					}}
					className={HeaderCSS.buttonCart}
				>
					<img src={cartEmpty} alt="cart" />
				</button>
				{showCart &&
					(productsToShow === undefined ||
					productsToShow?.length === 0 ? (
						<div className={HeaderCSS.contentCart}>
							<h3>Carrito de compras</h3>
							<h2>No hay productos</h2>
						</div>
					) : (
						<div className={HeaderCSS.contentCart}>
							<h3>Carrito de compras</h3>
							{productsToShow.map((product) => (
								<>
									<ProductCart
										id={product.id}
										image={product.image}
										nameProduct={
											product.nameProduct
										}
										price={product.price}
										quantity={product.quantity}
										key={product.id}
										dispatch={dispatch}
									/>
								</>
							))}
							<div className={HeaderCSS.AmountTotal}>
								<h3>Precio total de la compra</h3>
								<p>
									Precio en Dolares:{" "}
									<strong>{price}$</strong>
								</p>
								<p>
									Precio en Bolivares:{" "}
									<strong>
										{price
											? price *
											  parseInt(priceDollar)
											: 0}
										Bs
									</strong>
								</p>
							</div>
							<button
								className={HeaderCSS.buttonClearCart}
								onClick={() => {
									dispatch({ type: "clear-cart" });
								}}
							>
								Limpiar carrito
							</button>
							{state?.userLoggedIn ? (
								<ButtonRegisterLogin
									title={"Comprar"}
									disabled={
										state?.cart === undefined
									}
									onClick={() => {
										if (!state) return;
										dispatch({
											type: "sendBuyCart",
											payload: {
												buy: productsSend,
											},
										});
										setTimeout(() => {
											setShowFinishBuy(true);
										}, 500);
										if (success) {
											localStorage.removeItem(
												"cart"
											);
											return {
												...state,
												cart: [],
											};
										}
									}}
								/>
							) : (
								<h3
									className={
										HeaderCSS.textCartNoLogged
									}
								>
									Debe estar logeado para comprar
								</h3>
							)}
						</div>
					))}
			</div>
		</header>
	);
}
