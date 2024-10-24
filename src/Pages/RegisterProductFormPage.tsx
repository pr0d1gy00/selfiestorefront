import { useReducer } from 'react'
import { initialState, RegisterReducer } from '../features/reducers/register-user'
import RegisterProducts from '../features/products/components/RegisterProducts'

export default function RegisterProductFormPage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)

	return (
		<RegisterProducts state={state?.product}
		dispatch={dispatch}/>
	)
}
