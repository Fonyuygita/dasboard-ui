
import styles from "../../../ui/dashboard/user/user.module.css";
import Image from "next/image";
import Link from "next/link";
import Search from "../../../../public/nextadmin-completed/app/ui/dashboard/search/search";

const UsersPage =  () => {
//   const q = searchParams?.q || "";
//   const page = searchParams?.page || 1;
//   const { count, users } = await fetchUsers(q, page);

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
         
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/slider1.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  jude fonyuy
                </div>
              </td>
              <td>jude@email.com</td>
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
       
        </tbody>
      </table>

    </div>
  );
};

export default UsersPage;
