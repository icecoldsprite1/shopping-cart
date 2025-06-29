import { Link } from "react-router-dom";
import styles from './NavigationBar.module.css'

function NavigationBar({cartCount = 0}) {
  return (
    <nav className={styles['navbar-container']}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className={styles.cart}>
        <div>{cartCount} items</div>
        <button>Checkout</button>
      </div>
    </nav>
  )
}

export default NavigationBar;