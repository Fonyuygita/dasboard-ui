// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import styles from "../../../../ui/dashboard/user/singleUser/singleUser.module.css"
import Image from "next/image";

const SingleUserPage = () => {
  
 

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/fonyuygita.png" alt="" fill />
        </div>
        Fonyuy Gita
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value=""/>
          <label>Username</label>
          <input type="text" name="username" placeholder="username" />
          <label>Email</label>
          <input type="email" name="email" placeholder="fonyugita@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+234 566 6565 " />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Kumbo-Bamenda" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={false}>Yes</option>
            <option value={false} selected={true}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={false}>Yes</option>
            <option value={false} selected={true}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
