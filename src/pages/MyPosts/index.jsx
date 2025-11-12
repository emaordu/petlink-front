import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";
import * as classes from "./MyPosts.module.css";
import { useNavigate } from "react-router-dom";
import { myPostsData } from "@/data/data";

function MyPosts() {
  const navigate = useNavigate();
  const handleCardClick = (post) => {
    navigate(`/mi-publicacion-ampliada/${post.id}`, { state: post });
  };
  return (
    <PagesTemplate>
      <main className={classes.page}>
        <h2 className={classes.title}>Mis Publicaciones</h2>
        <div className={classes.feedWrap}>
          <CardsFeed items={myPostsData} onCardClick={handleCardClick} />
        </div>
      </main>
    </PagesTemplate>
  );
}

export default MyPosts;