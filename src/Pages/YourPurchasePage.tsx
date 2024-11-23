import React, { useReducer } from 'react'
import YourPurchase from '../features/purchase/components/YourPurchase'
import { initialState, RegisterReducer } from '../features/reducers/register-user'

export default function YourPurchasePage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)

	return (
		<YourPurchase state={state} dispatch={dispatch}/>
	)
}
