// components/Product.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/favoritesActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import '../products.css'; // Import your styles

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.some((favProduct) => favProduct.id === product.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} className="product-image" />
      <button onClick={handleToggleFavorite}>
        <FontAwesomeIcon icon={isFavorite ? faStar : farStar} color={isFavorite ? 'gold' : 'black'} />
      </button>
    </div>
  );
};

export default Product;
