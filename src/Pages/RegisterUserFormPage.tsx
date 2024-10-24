import RegisterForm from '../features/register/components/RegisterForm'
import { initialState, RegisterReducer } from '../features/reducers/register-user'
import { useReducer } from 'react'

export default function RegisterUserFormPage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)

	return (
		<RegisterForm 
			dispatch={dispatch}
			state={state?.register}
		/>
	)
}
