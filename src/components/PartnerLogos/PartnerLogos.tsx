import React from 'react';
import styles from './PartnerLogos.module.css';

// Replace these paths with your project's actual logo image file paths
import RidgeLogo from '../../assets/gallery/client_1.webp';
import EqualHousingLogo from '../../assets/gallery/client_2.webp';
import RealtorLogo from '../../assets/gallery/client_3.webp';
import ChamberLogo from '../../assets/gallery/client_4.webp';

interface LogoItem {
  id: string;
  src: string;
  alt: string;
}

const logoData: LogoItem[] = [
  { id: 'ridge', src: RidgeLogo, alt: 'The Ridge Real Estate Group Logo' },
  { id: 'housing', src: EqualHousingLogo, alt: 'Equal Housing Opportunity Badge' },
  { id: 'realtor', src: RealtorLogo, alt: 'National Association of Realtors Badge' },
  { id: 'chamber', src: ChamberLogo, alt: 'Pahrump Valley Chamber of Commerce Logo' },
];

export const PartnerLogos: React.FC = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.logoRowContainer}>
        {logoData.map((logo) => (
          <div key={logo.id} className={styles.imageFrame}>
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className={styles.partnerImage} 
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};
