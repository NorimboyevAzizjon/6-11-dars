import React from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './CartSidebar.module.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  // Overlay bosilganda yopish
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.cartOverlay} onClick={handleOverlayClick}>
      <div className={styles.cartSidebar}>
        <div className={styles.cartHeader}>
          <h2>Savat</h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.cartItems}>
          {cart.items.length === 0 ? (
            <p className={styles.emptyCart}>Savat bo'sh</p>
          ) : (
            cart.items.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <h4>{item.name}</h4>
                  <p className={styles.itemPrice}>{item.price.toLocaleString()} so'm</p>
                  <div className={styles.quantityControls}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={styles.quantityBtn}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={styles.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeBtn}
                  title="O'chirish"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {cart.items.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.cartTotal}>
              Jami: <strong>{getCartTotal().toLocaleString()} so'm</strong>
            </div>
            <div className={styles.cartActions}>
              <button className={styles.clearBtn} onClick={clearCart}>
                Tozalash
              </button>
              <button className={styles.checkoutBtn}>
                Buyurtma berish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;