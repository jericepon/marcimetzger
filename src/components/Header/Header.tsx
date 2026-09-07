import { useState, useEffect, useRef, type CSSProperties } from 'react';
import styles from './Header.module.css';
import { Container } from '../Container/Container';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Calculates the scroll range target based on header height
    const maxScroll = headerRef.current ? headerRef.current.offsetHeight : 100;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Locks the value strictly between 0 and 1
      const ratio = Math.min(currentScroll / maxScroll, 1);
      setScrollRatio(ratio);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  // Dynamically inject the progress value into CSS
  const dynamicVars = {
    '--scroll-ratio': scrollRatio,
  } as CSSProperties;

  return (
    <header 
      ref={headerRef} 
      className={styles.headerContainer} 
      style={dynamicVars}
    >
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            Marci Metzger
          </div>

          <nav className={`${styles.navMenu} ${isOpen ? styles.navOpen : ''}`}>
            <a href="#home" className={styles.navLink}>HOME</a>
            <a href="#listings" className={styles.navLink}>LISTINGS</a>
            <a href="#lets-move" className={styles.navLink}>LET'S MOVE</a>
            <a href="#about-us" className={styles.navLink}>ABOUT US</a>
          </nav>

          <div className={styles.contactNumber}>
            <a href="tel:7025133162">(702) 513-3162</a>
          </div>

          <button 
            className={styles.mobileToggle} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
