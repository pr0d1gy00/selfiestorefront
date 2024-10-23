export const GetProductSelected = async ()=>{
	const response = await fetch('http://localhost/selfistore/public/products/6')
	return await response.json()
}