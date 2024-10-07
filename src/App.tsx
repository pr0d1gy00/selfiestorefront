import Header from './features/ui/header/components/Header'
import { useReducer } from 'react'
import { initialState, registerReducer } from './features/reducers/register-user'
import RegisterForm from './features/register/components/RegisterForm'

export default function App() {
	const [state,dispatch]=useReducer(registerReducer,initialState)
	console.log(state?.register)
	return (
		<>
			<Header/>
			<RegisterForm 
				dispatch={dispatch}
				state={state?.register}
			/>
		</>
	)
}
