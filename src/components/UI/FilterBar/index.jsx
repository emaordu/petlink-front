import React from "react";
import styles from "./FilterBar.module.css";

const categories = [
  "Adopción",
  "Tránsito",
  "Alimentos/Donación",
  "Veterinaria",
  "Pérdidas/Encontrados",
];

const FilterBar = ({ onCategoryChange, onLocationChange, onKeywordChange, selectedCategory, keywordSearchTerm, locationSearchTerm }) => {
  return (
    <div className={styles.filterBar}>
      <select
        className={styles.selectInput}
        onChange={(e) => onCategoryChange(e.target.value)}
        value={selectedCategory}
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Filtrar por palabra clave..."
        className={styles.searchInput}
        value={keywordSearchTerm}
        onChange={(e) => onKeywordChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filtrar por ubicación..."
        className={styles.searchInput}
        value={locationSearchTerm}
        onChange={(e) => onLocationChange(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;