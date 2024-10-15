import { UploadImagesProductsInterfaces } from "../interfaces/ProductsInterfaces";

export async function UploadImageProduct(data:UploadImagesProductsInterfaces) {
	if(!data.image1)return
	const formData = new FormData();
	formData.append('file', data.image1);
	formData.append('Id', data.id);
	const response = await fetch('http://localhost/selfistore/public/image',
		{
			method:'POST',
			credentials:'same-origin',
			mode:'cors',
			body: formData,
		}
	);

	return response;
}