import { RegisterUserInterface } from "../interfaces/RegisterInterfaces";

export async function CreateUser(data:RegisterUserInterface) {
    const response = await fetch('http://localhost/selfistore/public/user',{
        method:'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
            
        },
        body:JSON.stringify(data)
    })
    return response
}