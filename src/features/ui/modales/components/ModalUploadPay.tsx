import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import ModalsCSS from '../styles/modals.module.css'
import ButtonRegisterLogin from '../../buttons/components/ButtonRegisterLogin'
import Tesseract from 'tesseract.js'
import CloseIcon from '../../../../assets/x.png'

type ModalUploadPayProps={
	setShowModalVerifyPay: Dispatch<SetStateAction<boolean>>
}

export default function ModalUploadPay({setShowModalVerifyPay}:ModalUploadPayProps) {
	const [imagePay, setImagePay]=useState<File | undefined>(undefined)
	const [words, setWords]=useState<string[]>([])
	const [validating,setValidating]=useState(true)
	const [isPay, setIsPay]=useState(false)

	const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
		if(e.target instanceof HTMLInputElement){
			const file = e.target.files?.[0]
			setImagePay(file)
			console.log('desde el handlechange')
			setValidating(false)
		}
	}
	console.log(isPay)

	useEffect(() => {
		const processImage = async (file) => {
			try {
				const reader = new FileReader();
				reader.onload = async () => {
					const image = new Image();
					image.src = reader.result;
					image.onload = async () => {
						try {
							const result = await Tesseract.recognize(image);
							const recognizedWords = result.data.words.map(word => word.text);
							setWords(recognizedWords);
	
							const wordsToValidate = ['Pago', 'Identificacion:', 'Bancos', 'Monto', 'Referencia:', 'PagomévilBDV', 'Concepto', 'Banco:', 'Fecha:', 'Transferencia', 'Destino', 'Operacion', 'realizada','Corriente','Ahorro','Enviar','Pagar', 'Referencia:','Identificacién:','Operacién:', 'identificacion:','dinero:','Origen:','Dinero','exitosamente','Cuenta','PROVINCIAL', 'VENEZUELA','BANCAMIGA','REFERENCIA:','Bancamiga','BENEFICIARIO:','CONCEPTO:','NUMERO','/RIF','beneficiario','Descripcion','MONTO','BANESCO','NUMERO','REFERENCIA','FECHA','DESTINO','CELULAR','RECEPTOR','BANCO','CONCEPTO'];
							const count = wordsToValidate.reduce((acc, word) => {
								return acc + (recognizedWords.includes(word) ? 1 : 0);
							}, 0);
							console.log(count)
							if (count >= 4) {
								setIsPay(true);
							}
						} catch (error) {
							console.error('Error:', error);
						} finally {
							setValidating(false);
						}
					};
				};
				reader.readAsDataURL(file);
			} catch (error) {
				console.error('Error:', error);
				setValidating(false);
			}
		};
	
		if (imagePay) {
			setIsPay(false);
			setValidating(true);
			processImage(imagePay);
		}
	}, [imagePay]);
	console.log(words)
	return (
		<div className={ModalsCSS.modalUploadPayContainer}>
			<div className={ModalsCSS.modalUploadPay}>
				<div className={ModalsCSS.modalHeader}>
						<h3>Sube tu pago aqui</h3>
						<button 
							onClick={()=>{
								setShowModalVerifyPay(false)
							}}
						type='button' title='close'><img src={CloseIcon} alt="" /></button>
					</div>
				<div>
					
					
					{imagePay ?
						<img src={URL.createObjectURL(imagePay)} alt="" />
						
					: null
					}
					{!validating  ?
						isPay ?
							<h2>Pago valido</h2>
						:
							<h2>Pago invalido, por favor sube una imagen valida</h2>
					:
						null
					}
					<input title='imagePay' type="file" accept='image/jpeg,image/png,image/webp'
					onChange={handleChange}/>
				</div>
				
				<ButtonRegisterLogin title={'Enviar pago'} disabled={!isPay}/>
			</div>
		
		</div>
	)
}
