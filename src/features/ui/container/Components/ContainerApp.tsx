import { Dispatch, useEffect, useReducer, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import Header from '../../header/components/Header'
import Sidebar from '../../sidebar/components/Sidebar'
import AppCSS from '../../../../globalStyles/app.module.css'
import { initialState, RegisterActions, RegisterReducer, registerState, } from '../../../reducers/register-user';
import { CompareLocalStorage } from '../../header/helpers/CompareLocalStorageWithBd';

type ContextType = {
	dispatch:Dispatch<RegisterActions>
	state: registerState | undefined
}


export default function ContainerApp() {
	const [showSidebar,setShowSidebar]=useState(true)
	const [state,dispatch]=useReducer(RegisterReducer,initialState)
	console.log(typeof(state?.userLoggedIn))

	useEffect(()=>{
		CompareLocalStorage(state).catch(error=>{
			console.log(error)
		})
	},[])
	return (
		<div>
			<Header
				setShowSidebar={setShowSidebar}
				showSidebar={showSidebar}
				state={state}
				dispatch={dispatch}
			/>
			<div className={AppCSS.containerApp}>
				<div className={AppCSS.containerAppSidebar}>
					<Sidebar
						showSidebar={showSidebar}
						state={state}
					/>
				</div>
				<div className={AppCSS.containerAppContent}>
					<Outlet  context={{ dispatch,state } satisfies ContextType} />
					{/* <ModalUploadPay/> */}
				</div>
			</div>
		</div>
	)
}
export function useDispatch() {
	return useOutletContext<ContextType>();
}
export function useLogin() {
	return useOutletContext<ContextType>();
}

