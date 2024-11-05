export type loginProps={
	logged_id: boolean,
    Id:string,
    Name_user: string,
    Last_name: string,
    Phome_number: string,
    Rol_id: string
}


export async function LoginUser({id,password}:{id:string,password:string}):Promise<loginProps>{
	const response = await fetch('http://localhost/selfistore/public/auth',{
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
	return response.json() as Promise<loginProps>
}