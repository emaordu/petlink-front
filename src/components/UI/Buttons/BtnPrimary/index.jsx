import React from 'react';
import styles from './BtnPrimary.module.css';

export function BtnPrimary({ className = '', divClassName, text, onClick, size = 'md' }) {
  const sizeClass = size === 'sm' ? styles.sm : '';
  const labelClass = divClassName || (size === 'sm' ? styles.labelSm : styles.label);
  return (
    <button className={`${styles.btnPrimary} ${sizeClass} ${className}`} onClick={onClick}>
      <span className={labelClass}>{text}</span>
    </button>
  );
}


