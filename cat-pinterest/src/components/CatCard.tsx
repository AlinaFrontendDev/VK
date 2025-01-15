// src/components/CatCard.tsx
import React from 'react';
import { Cat } from '../types/Cat';

interface CatCardProps {
  cat: Cat;
  isFavorite: boolean;
  onToggleFavorite: (cat: Cat) => void;
}

const CatCard: React.FC<CatCardProps> = ({ cat, isFavorite, onToggleFavorite }) => {
  return (
    <div className="cat-item">
      <div className="image-wrapper">
        <img src={cat.url} alt="Cat" />
        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(cat)}
        >
          ♥
        </button>
      </div>
    </div>
  );
};

export default CatCard;


