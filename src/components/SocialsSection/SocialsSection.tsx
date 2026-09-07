import React from 'react';
import styles from './SocialsSection.module.css';
import { Icon } from '../Icon/Icon';
import type { IconName } from '../Icon/icons';

interface SocialItem {
  id: string;
  iconName: IconName;
  href: string;
  label: string;
}

const socialLinks: SocialItem[] = [
  { id: 'fb', iconName: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
  { id: 'ig', iconName: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
  { id: 'li', iconName: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { id: 'yp', iconName: 'yelp', href: 'https://yelp.com', label: 'Yelp' },
];

export const SocialsSection: React.FC = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.socialsRowContainer}>
        {socialLinks.map((social) => (
          <a 
            key={social.id} 
            href={social.href} 
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Icon 
              name={social.iconName}
              fill="var(--color-brand-terracotta)" 
            />
          </a>
        ))}
      </div>
    </section>
  );
};
