import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeadSection from '../HeadSection/HeadSection';
import PartnersCard from '../PartnersCard/PartnersCard';
gsap.registerPlugin(ScrollTrigger);
const Partners = () => {
  const sectionRef = useRef(null);
  const partnersRef = useRef([]);
  partnersRef.current = [];
  const PartnersSection = [
    {
      title: "Trusted by Fast-growing Solar Experts",
      description: "Progbiz ERP gives you clear visibility into your entire business and complete control over every aspect of operations."
    },

  ];
  const partners = [
    { name: 'Zapier', logo: '/images/clientLogo/Zapier-logo.png' },
    { name: 'Zapier', logo: '/images/clientLogo/client2.png' },
    { name: 'Slice', logo: '/images/clientLogo/client3.png' },
    { name: 'Zapier', logo: '/images/clientLogo/client4.png' },
    { name: 'Decode', logo: '/images/clientLogo/client5.png' },
    { name: 'Shopify', logo: '/images/clientLogo/client6.png' },
    { name: 'Zapier', logo: '/images/clientLogo/client7.png' },
    { name: 'Firebase', logo: '/images/clientLogo/client8.png' },
  ];
  const addToRefs = (el) => {
    if (el && !partnersRef.current.includes(el)) {
      partnersRef.current.push(el);
    }
  };

  useEffect(() => {
    const elements = partnersRef.current;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);
  return (
  <div className='cmn_Sectionpadding clientLogo_wrapper position-relative' ref={sectionRef}>
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-xxl-8 col-md-8 col-sm-12">
          <div className="feature-sections-container">
            {PartnersSection.map((section, index) => (
              <HeadSection key={index}
                title={section.title}
                description={section.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
     
      <div className="container">
        <div className="partnersLogo cmn_Heading_padding">
          <div className="row gy-3">
            {partners.map((partner, index) => (
              <div key={index} className="col-6 col-xxl-3 col-md-4 ">
                <div className="partners-grid" ref={addToRefs}>
                  <PartnersCard key={index}
                    logoSrc={partner.logo}
                    clientName={partner.name} />


                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Partners