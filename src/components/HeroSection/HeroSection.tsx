import { Container } from '../Container/Container';
import styles from './HeroSection.module.css';
import BannerParallax from '../../assets/sections/banner_parallax.webp';
import MarciProfilePic from '../../assets/sections/marci_photo.webp';

const HeroSection = () => {
  return (
    <section className={styles.heroWrapper}>
      {/* 1. Background Image Layer */}
      <div className={styles.bgImageLayer} style={{ backgroundImage: `url(${BannerParallax})` }} aria-hidden="true" />
      
      {/* 2. Visual Overlay for Text Contrast */}
      <div className={styles.scenicOverlay} aria-hidden="true" />

      {/* 3. Foreground Content Structural Layout */}
      <Container>
        <div className={styles.heroContentContainer}>
          
          {/* Floating Agent Badge Component */}
          <div className={styles.agentCard}>
            <div className={styles.avatarFrame}>
              <img 
                src={MarciProfilePic} 
                alt="Marci Metzger profile picture" 
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.agentInfo}>
              <h2 className={styles.agentName}>MARCI METZGER</h2>
              <p className={styles.agentSubtitle}>REALTOR FOR NEARLY 3 DECADES</p>
            </div>
          </div>

          {/* Core Editorial Headlines */}
          <div className={styles.editorialHeadingBlock}>
            <span className={styles.agencyLabel}>THE SHIELD REALTY GROUP</span>
            <h1 className={styles.mainTitle}>
              Acquire Your Sanctuary in the <br className={styles.desktopLineBreak} />
              Desert Valley
            </h1>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
