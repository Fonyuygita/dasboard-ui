import styles from "../../../../ui/dashboard/product/addProduct/addProduct.module.css"

const AddProduct=()=>{
    return(
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="product title..." name="title" required />
                <select name="cat" id="cat">
                <option value="general">Choose any category</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="technology">Technology</option>
                    <option value="education">Rducation</option>
                    <option value="food">Food</option>
                </select>
                <input type="number"  placeholder="price" name="price"/>
                <input type="number" placeholder="quantity" name="quantity" />
                <input type="text" placeholder="type" name="type" />
                <input type="text"  placeholder="item-Code" name="item"/>
                <textarea name="desc" id="desc"  rows="16" placeholder="description"></textarea>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default AddProduct