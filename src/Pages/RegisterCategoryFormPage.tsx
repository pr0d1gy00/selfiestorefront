import { useReducer } from 'react'
import CategoryForm from '../features/category/components/CategoryForm'
import { initialState, RegisterReducer } from '../features/reducers/register-user'

export default function RegisterCategoryFormPage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)

	return (
		<CategoryForm
			state={state?.category}
			dispatch={dispatch}
		/>
	)
}
