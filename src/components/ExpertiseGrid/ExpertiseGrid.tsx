import React from 'react';
import styles from './ExpertiseGrid.module.css';

interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    id: '1',
    title: 'Real Estate Done Right',
    description: "We focus on a completely seamless client journey. From initial consultations to final closing handshakes, we represent your interest with uncompromising integrity."
  },
  {
    id: '2',
    title: 'Commercial & Residential',
    description: "Whether acquiring premium desert acreage, luxury estate residential parcels, or commercial office developments, our decades of experience guarantee exceptional execution."
  },
  {
    id: '3',
    title: 'Rely on Expertise',
    description: "Our deep-rooted knowledge of Nevada's fastest-growing luxury communities offers buyers and sellers an invaluable competitive edge."
  }
];

export const ExpertiseGrid: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.gridContainer}>
        {expertiseData.map((card) => (
          <article key={card.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
