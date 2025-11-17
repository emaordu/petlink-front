import React, { useState } from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";
import { useNavigate } from "react-router-dom";
import * as classes from "./Ofertas.module.css";
import { ofertasData } from "@/data/data";
import FilterBar from "@/components/UI/FilterBar";

const mockItems = ofertasData;

function Ofertas() {
  const navigate = useNavigate();
  const [keywordSearchTerm, setKeywordSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLocationChange = (location) => {
    setLocationSearchTerm(location);
  };

  const handleKeywordChange = (keyword) => {
    setKeywordSearchTerm(keyword);
  };

  const filteredOfertas = ofertasData.filter((oferta) => {
    const matchesKeyword =
      keywordSearchTerm === "" ||
      oferta.title.toLowerCase().includes(keywordSearchTerm.toLowerCase()) ||
      oferta.description.toLowerCase().includes(keywordSearchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || oferta.category === selectedCategory;

    const matchesLocation =
      locationSearchTerm === "" ||
      (oferta.location &&
        oferta.location.toLowerCase().includes(locationSearchTerm.toLowerCase()));

    return matchesKeyword && matchesCategory && matchesLocation;
  });

  return (
    <PagesTemplate onNewPostClick={() => {}}>
      <main className={classes.page}>
        <h2 className={classes.title}>Ofertas</h2>
        <FilterBar
          onCategoryChange={handleCategoryChange}
          onLocationChange={handleLocationChange}
          onKeywordChange={handleKeywordChange}
          selectedCategory={selectedCategory}
          keywordSearchTerm={keywordSearchTerm}
          locationSearchTerm={locationSearchTerm}
        />
        <div className={classes.feedWrap}>
          <CardsFeed
            items={filteredOfertas}
            onCardClick={(item) => navigate(`/oferta-ampliada/${item.id}`, { state: item })}
          />
        </div>
      </main>
    </PagesTemplate>
  );
}

export default Ofertas;