import OtherTitleCSS from '../styles/othertitle.module.css'

type OtherTitleProps={
	title:string
	subtitle:string
}

export default function OtherTitle({title,subtitle
}:OtherTitleProps) {
	return (
		<div className={OtherTitleCSS.othertitle}>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>
	)
}
