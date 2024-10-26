import React from 'react'
import styles from './Footer.module.css'

const AppDownloadButtons = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=your.app.id";
  const appStoreUrl = "https://apps.apple.com/app/your-app-id";
  return (
    <div className={styles.AppDownloadwrapper}>
      <p className={styles.headTitle}>Download our App</p>
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex   align-items-center  gap-3"
       >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13.5333 11.6782L16.8146 8.1626L4.08021 1.2876C4.00208 1.20947 3.84583 1.20947 3.61146 1.13135L13.5333 11.6782ZM18.2208 16.7563L22.8302 14.2563C23.3771 13.9438 23.6896 13.4751 23.6896 12.8501C23.6896 12.2251 23.3771 11.6782 22.8302 11.4438L18.2208 8.94385L14.549 12.8501L18.2208 16.7563ZM2.125 1.83551C1.89062 2.06989 1.8125 2.38239 1.8125 2.69489V23.0074C1.8125 23.3199 1.89062 23.6324 2.125 23.9449L12.4375 12.8501L2.125 1.83551ZM13.5333 14.022L3.61146 24.5688C3.76771 24.5688 3.92396 24.4907 4.08021 24.4126L16.8146 17.5376L13.5333 14.022Z" fill="white" />
        </svg>
        <div className="d-flex flex-column">
        <p >Get It On </p>
        <span >Google Play</span>
        </div>
  
      </a>
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex   align-items-center  gap-3"
       >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <g clipPath="url(#clip0_528_107257)">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.5896 4.34072C17.5 3.28447 18.1146 1.81364 17.9469 0.350098C16.6344 0.400098 15.0448 1.18864 14.1031 2.24385C13.2573 3.18031 12.5198 4.67614 12.7177 6.11156C14.1833 6.21989 15.6781 5.39906 16.5896 4.34072ZM19.875 13.6313C19.9114 17.4147 23.3375 18.673 23.375 18.6897C23.3479 18.7782 22.8281 20.4834 21.5708 22.2459C20.4823 23.7688 19.3541 25.2845 17.575 25.3168C15.8281 25.348 15.2656 24.3251 13.2677 24.3251C11.2708 24.3251 10.6458 25.2845 8.99268 25.348C7.27602 25.4095 5.96768 23.7011 4.87185 22.1834C2.63018 19.0793 0.916643 13.4126 3.21873 9.5876C4.36039 7.68864 6.40206 6.48551 8.61873 6.45531C10.3031 6.42406 11.8948 7.54176 12.925 7.54176C13.9552 7.54176 15.8896 6.19801 17.9219 6.39593C18.7719 6.42926 21.1614 6.72406 22.6948 8.8751C22.5698 8.94801 19.8437 10.4688 19.875 13.6313Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_528_107257">
      <rect width="25" height="25" fill="white" transform="translate(0.25 0.350098)"/>
    </clipPath>
  </defs>
</svg>
        <div className="d-flex flex-column">
        <p >Download on the</p>
        <span >App Store</span>
        </div>
  
      </a>
    </div>
  )
}

export default AppDownloadButtons 