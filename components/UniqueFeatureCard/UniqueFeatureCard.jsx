import { useState, useEffect } from 'react';

import Image from 'next/image';
import styles from './style.module.css'


const UniqueFeatureCard = ({ title, description, imageSrc, imageAlt, smallImageSrc }) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
       
        <div className={styles.card}>
            <div className={styles.cardHead}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}
                </p>
            </div>
            <div className={styles.cardBody}>


                <div className={styles.imageContainer}>
                    <Image
                      src={isMobile ? smallImageSrc : imageSrc}
                        alt={imageAlt}
                        layout="responsive"
                        width={500}
                        height={300}
                        objectFit="fill"
                    />
                </div>
            </div>
        </div>
    )
}

export default UniqueFeatureCard