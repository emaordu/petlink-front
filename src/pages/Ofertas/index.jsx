import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";
import { useNavigate } from "react-router-dom";
import * as classes from "./Ofertas.module.css";

const mockItems = [
  {
    title: "Necesito cucha",
    description:
      "Adopté un perro adulto que dormía en la calle y está acostumbrado a estar afuera...",
    imageUrl:
      "https://images.unsplash.com/photo-1558944351-c6f56b7ff87a?w=600&auto=format&fit=crop",
    location: "Zárate",
    publishedAt: "5m",
  },
  {
    title: "Medicamento para galgo",
    description:
      "Encontramos un galgo con fractura y operaron de urgencia. Necesitamos cefalexina...",
    imageUrl:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&auto=format&fit=crop",
    location: "Campana",
    publishedAt: "9m",
  },
  {
    title: "Insumos para caballo",
    description:
      "Rescatamos un caballo que estaba inmovilizado; necesitamos vendas y gasas...",
    imageUrl:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop",
    location: "Portela",
    publishedAt: "7m",
  },
  {
    title: "Necesidad de alimentos",
    description:
      "Tengo 5 perros rescatados en casa y me estoy quedando sin alimento balanceado...",
    imageUrl:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop",
    location: "Baradero",
    publishedAt: "4m",
  },
  // Segunda página
  {
    title: "Collares y correas",
    description: "Busco donaciones de collares/correas para nueva camada",
    imageUrl:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop",
    location: "Alsina",
    publishedAt: "12m",
  },
  {
    title: "Turnos veterinarios",
    description: "Necesito colaboración para cubrir turnos de vacunas",
    imageUrl:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=600&auto=format&fit=crop",
    location: "Campana",
    publishedAt: "20m",
  },
  {
    title: "Transporte solidario",
    description: "¿Alguien con auto para trasladar a un perro?",
    imageUrl:
      "https://images.unsplash.com/photo-1517842182234-7b3fa3d1f3a1?w=600&auto=format&fit=crop",
    location: "Zárate",
    publishedAt: "30m",
  },
  {
    title: "Castraciones",
    description: "Sumate a la campaña de castración barrial",
    imageUrl:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=600&auto=format&fit=crop",
    location: "Baradero",
    publishedAt: "40m",
  },
];

function Ofertas() {
  const navigate = useNavigate();
  return (
    <PagesTemplate onNewPostClick={() => {}}>
      <main className={classes.page}>
        <h2 className={classes.title}>Ofertas</h2>
        <div className={classes.feedWrap}>
          <CardsFeed
            items={mockItems}
            onCardClick={(item) => navigate("/oferta-ampliada", { state: item })}
          />
        </div>
      </main>
    </PagesTemplate>
  );
}

export default Ofertas;