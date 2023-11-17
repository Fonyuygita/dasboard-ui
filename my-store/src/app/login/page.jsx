import styles from "../../ui/login/login.module.css"
import LoginForm from "../../../public/nextadmin-completed/app/ui/login/loginForm/loginForm";


const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
