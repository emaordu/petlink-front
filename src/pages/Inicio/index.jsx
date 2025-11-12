import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { BtnLink } from "@/components/UI/Buttons/BtnLink";
import { FeedCard } from "@/components/UI/Cards";
import PagesTemplate from "@/components/UI/PagesTemplate";
import badgeCat from "@/assets/images/badge-Cat.png";
import registerDog from "@/assets/images/register-Dog.png";
import styles from "./Inicio.module.css";
import ContributionPanel from "@/components/UI/Community/ContributionPanel";
import DonatorPanel from "@/components/UI/Community/DonatorPanel";
import { ofertasData, propuestasData } from '@/data/data';

const Inicio = () => {
  const navigate = useNavigate();

  const userData = {
    profilePic: "https://url-de-la-foto-del-usuario.com/img.png" /*mock por el momento*/
  };

  const handleOpenMenu = () => {
    console.log("Abrir menú desplegable");
  };

  const latestPropuesta = propuestasData.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  })[0];

  const latestOferta = ofertasData.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  })[0];

  return (
    <PagesTemplate
      userImageUrl={userData.profilePic}
      onProfileClick={handleOpenMenu}
      onNewPostClick={(tipo) => navigate(tipo === 'propuesta' ? '/crear-propuesta' : '/crear-oferta')}
    >
      <main className={styles.contentGrid}>
        <section className={styles.feedSection}>
          <h2 className={styles.feedHeader}>Últimas ofertas/propuestas:</h2>
          <div className={styles.cardsList}>
            <h3 className={styles.cardTitle}>Última Propuesta:</h3>
            {latestPropuesta && (
              <Link to={`/propuesta-ampliada/${latestPropuesta.id}`} state={latestPropuesta} className={styles.cardLink}>
                <FeedCard
                  title={latestPropuesta.title}
                  description={latestPropuesta.description}
                  imageUrl={latestPropuesta.imageUrl}
                  location={latestPropuesta.location}
                  publishedAt={latestPropuesta.publishedAt}
                />
              </Link>
            )}

            <h3 className={styles.cardTitle}>Última Oferta:</h3>
            {latestOferta && (
              <Link to={`/oferta-ampliada/${latestOferta.id}`} state={latestOferta} className={styles.cardLink}>
                <FeedCard
                  title={latestOferta.title}
                  description={latestOferta.description}
                  imageUrl={latestOferta.imageUrl}
                  location={latestOferta.location}
                  publishedAt={latestOferta.publishedAt}
                />
              </Link>
            )}
          </div>
          <div className={styles.notifications}>
            <span className={styles.notificationText}>Tienes nuevas notificaciones.</span>
            <BtnLink className={styles.notificationAction} text="Echa un vistazo." onClick={() => navigate('/inicio')} />
          </div>
        </section>

        <aside className={styles.sidebar}>
          <ContributionPanel contributionsCount={4} imageUrl={registerDog} />
          <DonatorPanel donorsTotal={200} imageUrl={badgeCat} />
        </aside>
      </main>
    </PagesTemplate>
  );
};

export default Inicio;