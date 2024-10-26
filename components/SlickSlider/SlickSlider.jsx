import React from 'react'
import Slider from "react-slick";
import styles from './SlickSlider.module.css'
const SlickSlider = () => {
    const settings = {
        dots: false,
    infinite: true,               // Loop infinitely
    speed: 10000,                 // Higher speed for smooth scrolling
    slidesToShow: 4,              // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,               // Enable autoplay
    autoplaySpeed: 0,             // 0 means no delay between scrolls
    cssEase: "linear",            // Continuous linear scrolling effect
    pauseOnHover: true,           // Pause the auto-scroll when hovered
    variableWidth: true,
        responsive: [
          {
            breakpoint: 1024, // Adjust for mobile view
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600, // Adjust for smaller devices
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const features = [
        { icon: "🔗", label: "Real-time Collaboration" },
        { icon: "📊", label: "Custom Dashboards" },
        { icon: "📈", label: "Advanced Analytics" },
        { icon: "📅", label: "Team Scheduling" },
        { icon: "🔗", label: "Real-time Collaboration" },
        { icon: "📊", label: "Custom Dashboards" },
        { icon: "📈", label: "Advanced Analytics" },
        { icon: "📅", label: "Team Scheduling" },
        { icon: "🔗", label: "Real-time Collaboration" },
        { icon: "📊", label: "Custom Dashboards" },
        { icon: "📈", label: "Advanced Analytics" },
        { icon: "📅", label: "Team Scheduling" },
      ];
  return (
    <div className={styles.marqueeContainer}>
      <h2 className={styles.title}>Our Top Notch Features</h2>
    <div className={styles.Marqueebg}>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="slider-container">
            <div className={styles.marqueeItem}>
                   {/* <span className="icon">{feature.icon}</span> */}
            <p>{feature.label}</p>
            </div>
         
          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default SlickSlider