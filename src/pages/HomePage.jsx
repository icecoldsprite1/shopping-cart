import styles from '../pages/HomePage.module.css'
import { useState, useEffect } from 'react';

function HomePage() {
  return (
    <div className={styles['home-container']}>
      <h1>Welcome to The Store</h1>
      <p>Shop for stuff</p>
    </div>
  )
}

export default HomePage;