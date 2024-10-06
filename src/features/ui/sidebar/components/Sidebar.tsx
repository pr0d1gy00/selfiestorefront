import SidebarCSS from '../styles/sidebar.module.css'
import { useSidebarData } from '../hooks/useSidebarData'
import SidebarHeader from './SidebarHeader';
import Item from './Item';


export default function Sidebar() {
    const sidebarData = useSidebarData();

    console.log(sidebarData)
    return (
        <aside className={SidebarCSS.aside}>
            <SidebarHeader/>
            {sidebarData.map(item=>
                <Item
                    data={item}
                />
                )
            }

        </aside>
    )
}
