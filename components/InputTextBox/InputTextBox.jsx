import React from 'react'
import styles from './Input.module.css'

const InputTextBox = ({ label, type = "text", placeholder, value, onChange}) => {
  return (
    <div className={styles.textBoxContainer}>
    {label && <label className={styles.label}>{label}</label>}
    <input
      className={styles.textBox}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
  )
}

export default InputTextBox