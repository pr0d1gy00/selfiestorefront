import { RegisterProductInterfaces } from "../interfaces/ProductsInterfaces";

export async function CreateProduct(data:RegisterProductInterfaces) {
	const response = await fetch('http://localhost/selfistore/public/products',{
		method:'POST',
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