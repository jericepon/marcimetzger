import { useState } from 'react';
import styles from './Header.module.css';
import { useEffect, useRef } from 'react';
import { Container } from '../Container/Container';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Get the baseline height of the header exactly once on layout mount
    const triggerThreshold = headerRef.current ? headerRef.current.offsetHeight : 80;

    const handleScroll = () => {
      // 2. Direct clean comparison: Is our current scroll position greater than the height?
      if (window.scrollY > triggerThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true }); // passive improves scroll performance
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures threshold calculation is locked and stable

  return (
    <header ref={headerRef} className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
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
