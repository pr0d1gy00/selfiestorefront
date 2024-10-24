import { useReducer } from 'react'
import CategoryTable from '../features/category/components/CategoryTable'
import { initialState, RegisterReducer } from '../features/reducers/register-user'

export default function ShowCategoriesTablePage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)

	return (
		<CategoryTable
		dispatch={dispatch}/>
	)
}
