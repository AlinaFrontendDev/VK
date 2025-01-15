import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from '../components/CatCard';
import { Cat } from '../types/Cat';

interface AllCatsPageProps {
  favorites: Cat[];
  onToggleFavorite: (cat: Cat) => void;
}

const AllCatsPage: React.FC<AllCatsPageProps> = ({ favorites, onToggleFavorite }) => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    try {
      const response = await axios.get<Cat[]>('https://api.thecatapi.com/v1/images/search?limit=10');
      setCats((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="cat-grid">
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
          isFavorite={favorites.some((fav) => fav.id === cat.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
      <button onClick={fetchCats}>Загрузить больше</button>
    </div>
  );
};

export default AllCatsPage;
