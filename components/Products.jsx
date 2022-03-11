import { useDispatch } from "../components/Store";
import Image from "next/image";
import styles from "../styles/Products.module.css";
import data from './data.json'

const Products = () => {
  const productsList = data.products
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <section className={styles.products}>
      {productsList.map((product) => (
        <div key={product.title} className={styles.product}>
          <p>{product.title}</p>
          <Image
            src={product.url}
            width={200}
            height={200}
            alt={product.title}
          />
          <p>
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button onClick={() => addItem(product)}>Quero!</button>
        </div>
      ))}
    </section>
  );
};

export default Products;
