import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";
import { useNavigate } from "react-router-dom";
import * as classes from "./Propuestas.module.css";

// Dataset clonado de Ofertas (estructura y estilo)
const mockItems = [
  {
    title: "Ofrezco transito por 2 semanas",
    description:
      "Tengo disponibilidad para alojar un perro mediano. Patio cerrado, experiencia previa con tránsito.",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    location: "Campana",
    publishedAt: "6m",
  },
  {
    title: "Puedo trasladar a clínica",
    description:
      "Tengo auto y disponibilidad por las tardes. Puedo ayudar con traslados a veterinario.",
    imageUrl:
      "https://images.unsplash.com/photo-1517842182234-7b3fa3d1f3a1?w=600&auto=format&fit=crop",
    location: "Zárate",
    publishedAt: "10m",
  },
  {
    title: "Donación de alimento",
    description:
      "Dispongo de bolsas de balanceado (10kg). Coordinamos punto de encuentro.",
    imageUrl:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop",
    location: "Baradero",
    publishedAt: "12m",
  },
  {
    title: "Refugio temporal",
    description:
      "Puedo hospedar un gato por una semana. Entorno tranquilo, sin otras mascotas.",
    imageUrl:
      "https://images.unsplash.com/photo-1558944351-c6f56b7ff87a?w=600&auto=format&fit=crop",
    location: "Alsina",
    publishedAt: "15m",
  },
  // Segunda página
  {
    title: "Corte de uñas gratis",
    description: "Ofrezco corte de uñas a perros/gatos en plaza los sábados.",
    imageUrl:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=600&auto=format&fit=crop",
    location: "Portela",
    publishedAt: "22m",
  },
  {
    title: "Clases básicas de obediencia",
    description: "Ayudo con comandos básicos para perros adoptados recientemente.",
    imageUrl:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop",
    location: "Campana",
    publishedAt: "27m",
  },
  {
    title: "Traslado interurbano",
    description: "Viajo a Baradero mañana, puedo llevar un animal si es necesario.",
    imageUrl:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=600&auto=format&fit=crop",
    location: "Baradero",
    publishedAt: "35m",
  },
  {
    title: "Asesoramiento de cuidados",
    description: "Brindo asesoría virtual sobre cuidados postoperatorios.",
    imageUrl:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop",
    location: "Zárate",
    publishedAt: "41m",
  },
];

function Propuestas() {
  const navigate = useNavigate();
  return (
    <PagesTemplate onNewPostClick={() => {}}>
      <main className={classes.page}>
        <h2 className={classes.title}>Propuestas</h2>
        <div className={classes.feedWrap}>
          <CardsFeed
            items={mockItems}
            onCardClick={(item) => navigate("/propuesta-ampliada", { state: item })}
          />
        </div>
      </main>
    </PagesTemplate>
  );
}

export default Propuestas;