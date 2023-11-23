import { addNewUser } from "@/app/lib/serverActions"
import styles from "../../../../ui/dashboard/user/add/add.module.css"

const AddUsers=()=>{
    return(
        <div className={styles.container}>
            <form action={addNewUser} className={styles.form}>
                <input type="text" placeholder="username." name="username" required />
                <input type="email" placeholder="email." name="email" required />
                <input type="password" placeholder="Password." name="password" required />
                <input type="phone" placeholder="phone." name="username" />


                <select name="isAdmin" id="isAdmin">
                <option value={false} selected>Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                    <option value="No">Rducation</option>
                
                </select>

                <select name="isActive" id="isActive">
                <option value={true} selected>Active</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                    <option value="No">Rducation</option>
                
                </select>
            
                <textarea name="address" id="address"  rows="16" placeholder="Address"></textarea>
                <button type="submit">Add a User</button>
            </form>
        </div>
    )
}

export default AddUsers