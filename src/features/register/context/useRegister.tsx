import { useContext } from "react";
import { RegisterContext } from "./RegisterContext";

export const useRegister = ()=>{
	const context = useContext(RegisterContext);
    if (context === undefined) {
        throw new Error('useRegister must be used within a RegisterProvider');
    }
    return context;
}