import TableCSS from '../styles/table.module.css'
import React from "react";

type TableBodyProps={
	children:React.ReactNode
}
export default function TableBody({children}:TableBodyProps) {
	return (
		<div className={TableCSS.tableBody}>
			{children}
		</div>
	)
}
