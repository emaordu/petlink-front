import React from 'react';
import styles from './BtnPrimary.module.css';

export function BtnPrimary({ className = '', divClassName, text, onClick, size = 'md' }) {
  const sizeClass = size === 'sm' ? styles.sm : '';
  return (
    <button className={`${styles.btnPrimary} ${sizeClass} ${className}`} onClick={onClick}>
      <span className={divClassName}>{text}</span>
    </button>
  );
}


