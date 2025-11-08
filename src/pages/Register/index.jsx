import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnPrimary } from "@/components/UI/Buttons/BtnPrimary";
import styles from './Register.module.css';
import registerDog from '@/assets/images/register-Dog.png';

function Register() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Registrarse</h1>

        {/* PERRO ENCIMA DEL INPUT EMAIL */}
        <div className={styles.imageWrapper}>
          <img src={registerDog} alt="Perro" className={styles.dogImage} />
        </div>

        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />

        <BtnPrimary
          text="Registrarse"
          className={styles.registerButton}
          onClick={() => navigate('/inicio')}
        />

        <div className={styles.loginPrompt}>
          <span className={styles.linkText}>¿Ya tienes una cuenta?</span>
          <span
            className={styles.link}
            onClick={() => navigate('/login')}
          >
            Iniciar Sesión
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;