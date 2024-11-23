import { Dispatch, useEffect, useState } from 'react'
import PurchaseCSS from '../styles/purchase.module.css'
import { GetPurchase } from '../helpers/GetPurchase'
import { RegisterActions, registerState } from '../../reducers/register-user'
import { GetPurchaseInterface } from '../interfaces/purchase'
import OtherTitle from '../../ui/OtherTitle/components/OtherTitle'
import ModalUploadPay from '../../ui/modales/components/ModalUploadPay'

type YourPurchaseProps={
	state:registerState | undefined
	dispatch:Dispatch<RegisterActions>
}

export default function YourPurchase({state,dispatch}:YourPurchaseProps) {
	const [purchase,setPurchase]=useState<GetPurchaseInterface[] | null>(null)
	const [showModalVerifyPay,setShowModalVerifyPay]=useState(false)
	useEffect(()=>{
		if(!state?.userLoggedIn)return
		GetPurchase(state.userLoggedIn.data.Id).then(response=>
			setPurchase(response)		
		).catch()
	},[])
	console.log(purchase)
	return (
		<section>
			<OtherTitle title={'Tus compras'} subtitle={'Bienvenido a tus compras realizadas, verificalas!'}/>
			{showModalVerifyPay ?
				<ModalUploadPay setShowModalVerifyPay={setShowModalVerifyPay}/>
			:
				null
			}
			<div className={PurchaseCSS.containerPurchaseList}>
				{	
					purchase === null || purchase.length === 0 ? 
						<h2>No hay compras realizadas</h2>
				:
					purchase?.map(purchaseList=>
						<div key={purchaseList.reference} className={PurchaseCSS.purchase}>
							<p>{purchaseList.reference}</p>
							<p>{purchaseList.Date}</p>
							<p>{purchaseList.Status === '0' ? 'No verificado' : 'Verificado'}</p>
							{purchaseList.Status === '0' ?
								<button
									onClick={()=>{
										setShowModalVerifyPay(true)
									}}
								>Verificar</button>
					
								: null
							}
						</div>
				)}
			</div>
		</section>
	)
}
