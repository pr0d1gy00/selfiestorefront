export async function LogoutUser({id,logged_id}:{id:string,logged_id:boolean}){
	const response = await fetch('http://localhost/selfistore/public/logout',{
		method:'POST',
		mode:'cors',
		credentials:'same-origin',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({
			Id:id,
			logged_id:logged_id
		})
	})
	return response
}