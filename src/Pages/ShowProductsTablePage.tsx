import { useReducer } from 'react'
import { initialState, RegisterReducer } from '../features/reducers/register-user'
import ShowProductsTable from '../features/products/components/ShowProductsTable'

export default function ShowProductsTablePage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)

	return (
		<ShowProductsTable dispatch={dispatch}/>

	)
}
