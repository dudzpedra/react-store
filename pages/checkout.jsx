import Image from "next/image";
import Header from "../components/Header";
import { useDispatch, useStore } from "../components/Store";
import style from "../styles/Products.module.css";

const Checkout = () => {
  const state = useStore();
  const dispatch = useDispatch();

  const totalPrice = state.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    console.log("index: ", index);
    dispatch({ type: "REMOVE", index });
  };

  return (
    <div className="checkout">
      <Header />
      <h2>Checkout</h2>
      <p>
        Total:{" "}
        <strong>
          {totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </p>
      {state.length === 0 && <p>No products added to cart</p>}
      <div className={style.products}>
        {state.map((product, index) => (
          <div key={product.title}>
            <p>{product.title}</p>
            <Image
              alt={product.title}
              width={100}
              height={100}
              src={product.url}
            />
            <p>R$ {product.price}</p>
            <button onClick={() => handleRemove(index)}>Remove Item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
