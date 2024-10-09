import Header from './features/ui/header/components/Header'
import { useReducer } from 'react'
import { initialState, RegisterReducer } from './features/reducers/register-user'
import RegisterForm from './features/register/components/RegisterForm'
import ShowProducts from './features/products/components/ShowProducts'

export default function App() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)
	console.log(state?.register)
	
	return (
		<>
			<Header/>
			<RegisterForm 
				dispatch={dispatch}
				state={state?.register}
			/>
			{/* <ShowProducts/> */}
		</>
	)
}
