import React, { useRef, useState } from 'react';
import styles from './PhotoGallery.module.css';
import gallery from '../../../assets/gallery/Gallery';

const galleryData = Object.keys(gallery).map((key) => ({
  id: crypto.randomUUID(),
  imageSrc: gallery[key as keyof typeof gallery],
  imageAlt: `Gallery image ${key}`,
}));

export const PhotoGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // 1. Capture original click anchors
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX - containerRef.current.offsetLeft,
      scrollLeft: containerRef.current.scrollLeft,
    };
  };

  // 2. Track mouse displacement and compute real-time scroll offset translations
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault(); // Prevents natural browser image ghost-dragging glitches
    
    const x = e.pageX - containerRef.current.offsetLeft;
    const walkDistance = (x - dragStart.current.x) * 1.5; // Multiply by 1.5 for a snappier scroll velocity
    containerRef.current.scrollLeft = dragStart.current.scrollLeft - walkDistance;
  };

  // 3. Reset dragging states cleanly
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className={styles.gallerySection}>
      <header className={styles.galleryHeader}>
        <h2 className={styles.galleryTitle}>Photo Gallery</h2>
      </header>

      {/* Interactive mouse and mobile gesture container wrapper */}
      <div 
        ref={containerRef}
        className={`${styles.galleryContainer} ${isDragging ? styles.grabbing : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <div key='spacer' className={styles.imageCardSpacer}></div>
        {galleryData.map((item) => (
          <div key={item.id} className={styles.imageCard}>
            <img 
              src={item.imageSrc} 
              alt={item.imageAlt} 
              className={styles.galleryImage} 
              draggable="false" // Crucial: Prevents default browser image drag behaviors
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
