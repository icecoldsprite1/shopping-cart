import { useState } from "react";
import styles from '../components/ProductCard.module.css'

function ProductCard({product, onAddToCart}) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity(q => q + 1);
  }

  function decrease() {
    setQuantity(q => Math.max(1, q - 1));
  }

  function handleAdd() {
    onAddToCart({...product, quantity})
  }

  return (
    <div className={styles.container}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} className={styles.img}/>
      <p>${product.price}</p>
      <div>
        <button onClick={decrease}>decrease</button>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, +e.target.value))}>
        </input>
        <button onClick={increase}>increase</button>
      </div>
      <button onClick={handleAdd}>add to cart</button>
    </div>
  )

}

export default ProductCard;