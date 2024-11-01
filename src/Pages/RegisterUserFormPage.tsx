import { useReducer } from 'react'
import RegisterForm from '../features/register/components/RegisterForm'
import { initialState, RegisterReducer } from '../features/reducers/register-user'

export default function RegisterUserFormPage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)
	console.log(state?.register)
	return (
		<RegisterForm 
			dispatch={dispatch}
			state={state?.register}
		/>
	)
}
