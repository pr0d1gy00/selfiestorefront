import { useReducer } from 'react'
import UploadImagesProducts from '../features/products/components/UploadImagesProducts'
import { initialState, RegisterReducer } from '../features/reducers/register-user'

export default function UploadImagesProductsPage() {
	const [state,dispatch]=useReducer(RegisterReducer,initialState)

	return (
		<UploadImagesProducts
			dispatch={dispatch}
		/>
	)
}
