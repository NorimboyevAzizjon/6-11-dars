import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(-1);
  };

  const handleCheckout = () => {
    console.log("Buyurtma berish");
    // Checkout logikasi
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <button className={styles.backButton} onClick={handleContinueShopping}>
          ← Orqaga
        </button>
        <h1>Mening Savatim</h1>
      </div>

      <div className={styles.cartContent}>
        {items.length === 0 ? (
          <div className={styles.emptyCart}>
            <i className="fas fa-shopping-cart"></i>
            <h2>Savat bo'sh</h2>
            <p>Savatga mahsulot qo'shing</p>
            <button
              className={styles.shopButton}
              onClick={handleContinueShopping}
            >
              Xarid qilishni davom etish
            </button>
          </div>
        ) : (
          <>
            <div className={styles.cartItems}>
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img 
                    src={item.image || '/placeholder-product.jpg'} 
                    alt={item.name} 
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p className={styles.price}>{item.price?.toLocaleString()} so'm</p>
                    <p className={styles.totalPrice}>
                      Jami: {(item.price * item.quantity).toLocaleString()} so'm
                    </p>
                  </div>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className={styles.quantityBtn}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className={styles.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.cartSummary}>
              <div className={styles.summaryRow}>
                <span>Mahsulotlar soni:</span>
                <span>{items.length} ta</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Jami miqdor:</span>
                <span>{items.reduce((total, item) => total + item.quantity, 0)} dona</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Umumiy summa:</span>
                <span className={styles.totalAmount}>{getCartTotal().toLocaleString()} so'm</span>
              </div>
              <button
                className={styles.checkoutButton}
                onClick={handleCheckout}
              >
                Buyurtma berish
              </button>
              <button className={styles.clearButton} onClick={clearCart}>
                Savatni tozalash
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;