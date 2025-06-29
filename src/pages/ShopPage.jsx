import ProductCard from "../components/ProductCard";
import { useEffect, useState} from 'react';
import styles from '../pages/ShopPage.module.css'

const sampleProducts = [
  { id: 1, name: "Organic Cotton T-Shirt", price: 25 },
  { id: 2, name: "Recycled Hoodie", price: 40 },
  { id: 3, name: "Eco Sneakers", price: 60 },
];

function GetShopItems() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(data => {
        const first15 = data.slice(0, 15);
        setItems(first15);
        console.log(first15);
      })
  }, []);
  return items;
}

function ShopPage() {
  const products = GetShopItems();
  const [cart, setCart] = useState([]);
  
  function addToCart(item) {
    setCart((prevCart) => {
      const existing = prevCart.find((product) => product.id === item.id);
      if (existing) {
        return prevCart.map((product) => 
          product.id === item.id ? {...product, quantity: product.quantity + item.quantity} : product
        );
      } else {
        return [...prevCart, item]
      }
    });
  };
  return (
  <div className={styles['shop-container']}>
    <h1>Shop Page</h1>
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>

    <div>
      <p>{cart.reduce((sum, item) => sum + item.quantity, 0)} items in cart</p>
    </div>
  </div>
)
};

export default ShopPage;