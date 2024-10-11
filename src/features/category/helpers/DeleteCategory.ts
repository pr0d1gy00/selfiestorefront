export async function DeleteCategory(id:number) {
	const response = await fetch(`http://localhost/selfistore/public/categories/${id}`,{
		method:'DELETE',
        credentials:'same-origin',
        mode:'cors',
	})
	return response
}