import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnLink } from "../../components/UI/Buttons/BtnLink";
import { CardMainpage } from "../../components/UI/CardMainpage";
import { PagesTemplate } from "../../components/UI/PagesTemplate";
import image12 from "../../assets/images/image-12.png";
import registerDog from "../../assets/images/register-Dog.png";
import styles from "./Inicio.module.css";

export const Inicio = () => {
  const navigate = useNavigate();

  // 1. Obtienes los datos del usuario
  const userData = {
    profilePic: "https://url-de-la-foto-del-usuario.com/img.png"
  };

  // 2. Creas la función para el menú
  const handleOpenMenu = () => {
    console.log("Abrir menú desplegable");
  };
  
  return (
    <PagesTemplate
      userImageUrl={userData.profilePic}
      onProfileClick={handleOpenMenu}
      onNewPostClick={() => navigate('/crear-inicio')}
    >
      {/* Contenido principal con enfoque mobile-first */}
      <main className={styles.contentGrid}>
        {/* Columna izquierda: Feed de cards */}
        <section className={styles.feedSection}>
          <h2 className={styles.feedHeader}>Ultimas ofertas/propuestas:</h2>
          <div className={styles.cardsList}>
            <CardMainpage
              text="Transito urgente para dos cachorros"
              text1="Rescatamos a dos hermanitos de aprox. 45 días. Necesitan un hogar temporal seguro por un mes mientras gestionamos sus vacunas y adopción. Son pequeños, no ocupan mucho espacio."
              text2="Alsina"
              text3="Publicado hace: 3m"
            />
            <CardMainpage
              text="Ofrezco transito para perro pequeño"
              text1="Tengo lugar en mi casa para un perrito en transito. Vivo sola, tengo patio pequeño cerrado y experiencia. No puedo con gatos."
              text2="Baradero"
              text3="Publicado hace: 4m"
            />
          </div>
          <div className={styles.notifications}>
            <span>Tienes nuevas notificaciones.</span>{' '}
            <BtnLink text="Hecha un vistazo." onClick={() => navigate('/crear-inicio')} />
          </div>
        </section>

        {/* Columna derecha: Paneles resumidos */}
        <aside className={styles.sidebar}>
          <div className={styles.panel}>
            <p className={styles.panelText}>Esta semana has contribuido a: 4 personas</p>
            <img className={styles.panelImage} alt="Perro" src={registerDog} />
          </div>
          <div className={styles.panel}>
            <p className={styles.panelText}>Estás entre los 200 donadores!</p>
            <img className={styles.panelImage} alt="Gato" src={image12} />
          </div>
        </aside>
      </main>
    </PagesTemplate>
  );
};
export default Inicio;