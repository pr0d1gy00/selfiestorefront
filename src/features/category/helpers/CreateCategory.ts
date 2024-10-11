export async function CreateCategory(name:string) {
	const response = await fetch('http://localhost/selfistore/public/categories',{
		method:'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
            
        },
		body:JSON.stringify({
			Name_category:name
		}
		)
	})
	return response
}