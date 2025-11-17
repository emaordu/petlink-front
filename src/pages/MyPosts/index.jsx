import React, { useState } from "react";
import PagesTemplate from "@/components/UI/PagesTemplate";
import { CardsFeed } from "@/components/UI/Cards";
import * as classes from "./MyPosts.module.css";
import { useNavigate } from "react-router-dom";
import { myPostsData } from "@/data/data";
import FilterBar from "@/components/UI/FilterBar";

function MyPosts() {
  const navigate = useNavigate();
  const [keywordSearchTerm, setKeywordSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");

  const handleCardClick = (post) => {
    navigate(`/mi-publicacion-ampliada/${post.id}`, { state: post });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLocationChange = (location) => {
    setLocationSearchTerm(location);
  };

  const handleKeywordChange = (keyword) => {
    setKeywordSearchTerm(keyword);
  };

  const filteredMyPosts = myPostsData.filter((post) => {
    const matchesKeyword =
      keywordSearchTerm === "" ||
      post.title.toLowerCase().includes(keywordSearchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(keywordSearchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || post.category === selectedCategory;

    const matchesLocation =
      locationSearchTerm === "" ||
      (post.location &&
        post.location.toLowerCase().includes(locationSearchTerm.toLowerCase()));

    return matchesKeyword && matchesCategory && matchesLocation;
  });

  return (
    <PagesTemplate>
      <main className={classes.page}>
        <h2 className={classes.title}>Mis Publicaciones</h2>
        <FilterBar
          onCategoryChange={handleCategoryChange}
          onLocationChange={handleLocationChange}
          onKeywordChange={handleKeywordChange}
          selectedCategory={selectedCategory}
          keywordSearchTerm={keywordSearchTerm}
          locationSearchTerm={locationSearchTerm}
        />
        <div className={classes.feedWrap}>
          <CardsFeed items={filteredMyPosts} onCardClick={handleCardClick} />
        </div>
      </main>
    </PagesTemplate>
  );
}

export default MyPosts;