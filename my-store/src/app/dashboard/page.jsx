
import Card from "../../ui/dashboard/card/Card"
// import Chart from "../ui/dashboard/chart/chart";
import styles from "../../ui/dashboard/dashboard.module.css"

import { cards } from "@/data";
import Chart from "@/ui/dashboard/chart/chart";
import Rightbar from "@/ui/dashboard/rightbar/rightbar";
// import RightBar from "@/ui/dashboard/rightbar/rightbar";
import Transaction from "@/ui/dashboard/transaction/Transaction";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
       <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
            // <h1>hello world</h1>
          ))}
        </div>
        <Transaction/>
        {/* <Chart/> */}
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div> 
    </div>
  );
};

export default Dashboard;
