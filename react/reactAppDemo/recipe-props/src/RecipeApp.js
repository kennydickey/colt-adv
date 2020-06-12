import React from 'react';
// import logo from './logo.svg';
import Recipe from './Recipe'
import './RecipeApp.css';

function RecipeApp() {
  return (
    <div className="App">
      <Recipe 
      title="pasta" 
      ingredients={['flour', 'water']}
      instructions="mix ingredients"
      img="MM-Cookies-3.jpg"
      />
    </div>
  );
}

export default RecipeApp;
