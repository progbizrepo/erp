import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const sectionRefs = useRef([]);
  const tlRef = useRef();

  useEffect(() => {
    const sections = sectionRefs.current;
    
    sections.forEach((section, index) => {
      const cols = section.querySelectorAll('.col');
      
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
          markers: true,
        }
      });

      tlRef.current
        .fromTo(section, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 0.5 }
        )
        .fromTo(cols, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.1 },
          '-=0.3'
        );
    });

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="container">
      {[1, 2].map((sectionNum) => (
        <section 
          key={sectionNum} 
          ref={el => sectionRefs.current[sectionNum - 1] = el}
          className="section"
        >
          <div className="row">
            {[1, 2, 3].map((colNum) => (
              <div key={colNum} className="col">
                <h2>Section {sectionNum}, Column {colNum}</h2>
                <p>This is some sample content for the column.</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Description;