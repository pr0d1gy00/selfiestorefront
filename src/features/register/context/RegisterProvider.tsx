import { ReactNode, useReducer, useState } from "react";
import { RegisterReducer, initialState } from "../../reducers/register-user";
import { RegisterContext} from "./RegisterContext";

type RegisterProviderProps = {
	children:ReactNode
}

export const RegisterProvider = ({children}:RegisterProviderProps)=>{
    const [state, dispatch] = useReducer(RegisterReducer, initialState);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
	const [msj,setMsj]=useState('')
	if(!state)return

	return(
		<RegisterContext.Provider value={{ state, dispatch, success, error, setSuccess, setError,msj,setMsj }}>
			{children}
		</RegisterContext.Provider>
	)

}
