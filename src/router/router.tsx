import { createBrowserRouter } from "react-router-dom";
import ShowProducts from "../features/products/components/ShowProducts";
import ShowProductSelected from "../features/products/components/ShowProductSelected";
import ContainerApp from "../features/ui/container/Components/ContainerApp";
import RegisterProductFormPage from "../Pages/RegisterProductFormPage";
import ShowProductsTablePage from "../Pages/ShowProductsTablePage";
import RegisterCategoryFormPage from "../Pages/RegisterCategoryFormPage";
import UploadImagesProductsPage from "../Pages/UploadImagesProductsPage";
import RegisterUserFormPage from "../Pages/RegisterUserFormPage";
import ShowCategoriesTablePage from "../Pages/ShowCategoriesTablePage";
import LoginForm from "../features/login/components/LoginForm";
import LoginFormPage from "../Pages/LoginFormPage";

export const router = createBrowserRouter([

	{
		element:<ContainerApp/>,
		children:[
			{path:'/',element:<ShowProducts/>},
			{path:'product/detailsproduct/:id',
				element:<ShowProductSelected/>
			},
			{path:'product/register',
				element:<RegisterProductFormPage/>
			},
			{path:'product/showList',
				element:<ShowProductsTablePage/>
			},
			{
				path:'category/register',
				element:<RegisterCategoryFormPage/>
			},
			{
				path:'products/upload/images',
				element:<UploadImagesProductsPage/>
			},
			{
				path:'user/register',
				element:<RegisterUserFormPage/>
			},
			{
				path:'category/showList',
				element:<ShowCategoriesTablePage/>
			},
			{
				path:'user/login/auth',
				element:<LoginFormPage/>
			}
		]
	}
])