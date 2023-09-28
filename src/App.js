// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const App = () => {
  const favoritesCount = useSelector((state) => state.favorites.favorites.length);

  const productsData = [
    { id: 1, name: 'Sniper', description: 'Master sniper Brandon Beckett and the newly formed GRIT Global Response and Intelligence Team deploy to Malta to take down an international terrorist plot and rescue fellow agent Lady Death.'
    , image: '/img/sniper.jpg' },
    { id: 2, name: 'Hello', description: 'Master sniper Brandon Beckett and the newly formed GRIT Global Response and Intelligence Team deploy to Malta to take down an international terrorist plot and rescue fellow agent Lady Death.'
    , image: '/img/sniper.jpg' },
    { id: 3, name: 'ITI', description: 'Master sniper Brandon Beckett and the newly formed GRIT Global Response and Intelligence Team deploy to Malta to take down an international terrorist plot and rescue fellow agent Lady Death.'
    , image: '/img/sniper.jpg' },
    { id: 4, name: 'Task5', description: 'Master sniper Brandon Beckett and the newly formed GRIT Global Response and Intelligence Team deploy to Malta to take down an international terrorist plot and rescue fellow agent Lady Death.'
    , image: '/img/sniper.jpg' },
    { id: 5, name: 'Lorem', description: 'Master sniper Brandon Beckett and the newly formed GRIT Global Response and Intelligence Team deploy to Malta to take down an international terrorist plot and rescue fellow agent Lady Death.'
    , image: '/img/sniper.jpg' },
    { id: 6, name: 'G.R.I.T.', description: 'Master sniper Brandon Beckett and the newly formed GRIT Global Response and Intelligence Team deploy to Malta to take down an international terrorist plot and rescue fellow agent Lady Death.'
    , image: '/img/sniper.jpg' },
    
   


  
  ];

  return (
    <Router>
      <div>
  

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              {favoritesCount > 0 && <span>({favoritesCount})</span>}
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <hr />

        <Routes>
          <Route path="/" element={<div>
            <h2>Movies</h2>
            {productsData.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
