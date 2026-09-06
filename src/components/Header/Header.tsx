import { useState } from 'react';
import styles from './Header.module.css';
import { Container } from '../Container/Container';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <Container>
        <div className={styles.headerInner}>
          {/* Logo/Branding Section */}
          <div className={styles.logo}>
            Marci Metzger
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={styles.mobileToggle} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}></span>
          </button>

          {/* Navigation Links */}
          <nav className={`${styles.navMenu} ${isOpen ? styles.navOpen : ''}`}>
            <a href="#featured" className={styles.navLink}>FEATURED LISTINGS</a>
            <a href="#services" className={styles.navLink}>CORE SERVICES</a>
            <a href="#community" className={styles.navLink}>THE COMMUNITY</a>
            <a href="#contact" className={styles.navLink}>CONTACT</a>
          </nav>

          {/* Action / Contact Number */}
          <div className={styles.contactNumber}>
            <a href="tel:7025133162">(702) 513-3162</a>
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Header;
