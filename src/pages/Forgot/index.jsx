import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnPrimary } from '../../components/UI/Buttons/BtnPrimary';
import styles from './Forgot.module.css';

function Forgot() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Restaurar Contraseña</h1>

        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="New Password" className={styles.input} />
        <input type="password" placeholder="Confirm Password" className={styles.input} />

        <BtnPrimary
          text="Confirmar"
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  );
}

export default Forgot;