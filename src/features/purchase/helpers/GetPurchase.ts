import { GetPurchaseInterface } from "../interfaces/purchase";

export const GetPurchase = async (id: string):Promise<GetPurchaseInterface[]> => {
    try {
        const response = await fetch(`http://localhost/selfistore/public/facture/${id}`);
        
        if (!response.ok) {
            throw new Error(`Error fetching purchase: ${response.statusText}`);
        }

        const data = await response.json() as Promise<GetPurchaseInterface[]>;
        return data;
    } catch (error) {
        console.error('Error fetching purchase:', error);
        throw error;
    }
};