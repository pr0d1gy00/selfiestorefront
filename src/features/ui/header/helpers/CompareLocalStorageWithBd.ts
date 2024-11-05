import { GetProductsInterfaces} from "../../../products/interfaces/ProductsInterfaces";
import { registerState } from "../../../reducers/register-user";
import { CartItem } from "../interfaces/HeaderInterfaces";

export async function CompareLocalStorage(state: registerState | undefined) {
    try {
		
        const response = await fetch('http://localhost/selfistore/public/products');
        const compareData = await response.json() as GetProductsInterfaces[];
        
        const dataString = localStorage.getItem('cart');
        const data: [] = dataString ? JSON.parse(dataString) : [];

        const dataFiltered = compareData.filter(product => 
            data.some((cartItem: { id: string, price: string }) => {
                if (cartItem.id === product.IdProduct) {
                    cartItem.price = product.Price;
                    return true;
                }
                return false;
            })
        );

        const dataSetLocalStorage:CartItem[] = dataFiltered.map(product => ({
			id: product.IdProduct,
			image: product.Image,
			nameProduct: product.Name_product,
			price: product.Price,
			quantity: 1,
			quantityMax: parseInt(product.Amount_inventory),
		}));
        
        localStorage.setItem('cart', JSON.stringify(dataSetLocalStorage.length>0 ? dataSetLocalStorage : data));
		if (state) {
			state.cart = dataSetLocalStorage;
		}
    } catch{
        return [];
    }
}