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