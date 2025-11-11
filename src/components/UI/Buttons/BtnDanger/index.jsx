import React from 'react';
import styles from './BtnDanger.module.css';

export function BtnDanger({ className = '', text = 'Reportar', onClick, size = 'md', divClassName }) {
  const sizeClass = size === 'sm' ? styles.sm : '';
  const defaultLabel = size === 'sm' ? styles.labelSm : styles.label;
  const labelClass = divClassName || defaultLabel;
  return (
    <button className={`${styles.btnDanger} ${sizeClass} ${className}`} onClick={onClick} type="button">
      <span className={labelClass}>{text}</span>
    </button>
  );
}