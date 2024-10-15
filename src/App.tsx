import Header from './features/ui/header/components/Header'
import { useReducer } from 'react'
import { initialState, RegisterReducer } from './features/reducers/register-user'
import Sidebar from './features/ui/sidebar/components/Sidebar'
import AppCSS from './globalStyles/app.module.css'
import CategoryTable from './features/category/components/CategoryTable'
import RegisterProducts from './features/products/components/RegisterProducts'
import ShowProductsTable from './features/products/components/ShowProductsTable'
import UploadImagesProducts from './features/products/components/UploadImagesProducts'

export default function App() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)
	
	return (
		<>
			<Header/>
			<div className={AppCSS.containerApp}>
				<div className={AppCSS.containerAppSidebar}>
					<Sidebar/>
				</div>
				<div className={AppCSS.containerAppContent}>
					{/* <CategoryForm
						state={state?.category}
						dispatch={dispatch}
					/> */}
					{/* <RegisterProducts
						state={state?.product}
						dispatch={dispatch}
					/> */}
					{/* <ShowProductsTable dispatch={dispatch}/> */}
					<UploadImagesProducts
						dispatch={dispatch}
					/>
					{/* <CategoryTable
					dispatch={dispatch}/> */}
				</div>
				
			

			</div>
			{/* <RegisterForm 
				dispatch={dispatch}
				state={state?.register}
			/> */}
		</>
	)
}
