'use client';
import React from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import Tagline from '../Tagline/Tagline';
import Button from '../Button/Button';
import Marquee from '../MarqueeMoving/MarqueeMoving';
import SlickSlider from '../SlickSlider/SlickSlider';



const HeroBackground = () => {

  return (
    <>
      {/* <Image
        src="/images/hero/heroshadow.png"
        alt="Hero Image"
        width={800}
        height={500}
        className={styles.ShadowImages}
        priority
      /> */}
      <div className={styles.backgroundSection}>
        <div className={styles.overlay}>
          {/* <div className={styles.floatingCard} >
            <div className={styles.flotcard1}>
              <Image
                src="/images/hero/floatCard1.png"
                alt="Hero Image"
                width={270}
                height={220}
                priority
              />
            </div>

            <div className={styles.flotcard2}>
              <Image
                src="/images/hero/floatCard2.png"
                alt="Hero Image"
                width={250}
                height={128}

                priority
              />
            </div>

          </div> */}
          <div className="container">


            <div className="content">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-xxl-8">
                  <span className="tagline" ><Tagline text="SOFTWARE FOR SOLAR"

                    color="#191919" /></span>
                  <h1 className={styles.Heroh1} data-scroll data-scroll-speed="0.2">Complete Your Solar Projects On Time and Within Budget</h1>
                  <p className={styles.HeroPara} data-scroll data-scroll-speed="0.3">
                    Take control of your solar projects from lead to delivery with Progbiz ERP.
                  </p>

                  <Button text="Book a Demo" />
                </div>
              </div>
              <Marquee />
              {/* <SlickSlider/> */}
            </div>

          </div>
          {/* <div className={styles.floatingCard} >
            <div className={styles.flotcard3}>
              <Image
                src="/images/hero/floatCard3.png"
                alt="Hero Image"
                width={300}
                height={230}
                className={styles.ShadowImages}
                priority
              />
            </div>

            <div className={styles.flotcard4}>
              <Image
                src="/images/hero/floatCard4.png"
                alt="Hero Image"
                width={300}
                height={88}
                className={styles.ShadowImages}
                priority
              />
            </div>

          </div> */}
        </div>

        <div className="floatingcard">




        </div>
      </div>
    </>
  )
}

export default HeroBackground
