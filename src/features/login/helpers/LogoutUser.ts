export async function LogoutUser({id,password}:{id:string,password:string}){
	const response = await fetch('http://localhost/selfistore/public/auth/logout',{
		method:'POST',
		mode:'cors',
		credentials:'same-origin',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({
			Id:id,
			Password:password
		})
	})
	return response
}