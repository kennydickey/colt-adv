import React from 'react';
// import logo from './logo.svg';
// import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList'
import './RecipeApp.css';

function RecipeApp() {
  return (
      <div className="App">
        <Navbar />
        <RecipeList />
        {/* <Recipe 
        title="Cookies" 
        ingredients={['flour', 'water']}
        instructions="mix ingredients"
        img="MM-Cookies-3.jpg"
        /> */}
      </div>
  );
}

export default RecipeApp;
