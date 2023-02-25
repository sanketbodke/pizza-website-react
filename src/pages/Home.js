import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>Pedro's Pizzas</h1>
        <p>Pizza.......</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
