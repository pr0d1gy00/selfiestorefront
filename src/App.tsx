import Header from './features/ui/header/components/Header'
import { useReducer } from 'react'
import { initialState, RegisterReducer } from './features/reducers/register-user'
import RegisterProducts from './features/products/components/RegisterProducts'
import RegisterForm from './features/register/components/RegisterForm'
import Sidebar from './features/ui/sidebar/components/Sidebar'
import AppCSS from './globalStyles/app.module.css'
import ShowProducts from './features/products/components/ShowProducts'
import CategoryForm from './features/category/components/CategoryForm'
import TableBody from './features/ui/table/components/TableBody'
import CategoryTable from './features/category/components/CategoryTable'

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
					<CategoryTable
					dispatch={dispatch}/>
				</div>
				{/* <RegisterProducts/> */}
			

			</div>
			{/* <RegisterForm 
				dispatch={dispatch}
				state={state?.register}
			/> */}
		</>
	)
}
