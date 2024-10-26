import React from 'react';
import styles from './style.module.css'

const HeadSection = ({ TaglineComponent, title, description, textAlign = 'center' ,color='#0C0C0C',ParaColor='#666666' }) => {
  return (
    <section className="feature-section">
      <div className="">

      
          <div className={styles.uniqueFeature} style={{ textAlign }}>
          {TaglineComponent}
        </div>
        <h2 className={styles.mainHead} style={{ textAlign ,color }}>{title}</h2>
        <p className={styles.description} style={{ textAlign ,color: ParaColor}}>{description}</p>
  
        
        </div>
     
    </section>
  );
};

export default HeadSection;