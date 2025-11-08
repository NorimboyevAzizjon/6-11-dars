import React, { useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartSidebar from '../Cart/CartSidebar';
import FavoritesSidebar from '../Favorites/FavoritesSidebar';
import LoginModal from '../Auth/LoginModal';
import CityModal from '../City/CityModal';
import { useCart } from '../../hooks/useCart';
import styles from './Header.module.css';

const Header = ({ favorites, onToggleFavorite, allProducts }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Toshkent');
  const [activeLink, setActiveLink] = useState('/');
  const { addToCart } = useCart();

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const removeFavorite = (productId) => {
    onToggleFavorite(productId);
  };

  const handleAddToCartFromFavorites = (product) => {
    addToCart(product);
  };

  const handleLogin = (phoneNumber) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topInfo}>
          <button 
            className={`${styles.navLink} ${styles.cityBtn} ${activeLink === '/location' ? styles.active : ''}`}
            onClick={() => setIsCityOpen(true)}
          >
            <i className="fas fa-map-marker-alt"></i>
            {selectedCity}
          </button>
          <a 
            href="#delivery-points" 
            className={`${styles.navLink} ${activeLink === '/delivery-points' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/delivery-points')}
          >
            <i className="fas fa-box"></i>
            Topshirish punktlari
          </a>
          <a 
            href="#become-seller" 
            className={`${styles.navLink} ${activeLink === '/become-seller' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/become-seller')}
          >
            <i className="fas fa-user-tie"></i>
            Sotuvchi bo'lish
          </a>
          <a 
            href="#open-point" 
            className={`${styles.navLink} ${activeLink === '/open-point' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/open-point')}
          >
            <i className="fas fa-store"></i>
            Topshirish punktini ochish
          </a>
          <a 
            href="#faq" 
            className={`${styles.navLink} ${activeLink === '/faq' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/faq')}
          >
            <i className="fas fa-question-circle"></i>
            Savol-javob
          </a>
          <a 
            href="#orders" 
            className={`${styles.navLink} ${activeLink === '/orders' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/orders')}
          >
            <i className="fas fa-clipboard-list"></i>
            Buyurtmalarim
          </a>
          <select className={styles.langSelect}>
            <option><i className="fas fa-globe"></i> O'zbekcha</option>
            <option><i className="fas fa-globe"></i> Русский</option>
          </select>
        </div>

        <div className={styles.mainNav}>
          <a 
            href="#home" 
            className={styles.logo}
            onClick={() => handleLinkClick('/')}
          >
            <i className="fas fa-shopping-bag"></i>
            uzum market
          </a>
          
          <a 
            href="#catalog" 
            className={styles.catalogBtn}
            onClick={() => handleLinkClick('/catalog')}
          >
            <i className="fas fa-bars"></i>
            <span>Katalog</span>
          </a>

          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Mahsulotlar va turkumlar izlash" 
            />
            <button><i className="fas fa-search"></i></button>
          </div>

          <div className={styles.userActions}>
            {isLoggedIn ? (
              <div className={styles.userMenu}>
                <span className={styles.userName}>
                  <i className="fas fa-user"></i>
                  Foydalanuvchi
                </span>
                <button 
                  className={styles.logoutBtn}
                  onClick={handleLogout}
                >
                  Chiqish
                </button>
              </div>
            ) : (
              <button 
                className={styles.loginBtn}
                onClick={() => setIsLoginOpen(true)}
              >
                <i className="fas fa-user"></i>
                Kirish
              </button>
            )}
            <button 
              className={styles.favoritesBtn}
              onClick={() => setIsFavoritesOpen(true)}
            >
              <i className="fas fa-heart"></i>
              {favorites.size > 0 && <span className={styles.badge}>{favorites.size}</span>}
            </button>
            <button 
              className={styles.cartBtn}
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon />
              Savat
            </button>
          </div>
        </div>

       
        <nav className={styles.categories}>
          <a 
            href="#weekly" 
            className={`${styles.categoryLink} ${activeLink === '/weekly' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/weekly')}
          >
            Hafta tovarlari
          </a>
          <a 
            href="#winter" 
            className={`${styles.categoryLink} ${activeLink === '/winter' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/winter')}
          >
            Qishki kolleksiya
          </a>
          <a 
            href="#hobby" 
            className={`${styles.categoryLink} ${activeLink === '/hobby' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/hobby')}
          >
            Xobbi va ijod
          </a>
          <a 
            href="#tourism" 
            className={`${styles.categoryLink} ${activeLink === '/tourism' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/tourism')}
          >
            Turizm, baliq ovi va ovchilik
          </a>
          <a 
            href="#electronics" 
            className={`${styles.categoryLink} ${activeLink === '/electronics' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/electronics')}
          >
            Elektronika
          </a>
          <a 
            href="#appliances" 
            className={`${styles.categoryLink} ${activeLink === '/appliances' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/appliances')}
          >
            Maishiy texnika
          </a>
          <a 
            href="#clothing" 
            className={`${styles.categoryLink} ${activeLink === '/clothing' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/clothing')}
          >
            Kiyim
          </a>
          <a 
            href="#shoes" 
            className={`${styles.categoryLink} ${activeLink === '/shoes' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/shoes')}
          >
            Poyabzallar
          </a>
          <a 
            href="#accessories" 
            className={`${styles.categoryLink} ${activeLink === '/accessories' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/accessories')}
          >
            Aksessuarlar
          </a>
          <a 
            href="#more" 
            className={`${styles.categoryLink} ${activeLink === '/more' ? styles.active : ''}`}
            onClick={() => handleLinkClick('/more')}
          >
            Yana <i className="fas fa-chevron-down"></i>
          </a>
        </nav>
      </header>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />

      <FavoritesSidebar 
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        products={allProducts}
        onRemoveFavorite={removeFavorite}
        onAddToCart={handleAddToCartFromFavorites}
      />

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />

      <CityModal 
        isOpen={isCityOpen}
        onClose={() => setIsCityOpen(false)}
        onCitySelect={handleCitySelect}
      />
    </>
  );
};

export default Header;