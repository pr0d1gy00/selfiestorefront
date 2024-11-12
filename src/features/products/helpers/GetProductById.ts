import { GetProductsInterfaces } from "../interfaces/ProductsInterfaces"
export const GetProductsById = (id:string):Promise<GetProductsInterfaces[]>=>{
	return fetch(`http://localhost/selfistore/public/products/${id}`).then(response=>response.json() as Promise<[GetProductsInterfaces]>)
}