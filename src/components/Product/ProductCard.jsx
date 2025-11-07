import React from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Rating ni yulduzchalar bilan ko'rsatish
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    
    return stars.join('');
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
        {product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}
        <div className={styles.ratingBadge}>
          {renderRatingStars(product.rating)} {product.rating}
        </div>
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        
        <div className={styles.productPricing}>
          <span className={styles.currentPrice}>{product.price.toLocaleString()} so'm</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={styles.originalPrice}>{product.originalPrice.toLocaleString()} so'm</span>
          )}
        </div>

        {product.originalPrice && product.originalPrice > product.price && (
          <div className={styles.monthlyPayment}>
            {(product.price / 12).toLocaleString('uz-UZ', { maximumFractionDigits: 0 })} so'm/oyiga
          </div>
        )}

        <div className={styles.productRating}>
          <span className={styles.rating}>
            {renderRatingStars(product.rating)} {product.rating}
          </span>
          <span className={styles.reviews}>({product.reviews} ta)</span>
        </div>

        <button 
          className={styles.addToCartBtn} 
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? "Savatga qo'shish" : "Qolmagan"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;