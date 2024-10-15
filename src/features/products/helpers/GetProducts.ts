import { GetProductsInterfaces } from "../interfaces/ProductsInterfaces"

export const GetProducts = ():Promise<GetProductsInterfaces[]>=>{
	return fetch('http://localhost/selfistore/public/products').then(response => response.json() as Promise<GetProductsInterfaces[]>)
}