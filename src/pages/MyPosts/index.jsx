import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";

const mockMyPosts = [
  {
    title: "Mi publicación: donación de mantas",
    description: "Tengo mantas en buen estado para refugio local.",
    imageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600&auto=format&fit=crop",
    location: "Baradero",
    publishedAt: "2h",
  },
  {
    title: "Mi publicación: traslado",
    description: "Puedo ayudar con traslado dentro de la ciudad.",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&auto=format&fit=crop",
    location: "Zárate",
    publishedAt: "3h",
  },
  {
    title: "Mi publicación: alimento",
    description: "Dono 10kg de alimento balanceado.",
    imageUrl:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop",
    location: "Alsina",
    publishedAt: "5h",
  },
  {
    title: "Mi publicación: juguetes",
    description: "Varios juguetes en buen estado.",
    imageUrl:
      "https://images.unsplash.com/photo-1548192748-3f2b9c0b3c48?w=600&auto=format&fit=crop",
    location: "Campana",
    publishedAt: "6h",
  },
];

function MyPosts() {
  return (
    <PagesTemplate>
      <h2 style={{ margin: "8px 16px", color: "var(--textprimary)" }}>Mis Publicaciones</h2>
      <CardsFeed items={mockMyPosts} />
    </PagesTemplate>
  );
}

export default MyPosts;