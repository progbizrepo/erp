import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Producttab.module.css'


const ProductNavtab = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const tabs = ['projects', 'accounts', 'inventory', 'crm', 'assets'];

   
      useEffect(() => {
        // GSAP animation when tab changes
        gsap.fromTo(
          `.${styles.content}.${activeTab}`,
          { x: 500, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
      }, [activeTab]);
  return (
  
    <div>
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </div>
      ))}
    </div>

    <div className={styles.tabContent}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.content} ${tab} ${
            activeTab === tab ? styles.activeContent : ''
          }`}
        >
          <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)} Content</h2>
          <p>This is the content for {tab}.</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProductNavtab