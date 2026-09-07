import React from 'react';
import styles from './PhotoGallery.module.css';
import gallery from '../../../assets/gallery/Gallery';

interface GalleryItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

const galleryData = Object.keys(gallery).map((key) => ({
  id: crypto.randomUUID(),
  imageSrc: gallery[key as keyof typeof gallery],
  imageAlt: `Gallery image ${key}`,
}));

export const PhotoGallery: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <header className={styles.galleryHeader}>
        <h2 className={styles.galleryTitle}>Photo Gallery</h2>
      </header>

      {/* Renders a continuous horizontal track carousel across all viewport breaklines */}
      <div className={styles.galleryInner}>
        <div key='spacer' className={styles.imageCardSpacer}></div>
        {galleryData.map((item) => (
          <div key={item.id} className={styles.imageCard}>
            <img 
              src={item.imageSrc} 
              alt={item.imageAlt} 
              className={styles.galleryImage} 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
