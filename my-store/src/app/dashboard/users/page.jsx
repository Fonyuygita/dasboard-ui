
import styles from "../../../ui/dashboard/user/user.module.css";
import Image from "next/image";
import Link from "next/link";
import Search from "../../../../public/nextadmin-completed/app/ui/dashboard/search/search";
import { fetchUser } from "@/app/lib/data";
import Pagination from "@/ui/dashboard/pagination/pagination";

const UsersPage =  async({searchParams}) => {
  // searchParams is optional and can be empty
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, users} = await fetchUser(q, page);


console.log(users)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/addUser">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
         {users.map((user)=>(

        
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/me.png"}
                    alt={user.img}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.eusernama}
                </div>
              </td>
              <td>{user.email}</td>
              <td>12/23/23</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/34`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" value="" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
        ))}
       
        </tbody>
      </table>
<Pagination numberCount={count}/>
    </div>
  );
};

export default UsersPage;
