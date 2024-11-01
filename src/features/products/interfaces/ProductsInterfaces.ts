export type RegisterProductInterfaces ={
	Category_id: string,
	Name_product: string,
	Description: string ,
	Image:string | null,
	Status: string,
	Price:string,
	Amount_inventory:string
}
export type GetProductsInterfaces = RegisterProductInterfaces&{
	IdProduct:string
}
export type GetProductsToShowInterfaces=RegisterProductInterfaces&{
	IdProduct:string
}
export type UploadImagesProductsInterfaces ={
	id:string,
	image1:File | undefined,
	image2:File | undefined,
	image3:File | undefined,
	image4:File | undefined,
	image5:File | undefined
}
export type imageProducsInterfaces = {
	image1:File | undefined,
	image2:File | undefined,
	image3:File | undefined,
	image4:File | undefined,
	image5:File | undefined
}

export type ImageProductSelected = string[]
export type RegisterProductInterfacesEditInterfaces ={
	Category_id: string,
	Name_product: string,
	Description: string ,
	Url:string | null,
	Status: string,
	Price:string,
	Amount_inventory:string
}
