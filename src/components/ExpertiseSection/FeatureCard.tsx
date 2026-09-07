import React from 'react';
import type { FeatureItem } from './FeatureItem';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  item: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
  const { imageSrc, imageAlt, title, description } = item;

  return (
    <article className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={imageSrc} alt={imageAlt} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </article>
  );
};