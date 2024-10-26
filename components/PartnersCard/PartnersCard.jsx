import React from 'react';
import Image from 'next/image';
import styles from './Partnerscard.module.css'

const PartnersCard = ({logoSrc, clientName}) => {
  return (
    <div className={styles.client_logo_Card}>
       <Image 
        src={logoSrc}
        alt={clientName}
        width={80} 
        height={80}
        className={styles.logoImage}
      />
      <p className={styles.logoText}>{clientName}</p>
    </div>
  );
};


  
  export default PartnersCard;
