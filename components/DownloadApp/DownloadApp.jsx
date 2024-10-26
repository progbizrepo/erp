import React from 'react'
import MarqueeMoving from '../MarqueeMoving/MarqueeMoving'
import styles from './DownloadApp.module.css'
import HeadSection from '../HeadSection/HeadSection';
// import pbdashbord from '../images/dashBoard/pbdashbord.png'

import Button from '../Button/Button';
import Image from 'next/image';
const DownloadApp = () => {
  const HeadSections = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
        <path d="M7.12341 1.99854H13.8734L9.74841 7.24854H15.3734L6.37341 16.9985L8.24841 9.87354H2.99841L7.12341 1.99854Z" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>),
      title: "Go Beyond with Powerful Integrations",
      description: "Our advanced ERP software integrates smoothly with your website, financial systems, and third-party tools, ensuring quicker project delivery and improved closing rates."
    },

  ];
  return (
    <div className='cmn_Sectionpadding'>
      <div className="container">
        <MarqueeMoving />

        <div className="downloadApp cmn_Heading_padding">
          <div className={styles.downloadSectionWrapper}>
            <div className="row gy-3">
              <div className="col-lg-6 col-sm-12">
                <div className="row ">
                  <div className="col-xxl-12 col-md-12 col-sm-12">
                    <div className="feature-sections-container ">
                      {HeadSections.map((section, index) => (
                        <HeadSection key={index}
                          title={section.title}
                          description={section.description}
                          textAlign="left"
                          color='#FFFFFF'
                          ParaColor='#999999'
                        />
                      ))}
                      <Button text="Book a Demo"
                        backgroundColor="#B8FF33"
                        color="#191919"
                        className='mt-3'
                      />
                    </div>
                  </div>
               
                </div>

              </div>
              <div className="col-md-6 col-xxl-6 position-relative">
                  <div className={styles.imageWrapper}>
                  <Image
                    src="/images/dashBoard/PBdashboard.png" 
                    alt="ERP Dashboard Preview"
                    layout="responsive"
                    width={800} 
                    height={450} 
                 
                    className={styles.dashboardImage}
                  />
                </div>
                  </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp