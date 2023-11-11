import Image from "next/image";
import { tableData } from "./tableData";
import styles from "./transaction.module.css"
;

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className={styles.user}>
                  <Image src={transaction.img} alt="" width={40} height={40} className={styles.userImage} />
                  {transaction.name}
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles[transaction.status.toLowerCase()]}`}>
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;