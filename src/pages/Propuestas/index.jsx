import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";
import { useNavigate } from "react-router-dom";
import * as classes from "./Propuestas.module.css";
import { propuestasData } from '@/data/data';

const mockItems = propuestasData;

function Propuestas() {
  const navigate = useNavigate();
  return (
    <PagesTemplate onNewPostClick={() => {}}>
      <main className={classes.page}>
        <h2 className={classes.title}>Propuestas</h2>
        <div className={classes.feedWrap}>
          <CardsFeed
            items={mockItems}
            onCardClick={(item) => navigate(`/propuesta-ampliada/${item.id}`, { state: item })}
          />
        </div>
      </main>
    </PagesTemplate>
  );
}

export default Propuestas;