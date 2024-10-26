import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyErp.module.css'
gsap.registerPlugin(ScrollTrigger);
const CounterSection = () => {
    const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { value: 5.6, unit: 'M+', label: 'Downloads' },
    { value: 3.2, unit: '+', label: 'Active Users' },
    { value: 4.9, unit: '', label: 'Ratings' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const statElements = statsRef.current;

    gsap.fromTo(statElements,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    statElements.forEach((el, index) => {
      const valueElement = el.querySelector('.value');
      const finalValue = stats[index].value;

      gsap.to(valueElement, {
        innerHTML: finalValue,
        duration: 2,
        snap: { innerHTML: 0.1 },
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        onUpdate: () => {
          valueElement.innerHTML = parseFloat(valueElement.innerHTML).toFixed(1);
        }
      });
    });
  }, []);
  return (
    <div ref={sectionRef} className="whyErp_wrapper py-5">
    <div className="container">
      <div className="row justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-4 col-md-4 text-center" ref={el => statsRef.current[index] = el}>
            <h3 className={styles.ErpCounter}>
              <span className="value">0</span>{stat.unit}
            </h3>
            <p className={styles.Counterlabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CounterSection