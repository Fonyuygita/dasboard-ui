import { menuItems } from "@/data";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
const Sidebar=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src="" alt="user-image" width={50} height={50}/>
                <div className={useStyleRegistry.userDetails}>
                    <span className={styles.username}>Jude fonyuy</span>
                    <span className="styles.userTitle">Coordinator</span>
                </div>
            </div>
          <ul>
            {menuItems.map(item=>(
                <li key={item.title}>
                    <span className={styles.cat}>{item.title}</span>
                    {item.list.map(litem=>(
                        <MenuLink item={litem.title}/>
                    ))}
                </li>
            ))}
          </ul>
        </div>
    )
}

export default Sidebar