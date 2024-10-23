import { UploadImagesProductsInterfaces } from "../interfaces/ProductsInterfaces";

export async function UploadImageProduct(data:UploadImagesProductsInterfaces) {
	if(!data.image1)return
	if(!data.image2)return
	if(!data.image3)return
	if(!data.image4)return
	if(!data.image5)return
	const formData = new FormData();
	formData.append('file1', data.image1)
	formData.append('file2', data.image2)
	formData.append('file3', data.image3);
	formData.append('file4', data.image4);
	formData.append('file5', data.image5);
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