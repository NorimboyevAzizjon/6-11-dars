import React from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './CartSidebar.module.css';

const CartIcon = () => {
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();

  return (
    <div className={styles.cartIcon}>
      <i className="fas fa-shopping-cart"></i>
      {itemCount > 0 && (
        <span className={styles.cartBadge}>{itemCount}</span>
      )}
    </div>
  );
};

export default CartIcon;