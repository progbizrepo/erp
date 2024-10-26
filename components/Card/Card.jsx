import React from 'react';
import Image from 'next/image';
import styles from "./Card.style.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="CardComponent">
      <span className='icon'>
        {/* <Image
          src={icon}
          alt={`${title} icon`}
          width={24}
          height={24}
        /> */}
        {
           icon 
        }
      </span>
      <div className="CardComponentBody">
        <h4 className='heading'>{title}</h4>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;