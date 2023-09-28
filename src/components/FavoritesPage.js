// components/FavoritesPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../actions/favoritesActions';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => handleRemoveFromFavorites(product.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
