import SidebarCSS from '../styles/sidebar.module.css'
import { useSidebarData } from '../hooks/useSidebarData'
import SidebarHeader from './SidebarHeader';
import Item from './Item';

type SidebarProps ={
    showSidebar:boolean
}

export default function Sidebar({showSidebar}:SidebarProps) {
    const sidebarData = useSidebarData();
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
