import { GetCategoryInterfaces } from "../interfaces/Category"
export async function UpdateCategory(data:GetCategoryInterfaces) {
	const response = await fetch(`http://localhost/selfistore/public/categories/${data.IdCategory}`,{
		method:'PUT',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
		body:JSON.stringify({
			Name_category:data.Name_category
		})
	})

	return response
}