import React, { type RefObject } from 'react';
import { useRegisterSection } from '../../contenxt/ActiveSectionContext';
import { expertiseData } from '../../fixtures/Expertise';
import styles from './ExpertiseSection.module.css';
import { FeatureCard } from './FeatureCard';

export const ExpertiseSection: React.FC<{ ref?: RefObject<HTMLElement | null> }> = () => {
  const registerRef = useRegisterSection('expertise');
  
  return (
    <section ref={registerRef} className={styles.section} id='expertise'>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Get it sold
        </h2>
      </header>

      <div className={styles.list}>
        {expertiseData.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};