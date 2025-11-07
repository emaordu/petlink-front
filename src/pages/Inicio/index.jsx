import React from "react";
import { Link } from "react-router-dom";
import { BtnLink } from "../../components/UI/Buttons/BtnLink";
import { BtnOfertas } from "../../components/UI/Buttons/BtnOfertas";
import { BtnPropuestas } from "../../components/UI/Buttons/BtnPropuestas";
import { CardMainpage } from "../../components/CardMainpage";
import { BtnNewPost } from "../../components/UI/Buttons/BtnNewPost";
import home from "../../assets/images/icons/home.png";
import image12 from "../../assets/images/image-12.png";
import registerDog from "../../assets/images/register-Dog.png";
import styles from "./Inicio.module.css"; 

export const Inicio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgTemplate}>
        <div className={styles.navBar}>

          <div className={styles.textWrapper2}>Mis Chats</div>

          <div className={styles.home}>
            <Link to="/inicio">
              <img className={styles.img} alt="Home" src={home} />
            </Link>
          </div>

          <BtnPropuestas className={styles.btnPropuestasInstance} />
          <BtnOfertas className={styles.btnOfertasInstance} />
        </div>

        <BtnNewPost className={styles.BtnNewPostInstance} />
      </div>

      <div className={styles.textWrapper3}>Bienvenido a PetLink #username!</div>

      <div className={styles.cantContribuido}>
        <div className={styles.rectangle} />

        <img
          className={styles.imagen}
          alt="Imagen"
          src={registerDog}
        />

        <p className={styles.p}>Esta semana has contribuido a: 4 personas</p>
      </div>

      <div className={styles.topDonator}>
        <div className={styles.rectangle} />

        <div className={styles.estSEntreLos}>
          Estás entre los
          <br />
          200 donadores!
        </div>

        <img className={styles.image2} alt="Image" src={image12} />
      </div>

      <div className={styles.group}>
        <div className={styles.textWrapper4}>Tienes nuevas notificaciones.</div>
      </div>

      <div className={styles.group2}>
        <div className={styles.rectangle2} />

        <CardMainpage
          className={styles.cardMainpageInstance}
          divClassName={styles.designComponentInstanceNode}
          image="image.png"
          text="Transito urgente para dos cachorros"
          text1="Rescatamos a dos hermanitos de aprox. 45 días. Necesitan un hogar temporal seguro por un mes mientras gestionamos sus vacunas y adopción. Son pequeños, no ocupan mucho espacio."
          text2="Alsina"
          text3="Publicado hace: 3m"
        />
        <CardMainpage
          className={styles.component}
          divClassName={styles.designComponentInstanceNode}
          image="image-14-2.png"
          text="Ofrezco transito para perro pequeño"
          text1="Tengo lugar en mi casa para un perrito en transito. Vivo sola, tengo patio pequeño cerrado y experiencia. No puedo con gatos."
          text2="Baradero"
          text3="Publicado hace: 4m"
        />
        <div className={styles.textWrapper5}>Ultimas ofertas/propuestas:</div>
      </div>

      <BtnLink
        className={styles.btnLinkInstance}
        divClassName={styles.btnLink2}
        text="Hecha un vistazo."
        onClick={() => navigate("/crear-inicio")}
      />
    </div>
  );
};
export default Inicio;