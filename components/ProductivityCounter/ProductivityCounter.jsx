import React, { useEffect, useRef } from 'react'
import CountUp from "react-countup";
import styles from "./style.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ProductivityCounter = () => {
    const counterData = [
        {
            endValue: 50,
            suffix: '%',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g >
                        <g >
                            <path d="M16 22.4154V9.58203" stroke="black" />
                            <path d="M9.58594 15.9987L16.0026 9.58203L22.4192 15.9987" stroke="black" />
                        </g>
                    </g>

                </svg>

            ),
            description: 'More productivity'
        },
        {
            endValue: 2,
            suffix: 'X',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_528_255638)">
                        <mask id="mask0_528_255638" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                            <path d="M32 0H0V32H32V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_528_255638)">
                            <path d="M16 14V21.3333" stroke="black" />
                            <path d="M17.6667 15.332H15.1667C14.8572 15.332 14.5605 15.4549 14.3417 15.6737C14.1229 15.8925 14 16.1892 14 16.4986C14 16.8081 14.1229 17.1048 14.3417 17.3236C14.5605 17.5424 14.8572 17.6653 15.1667 17.6653H16.8333C17.1428 17.6653 17.4395 17.7882 17.6583 18.007C17.8771 18.2258 18 18.5226 18 18.832C18 19.1414 17.8771 19.4381 17.6583 19.6569C17.4395 19.8757 17.1428 19.9986 16.8333 19.9986H14" stroke="black" />
                            <path d="M17.8308 6.83203H10.4974C10.0112 6.83203 9.54485 7.02519 9.20103 7.369C8.85722 7.71282 8.66406 8.17914 8.66406 8.66537V23.3321C8.66406 23.8183 8.85722 24.2846 9.20103 24.6284C9.54485 24.9723 10.0112 25.1654 10.4974 25.1654H21.4974C21.9837 25.1654 22.45 24.9723 22.7938 24.6284C23.1376 24.2846 23.3308 23.8183 23.3308 23.3321V12.3321L17.8308 6.83203Z" stroke="black" />
                            <path d="M18 7V12.3333H23.3335" stroke="black" />
                        </g>
                    </g>
                    <defs>

                    </defs>
                </svg>
            ),
            description: 'Quicker Project Completion'
        },
        {
            endValue: 70,
            suffix: '%',
            icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_528_255649)">
                    <g clipPath="url(#clip1_528_255649)">
                        <path d="M23.9984 15.9985L25.2343 9.18139L18.7126 11.5196L23.9984 15.9985ZM23.2876 20.5622C23.4634 20.2814 23.3783 19.9111 23.0974 19.7353C22.8166 19.5594 22.4463 19.6446 22.2705 19.9254L23.2876 20.5622ZM22.6394 10.5343C22.5903 10.4746 22.5403 10.4156 22.4895 10.3571L21.5838 11.1443C21.6275 11.1946 21.6705 11.2454 21.7127 11.2967L22.6394 10.5343ZM22.4895 10.3571C21.1296 8.79227 19.2501 7.7714 17.1972 7.48242L17.0299 8.6707C18.7964 8.91937 20.4136 9.79778 21.5838 11.1443L22.4895 10.3571ZM17.1972 7.48242C15.1442 7.19343 13.056 7.65578 11.3169 8.78434L11.9701 9.79096C13.4666 8.81988 15.2634 8.42204 17.0299 8.6707L17.1972 7.48242ZM11.3169 8.78434C9.57784 9.9129 8.30496 11.6317 7.73264 13.6244L8.886 13.9556C9.37847 12.2411 10.4737 10.7621 11.9701 9.79096L11.3169 8.78434ZM7.73264 13.6244C7.16031 15.617 7.32706 17.7493 8.20219 19.6287L9.29004 19.1222C8.53702 17.505 8.39354 15.6702 8.886 13.9556L7.73264 13.6244ZM8.20219 19.6287C9.07732 21.5081 10.6019 23.0082 12.4953 23.8527L12.9841 22.7567C11.3549 22.0301 10.043 20.7394 9.29004 19.1222L8.20219 19.6287ZM12.4953 23.8527C14.3887 24.6972 16.5234 24.8293 18.5064 24.2247L18.1565 23.0768C16.4501 23.5971 14.6133 23.4834 12.9841 22.7567L12.4953 23.8527ZM18.5064 24.2247C20.4895 23.6201 22.1874 22.3194 23.2876 20.5622L22.2705 19.9254C21.3238 21.4374 19.8628 22.5566 18.1565 23.0768L18.5064 24.2247Z" fill="black" />
                        <path d="M15.5 12.5V17H19.5" />
                    </g>
                </g>
                <defs>

                </defs>
            </svg>
            ),
            description: 'Less Manual Data Entry'
        }
    ];
    const counterBoxesRef = useRef([]);
    const sectionRef = useRef(null);
    useEffect(() => {
        const counterBoxes = counterBoxesRef.current;
        const section = sectionRef.current;

        gsap.fromTo(counterBoxes, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom-=100',
                    end: 'bottom top+=100',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.productiveCounter} ref={sectionRef} data-scroll data-scroll-speed="0.1">
            <div className="container">
                <div className={styles.feactures}>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={styles.title}>
                                <h1>Do More with Less Effort</h1>
                            </div>
                        </div>


                        {counterData.map((item, index) => (
                            <div className="col col-sm-12 col-md-6 col-lg-3 col-xxl-3" key={index}>
                                <section className={styles.counterBox}   ref={el => counterBoxesRef.current[index] = el}>
                                    <h3>
                                        <CountUp start={0} end={item.endValue} duration={2.5} />
                                        {item.suffix}
                                    </h3>

                                    <div className={styles.CounterDesc}>
                                        <span className={styles.icon}>{item.icon}</span>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className={styles.diver}></div>
                                </section>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductivityCounter;
