import React from 'react';
import { useCart } from '../../hooks/useCart'; // TO'G'RI YO'L - hooks/useCart
import styles from './CartSidebar.module.css';

const CartIcon = () => {
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();

  return (
    <div className={styles.cartIcon}>
      <span>🛒</span>
      {itemCount > 0 && (
        <span className={styles.cartBadge}>{itemCount}</span>
      )}
    </div>
  );
};

export default CartIcon;