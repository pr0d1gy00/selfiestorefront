import { GetCategoryInterfaces } from "../interfaces/Category"

export const GetCategoryById = async (id: string): Promise<GetCategoryInterfaces | null> => {
    try {
        const response = await fetch(`http://localhost/selfistore/public/categories/${id}`);
        if (!response.ok) {
            console.error('Error fetching category:', response.statusText);
            return null;
        }
        const data: GetCategoryInterfaces = await response.json();
		console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching category:', error);
        return null;
    }
};