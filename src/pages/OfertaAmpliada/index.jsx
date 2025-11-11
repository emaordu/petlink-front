import React from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { PostContainer } from "@/components/UI/PostContainer";
import { BtnPrimary, BtnDanger } from "@/components/UI/Buttons";
import { useLocation } from "react-router-dom";
import { useToast } from "@/components/UI/Toast";
import * as classes from "./OfertaAmpliada.module.css";

function OfertaAmpliada() {
  const locationData = useLocation();
  const { showToast } = useToast();
  const post = locationData.state || {};

  return (
    <PagesTemplate showNewPost={false}>
      <main className={classes.page}>
        <div className={classes.contentWrap}>
          <PostContainer
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            location={post.location}
            publishedAt={post.publishedAt}
          />
          <div className={classes.actionsWrap}>
            <div className={classes.leftAction}>
              <BtnPrimary
                text="Me Interesa"
                className={classes.primaryBtn}
                divClassName={classes.primaryBtnLabel}
                size="sm"
                onClick={() =>
                  showToast("Has marcado 'Me interesa' a esta propuesta.")
                }
              />
            </div>
            <div className={classes.rightAction}>
              <BtnDanger
                text="Reportar"
                className={classes.dangerBtn}
                divClassName={classes.dangerBtnLabel}
                size="sm"
                onClick={() => showToast("Has reportado esta publicación.")}
              />
            </div>
          </div>
        </div>
      </main>
    </PagesTemplate>
  );
}

export default OfertaAmpliada;
