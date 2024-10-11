import { GetCategoryInterfaces } from "../interfaces/Category"

export const GetCategories = ():Promise<GetCategoryInterfaces[]>=>{
	return fetch('http://localhost/selfistore/public/categories').then(response=>response.json() as Promise<GetCategoryInterfaces[]>)
}	