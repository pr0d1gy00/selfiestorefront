import { GetProductsInterfaces } from "../interfaces/ProductsInterfaces";

export async function UpdateProduct(data:GetProductsInterfaces) {
	const response = await fetch(`http://localhost/selfistore/public/products/${data.IdProduct}`,{
		method:'PUT',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
		body:JSON.stringify(
			data
		)
	})

	return response
}