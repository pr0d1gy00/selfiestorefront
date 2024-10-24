export const GetProductSelected = async (id:number)=>{
	const response = await fetch(`http://localhost/selfistore/public/products/${id}`)
	return await response.json()
}