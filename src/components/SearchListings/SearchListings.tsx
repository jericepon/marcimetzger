import React, { useState } from 'react';
import styles from './SearchListings.module.css';

// Replace with your actual background image asset path
import SearchBgImage from '../../assets/sections/search_listing_banner.webp';

export const SearchListings: React.FC = () => {
  const [filters, setFilters] = useState({
    location: 'Any',
    type: 'Any',
    sortBy: 'Default',
    bedrooms: 'Any Number',
    baths: 'Any Number',
    minPrice: '',
    maxPrice: ''
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Executing live database search for:', filters);
  };

  return (
    <section 
      className={styles.sectionWrapper}
      style={{ backgroundImage: `url(${SearchBgImage})` }}
    >
      <div className={styles.overlay} aria-hidden="true" />
      
      <div className={styles.contentContainer}>
        {/* Editorial Subheader */}
        <h2 className={styles.sectionSubtitle}>FIND YOUR DREAM HOME</h2>

        {/* White Floating Form Block */}
        <form onSubmit={handleSearchSubmit} className={styles.searchPanel}>
          <h3 className={styles.panelTitle}>Search Listings</h3>
          
          <div className={styles.formGrid}>
            
            {/* Top Row fields */}
            <div className={styles.inputGroup}>
              <label htmlFor="location" className={styles.fieldLabel}>Location</label>
              <select id="location" name="location" value={filters.location} onChange={handleSelectChange} className={styles.selectControl}>
                <option value="Any">Any</option>
                <option value="Pahrump">Pahrump</option>
                <option value="Las Vegas">Las Vegas</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="type" className={styles.fieldLabel}>Type</label>
              <select id="type" name="type" value={filters.type} onChange={handleSelectChange} className={styles.selectControl}>
                <option value="Any">Any</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="sortBy" className={styles.fieldLabel}>Sort By</label>
              <select id="sortBy" name="sortBy" value={filters.sortBy} onChange={handleSelectChange} className={styles.selectControl}>
                <option value="Default">Default</option>
                <option value="Price Low-High">Price: Low to High</option>
                <option value="Price High-Low">Price: High to Low</option>
              </select>
            </div>

            {/* Bottom Row fields */}
            <div className={styles.inputGroup}>
              <label htmlFor="bedrooms" className={styles.fieldLabel}>Bedrooms</label>
              <select id="bedrooms" name="bedrooms" value={filters.bedrooms} onChange={handleSelectChange} className={styles.selectControl}>
                <option value="Any Number">Any Number</option>
                <option value="1+">1+</option>
                <option value="2+">2+</option>
                <option value="3+">3+</option>
                <option value="4+">4+</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="baths" className={styles.fieldLabel}>Baths</label>
              <select id="baths" name="baths" value={filters.baths} onChange={handleSelectChange} className={styles.selectControl}>
                <option value="Any Number">Any Number</option>
                <option value="1+">1+</option>
                <option value="2+">2+</option>
                <option value="3+">3+</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="minPrice" className={styles.fieldLabel}>Min Price</label>
              <input 
                type="text" 
                id="minPrice" 
                name="minPrice" 
                placeholder="$ Min" 
                value={filters.minPrice}
                onChange={handleInputChange}
                className={styles.inputControl}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="maxPrice" className={styles.fieldLabel}>Max Price</label>
              <input 
                type="text" 
                id="maxPrice" 
                name="maxPrice" 
                placeholder="$ Max" 
                value={filters.maxPrice}
                onChange={handleInputChange}
                className={styles.inputControl}
              />
            </div>

            {/* Submit Action Block */}
            <div className={styles.actionGroup}>
              <button type="submit" className={styles.searchButton}>
                SEARCH NOW
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};
