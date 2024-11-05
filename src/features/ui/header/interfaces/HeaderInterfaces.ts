export type ProductCartInterfaces ={
	id:string
	image:string | null
	nameProduct:string
	price:string
}
export type CartItem = ProductCartInterfaces&{
	quantity:number
	quantityMax:number
}
export type SendBuy = {
	User_id:string,
	Products:{
		Product_id: string,
		Amount_product: string,
		Price_unitary: string
	}[]
}