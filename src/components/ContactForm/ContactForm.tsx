import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Icon } from '../Icon/Icon';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted securely:', formData);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.contentContainer}>
        
        {/* ================= LEFT SIDE: FORM ================= */}
        <div className={styles.formColumn}>
          <h2 className={styles.formTitle}>Begin a Conversation</h2>
          
          <form onSubmit={handleSubmit} className={styles.mainForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.fieldLabel}>YOUR NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tell us your name..."
                value={formData.name}
                onChange={handleChange}
                className={styles.textField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.fieldLabel}>EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tell us your email address..."
                value={formData.email}
                onChange={handleChange}
                className={styles.textField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="area" className={styles.fieldLabel}>DESIRED AREA</label>
              <input
                type="text"
                id="area"
                name="area"
                placeholder="Tell us your desired area..."
                value={formData.area}
                onChange={handleChange}
                className={styles.textField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="notes" className={styles.fieldLabel}>INQUIRY NOTES</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Tell us your inquiry notes..."
                value={formData.notes}
                onChange={handleChange}
                className={styles.textareaField}
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              INQUIRE SECURELY
            </button>
          </form>
        </div>

        {/* ================= RIGHT SIDE: BUSINESS INFO ================= */}
        <div className={styles.infoColumn}>
          <span className={styles.upperLabel}>VISIT US</span>
          <h3 className={styles.infoHeading}>Marci Metzger</h3>
          <p className={styles.infoSubtext}>
            THE RIDGE REALTY GROUP
          </p>

          <div className={styles.contactDetailsList}>
            {/* Address Line - Assuming icon name is 'map-pin' or 'location' */}
            <div className={styles.detailItem}>
              <div className={styles.iconContainer}>
                <Icon 
                  name="location" /* Update this key to match your literal IconName string value precisely */
                  stroke="var(--color-brand-terracotta)" 
                  strokeWidth={1.5} 
                  fill='none'
                />
              </div>
              <span className={styles.detailText}>1190 E Highway 372, Pahrump, NV 89048</span>
            </div>

            {/* Phone Line - Assuming icon name is 'phone' */}
            <div className={styles.detailItem}>
              <div className={styles.iconContainer}>
                <Icon 
                  name="phone" /* Update this key to match your literal IconName string value precisely */
                  stroke="var(--color-brand-terracotta)" 
                  strokeWidth={1.5} 
                  fill='none'
                />
              </div>
              <a href="tel:7025133162" className={styles.detailLink}>(702) 513-3162</a>
            </div>

            {/* Business Hours Line - Assuming icon name is 'clock' */}
            <div className={styles.detailItem}>
              <div className={styles.iconContainer}>
                <Icon 
                  name="clock"
                  stroke="var(--color-brand-terracotta)" 
                  strokeWidth={1.5} 
                  fill='none'
                />
              </div>
              <span className={styles.detailText}>
                Open today 08:00 am – 07:00 pm
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
