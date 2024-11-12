import { Dispatch, FC } from 'react';
import TableCSS from '../styles/table.module.css'
import EditIcon from '../../../../assets/MaterialSymbolsEdit.svg'
import DeleteIcon from '../../../../assets/materialsymbolsdelete.svg'
import { RegisterActions } from '../../../reducers/register-user';
import { useNavigate } from 'react-router-dom';
interface TableContentProps{
	dataContent: Array<Record<string, string>>;
	dispatch?: Dispatch<RegisterActions>
	showActions:boolean
	showEdit:boolean
	showDelete:boolean
}


const TableContent:FC<TableContentProps>=({dataContent,dispatch,showActions,showDelete,showEdit}) =>{
	const urlToEdit = window.location.pathname
	const navigate = useNavigate()
	const newUrl = urlToEdit.replace('/showList','/edit')

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
						{showEdit ? 
							<button className={TableCSS.buttonAction}
								onClick={()=>{
									if(newUrl.includes('product')){

										navigate(`${newUrl}/${item['IdProduct']}`)
									}
									if(newUrl.includes('category')){

										navigate(`${newUrl}/${item['IdCategory']}`)
									}
								}}
							>
								<img src={EditIcon} alt="editar" />
							</button> 
						:
							null
						}
						{showDelete ? 
							<button className={TableCSS.buttonAction}
							onClick={()=>{
								if(!dispatch)return
								dispatch({type:'deleteCategory',payload:{id:Object.entries(item)[0][1]}})
							}}
							>
								<img src={DeleteIcon} alt="eliminar" />
							</button>
						:
							null
						}
						
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