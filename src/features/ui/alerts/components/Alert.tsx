import AlertCSS from '../styles/alert.module.css'
import ErrorIcon from '../../../../assets/cerrar.png'
import SuccesIcon from '../../../../assets/marca-de-verificacion.png'
type AlertProps = {
	title:string
	isOk:boolean
	content:string
}

export default function Alert({title,isOk,content}:AlertProps) {
	const classAlert = isOk ? AlertCSS.sucess : AlertCSS.error 

	return (
		<div className={AlertCSS.alertContainer}>
			<div className={classAlert}>
				<div>
					<img className={AlertCSS.alertImage} src={isOk ? SuccesIcon : ErrorIcon} alt='imageAlert' />
				</div>
				<div className={AlertCSS.alertContent}>	
					<h2>{title}</h2>
					<p>{content}</p>
				</div>
			</div>
		</div>
		
	)
}
