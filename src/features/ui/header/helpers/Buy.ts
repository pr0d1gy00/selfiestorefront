import { SendBuy } from "../interfaces/HeaderInterfaces"

export async function Buy(data:SendBuy) {
	const response = await fetch('http://localhost/selfistore/public/facture',{
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