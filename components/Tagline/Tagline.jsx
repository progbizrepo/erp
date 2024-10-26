import React from 'react'

const Tagline = ({ text, backgroundColor, icon ,color}) => {
    const TaglineStyle = {
        background: backgroundColor || 'linear-gradient(180deg, #B7FF33 0%, #DBFF99 100%)', 
        color: color || '#333333',                   
        padding: '6px 10px',
        border: 'none',
        borderRadius: '100px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        border:"1px solid #E6E9EE"
       
      };
   
    
      const iconStyle = {
        marginRight: '10px',
      };
  return (
    <span style={TaglineStyle}  > 
      {icon && <span style={iconStyle}>{icon}</span>}
      {text}
    </span>
  )
}

export default Tagline