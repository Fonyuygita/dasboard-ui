import Image from "next/image";
import Link from "next/link";
import styles from "../../../ui/dashboard/product/product.module.css"
import Search from "@/ui/dashboard/search/search";

// import Pagination from "@/app/ui/dashboard/pagination/pagination";
// import { fetchProducts } from "@/app/lib/data";
// import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = () => {
 

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  shoes
                </div>
              </td>
              <td>italian original shoes</td>
              <td>345Frs</td>
              <td>12/12/23</td>
              <td>4545</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/23`}>
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

            
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  shoes
                </div>
              </td>
              <td>italian original shoes</td>
              <td>345Frs</td>
              <td>12/12/23</td>
              <td>4545</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/23`}>
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

            
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  shoes
                </div>
              </td>
              <td>italian original shoes</td>
              <td>345Frs</td>
              <td>12/12/23</td>
              <td>4545</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/23`}>
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

            
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  shoes
                </div>
              </td>
              <td>italian original shoes</td>
              <td>345Frs</td>
              <td>12/12/23</td>
              <td>4545</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/23`}>
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
      {/* <Pagination count={count} /> */}
    </div>
  );
};

export default ProductsPage;
