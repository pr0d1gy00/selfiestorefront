import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../header/components/Header'
import Sidebar from '../../sidebar/components/Sidebar'
import AppCSS from '../../../../globalStyles/app.module.css'
export default function ContainerApp() {
	const [showSidebar,setShowSidebar]=useState(true)
	return (
		<div>
			<Header
				setShowSidebar={setShowSidebar}
				showSidebar={showSidebar}
			/>
			<div className={AppCSS.containerApp}>
				<div className={AppCSS.containerAppSidebar}>
					<Sidebar
						showSidebar={showSidebar}
					/>
				</div>
				<div className={AppCSS.containerAppContent}>
					<Outlet/>
					{/* <ModalUploadPay/> */}
				</div>
			</div>
		</div>
	)
}
