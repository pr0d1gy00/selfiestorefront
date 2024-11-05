import SidebarCSS from '../styles/sidebar.module.css'
import { useSidebarData } from '../hooks/useSidebarData'
import SidebarHeader from './SidebarHeader';
import Item from './Item';
import { registerState } from '../../../reducers/register-user';

type SidebarProps ={
    showSidebar:boolean
    state:registerState | undefined
}

export default function Sidebar({showSidebar,state}:SidebarProps) {
    const sidebarData = useSidebarData(state);
    return (
        <>
            {showSidebar ?
                <aside className={SidebarCSS.aside}>
                    <SidebarHeader/>
                    {sidebarData.map((item,index)=>
                        <Item
                            data={item}
                            index={index}
                            key={index}
                        />
                        )
                    }

                </aside>
                :null
            }
        </>
        
        
    )
}
