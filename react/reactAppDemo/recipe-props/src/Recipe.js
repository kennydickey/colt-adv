import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css'

class Recipe extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      instructions: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
  }
  render() {
    const {title, img, instructions} = this.props; //destructuring used to create a const called title that is this.props.title 
    const ingredients = this.props.ingredients.map((ing, index) => (
      //no {} or return needed for es6
      //parens here to wrap statement, works without. jsx standard?
      <li key={index}>{ing}</li>
    ));
     // () is needed to wrap statement so that js will not place an auto semicolon until after the statement
    return (
    <div className="recipe-card">

      <div className="recipe-card-img">
        <img src={img} alt={title}/>
      </div>
      <div className = "recipe-card-content">
        <h3 className="recipe-title">{title/*this.props.title*/}</h3>
        <h4>Ingredients</h4>
        <ul>
          {ingredients}
        </ul>
        <h4>Instructions</h4>
        <p>{instructions}</p>
      </div>

    </div> //can never wrap multiple jsx elems next to eachother so have to wrap all in a div
    );
  }
}


export default Recipe;