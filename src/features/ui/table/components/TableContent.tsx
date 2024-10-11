import React, { Dispatch, FC, SetStateAction } from 'react';
import TableCSS from '../styles/table.module.css'
import EditIcon from '../../../../assets/MaterialSymbolsEdit.svg'
import DeleteIcon from '../../../../assets/materialsymbolsdelete.svg'
import { RegisterActions } from '../../../reducers/register-user';
interface TableContentProps{
	dataContent: Array<Record<string, string>>;
	dispatch?: Dispatch<RegisterActions>
	showActions:boolean
}


const TableContent:FC<TableContentProps>=({dataContent,dispatch,showActions}) =>{
	return (
		<div>
			{dataContent === null || dataContent.length === 0 ?
				<p>No hay datos para mostrar</p>
				:  
			dataContent.map((item, index) => (
			<div key={index} className={TableCSS.content}>
			{Object.entries(item).map(([key, value]) => (
				<p key={key}>{`${value}`}</p>
			))}
			{showActions ?
				<>
					<button className={TableCSS.buttonAction}>
						<img src={EditIcon} alt="editar" />
					</button>
					<button className={TableCSS.buttonAction}
						onClick={()=>{
							if(!dispatch)return
							dispatch({type:'deleteCategory',payload:{id:Object.entries(item)[0][1]}})
						}}
					>
						<img src={DeleteIcon} alt="eliminar" />
					</button>
				</>
				:
				null
			}
			</div>
		))}
		</div>
	)
}
export default TableContent;