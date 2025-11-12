import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";
import { useNavigate } from "react-router-dom";
import * as classes from "./Ofertas.module.css";
import { ofertasData } from '@/data/data';

const mockItems = ofertasData;

function Ofertas() {
  const navigate = useNavigate();
  return (
    <PagesTemplate onNewPostClick={() => {}}>
      <main className={classes.page}>
        <h2 className={classes.title}>Ofertas</h2>
        <div className={classes.feedWrap}>
          <CardsFeed
            items={mockItems}
            onCardClick={(item) => navigate(`/oferta-ampliada/${item.id}`, { state: item })}
          />
        </div>
      </main>
    </PagesTemplate>
  );
}

export default Ofertas;