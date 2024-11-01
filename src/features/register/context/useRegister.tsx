import { useContext } from "react";
import { RegisterContext } from "./RegisterContext";

export const useRegister = ()=>{
	const context = useContext(RegisterContext);
    return context;
}