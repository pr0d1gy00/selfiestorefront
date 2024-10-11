import { createContext, Dispatch, SetStateAction } from "react";
import { registerActions,registerState } from "../../reducers/register-user";

export type RegisterContextProps = {
		state: registerState;
		dispatch: Dispatch<registerActions>;
		success: boolean;
		error: boolean;
		setSuccess: Dispatch<SetStateAction<boolean>>;
		setError: Dispatch<SetStateAction<boolean>>;
		msj:string,
		setMsj:Dispatch<SetStateAction<string>>
		showAlert:boolean
		setShowAlert:Dispatch<SetStateAction<boolean>>
}

export const RegisterContext = createContext<RegisterContextProps | undefined>(undefined)


