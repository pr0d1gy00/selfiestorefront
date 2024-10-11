import TableCSS from '../styles/table.module.css'

type TableHeadProps={
	data:{
		name:string
	}[]
}

export default function TableHead({data}:TableHeadProps) {
	return (
		<div className={TableCSS.tableHead}>
			{data.map(name=>
				<p>{name.name}</p>
			)}
		</div>
	)
}
