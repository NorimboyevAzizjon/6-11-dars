import React from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } =
    useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(-1);
  };

  const handleCheckout = () => {
    console.log("Buyurtma berish");
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
        {cartItems.length === 0 ? (
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
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p className={styles.price}>${item.price}</p>
                  </div>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
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
                <span>Jami:</span>
                <span>${getCartTotal()}</span>
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
