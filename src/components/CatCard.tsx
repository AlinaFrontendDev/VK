// src/components/CatCard.tsx
import React from "react";
import { Cat } from "../types/Cat";
import Like from "../assets/svg/like.svg";
import activeLike from "../assets/svg/like.svg";

interface CatCardProps {
  cat: Cat;
  isFavorite: boolean;
  onToggleFavorite: (cat: Cat) => void;
}

const CatCard: React.FC<CatCardProps> = ({
  cat,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="cat-item">
      <div className="image-wrapper">
        <img src={cat.url} alt="Cat" />
        <div
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(cat)}
        >
          <img src={Like} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CatCard;
