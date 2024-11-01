import { useEffect } from "react";
import {CartItem} from '../ui/header/interfaces/HeaderInterfaces.ts'
export function useCartSync(cart: CartItem[]) {
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
}