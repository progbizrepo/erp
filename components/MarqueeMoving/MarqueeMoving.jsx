"use client";
import React from 'react'
import styles from './style.module.css';
import Marquee from "react-fast-marquee";
const MarqueeMoving = () => {
  
    return (
        <>   
         <div className={styles.marqueeContainer}>
      <h2 className={styles.title}>Our Top Notch Features</h2>
      <Marquee gradient={true} speed={30} pauseOnHover={true} className={styles.Marqueebg}>
        <div className={styles.marqueeItem}>Real-time Collaboration</div>
        <div className={styles.marqueeItem}>Custom Dashboards</div>
        <div className={styles.marqueeItem}>Advanced Analytics</div>
        <div className={styles.marqueeItem}>Team Scheduling</div>
        <div className={styles.marqueeItem}>Real-time Collaboration</div> {/* Repeating items */}
        <div className={styles.marqueeItem}>Custom Dashboards</div>
        <div className={styles.marqueeItem}>Advanced Analytics</div>
        <div className={styles.marqueeItem}>Team Scheduling</div>
      </Marquee>
    </div>
        </>
    )
}



const MarqueeItem = ({ icon: Icon, text, backgroundColor = 'bg-blue-100' }) => (
  <div className={`flex items-center gap-2 px-4 py-2 mx-2 ${backgroundColor} rounded-lg`}>
    <Icon className="w-5 h-5" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);
// export default MarqueeMoving
const CustomMarquee = ({ 
  speed = 50, 
  pauseOnHover = true,
  borderRadius = 'rounded-xl',
  backgroundColor = 'bg-gray-50' 
}) => {
  const items = [
    { icon: "Shield", text: "Secure Platform" },
    { icon: "Mail", text: "24/7 Support" },
    { icon: "Phone", text: "Call Us Anytime" },
    { icon: "MessageSquare", text: "Live Chat" },
    { icon: "Calendar", text: "Schedule Meeting" },
    { icon: "Bell", text: "Get Notifications" }
  ];

  return (
    <div className={`w-full overflow-hidden ${borderRadius} ${backgroundColor} p-4`}>
      <Marquee
        speed={speed}
        pauseOnHover={pauseOnHover}
        gradient={false}
      >
        {items.map((item, index) => (
          <MarqueeItem
            key={index}
            icon={item.icon}
            text={item.text}
            backgroundColor={index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeMoving;