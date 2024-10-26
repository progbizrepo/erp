import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null); // Reference to the scroll container
  const locomotiveScrollRef = useRef(null); // Reference to the LocomotiveScroll instance

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true, // Optional: if you want smooth scrolling on mobile
      });

      // Update locomotive on page resize
      window.addEventListener('resize', () => {
        locomotiveScrollRef.current.update();
      });

      // Clean up on component unmount
      return () => {
        if (locomotiveScrollRef.current) locomotiveScrollRef.current.destroy();
      };
    }
  }, []);

  return { scrollRef };
};
