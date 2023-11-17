import { menuItems } from "@/data";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
const Sidebar=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src="/fonyuygita.png" alt="user-image" width={50} height={50} className={styles.profileImg}/>
                <div className={styles.userDetails}>
                    <span className={styles.username}>Jude fonyuy</span>
                    <span className={styles.userTitle}>Coordinator</span>
                </div>
            </div>
          <ul  className={styles.list}>
            {menuItems.map(item=>(
                <li key={item.title}>
                    <span className={styles.cat}>{item.title}</span>
                    {item.list.map(litem=>(
                        <MenuLink item={litem}/>
                    ))}
                </li>
            ))}
          </ul>
          <button className={styles.logout}>Logout
          <MdLogout/>
          </button>
        </div>
    )
}

export default Sidebar