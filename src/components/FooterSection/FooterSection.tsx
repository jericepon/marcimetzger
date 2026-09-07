import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Left Side: Branding / Logo Group */}
        <div style={styles.brandGroup}>
          <h2 style={styles.brandName}>Marci Metzger</h2>
          <p style={styles.subBrand}>THE RIDGE REALTY GROUP</p>
        </div>

        {/* Right Side: Copyright & Tagline */}
        <div style={styles.copyrightGroup}>
          <p style={styles.copyrightText}>
            Copyright © 2026 Marci METZGER - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// Inline Styles for easy integration (can be extracted to CSS modules or Tailwind)
const styles: { [key: string]: React.CSSProperties } = {
  footerContainer: {
    backgroundColor: '#FAF5EF', // Matches the off-white parchment background tint
    padding: '40px 60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px', // Standard container constraint
    flexWrap: 'wrap',   // Handles mobile wrapping beautifully
    gap: '24px',
  },
  brandGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  brandName: {
    fontFamily: '"Cormorant Garamond", "Georgia", serif', // Elegant serif font pairing
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: '24px',
    color: '#332E2B',     // Dark muted charcoal brown ink color
    margin: 0,
    lineHeight: '1.2',
  },
  subBrand: {
    fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
    fontWeight: 400,
    fontSize: '10px',
    letterSpacing: '0.15em', // Spread tracking out for luxury brand feel
    color: '#706861',
    margin: '4px 0 0 0',
  },
  copyrightGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  copyrightText: {
    fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
    fontWeight: 300,
    fontSize: '12px',
    color: '#706861',
    margin: 0,
    lineHeight: '1.5',
    textAlign: 'right',
  },
};

export default FooterSection;
