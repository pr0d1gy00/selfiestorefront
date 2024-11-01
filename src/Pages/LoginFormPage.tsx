import { useReducer } from 'react'
import LoginForm from '../features/login/components/LoginForm'
import { initialState, RegisterReducer } from '../features/reducers/register-user'

export default function LoginFormPage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)
	console.log(state?.register)
	return (
		<LoginForm
			dispatch={dispatch}
			state={state?.login}
		/>
	)
}
