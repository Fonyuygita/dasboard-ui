// import { updateProduct } from "@/app/lib/actions";
// import { fetchProduct } from "@/app/lib/data";
import styles from "../../../../ui/dashboard/product/singleProduct/singleProduct.module.css"
import Image from "next/image";

const SingleProductPage =  () => {
 

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/s18.png" alt="" fill />
        </div>
       <div className={styles.pDetails}>
        <div className={styles.pTitle}>
            <p>Modern Hand Bag</p>
            <span>Already purchased</span>
            </div>
            <div className={styles.Pdescription}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae officiis eum.</p>

            </div>
            <div className={styles.price}>
                <span>123</span>
            </div>
       </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="id" />
          <label>Title</label>
          <input type="text" name="title" placeholder="title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="stock" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="color"
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder="size"
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="product description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
