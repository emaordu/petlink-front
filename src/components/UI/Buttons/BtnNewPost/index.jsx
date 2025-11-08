import React from 'react';
import styles from './BtnNewPost.module.css';

function BtnNewPost({ className, onClick, label = '+' }) {
  return (
    <button
      className={`${styles.container} ${className || ''}`}
      onClick={onClick}
      aria-label="Nueva publicación"
    >
      <span className={styles.icon}>{label}</span>
    </button>
  );
}

export default BtnNewPost;