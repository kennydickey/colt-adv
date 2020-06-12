import React, {Component} from 'react';

class Recipe extends Component {
  render() {
    const {title} = this.props; //create a const called title that is this.props.title
    const ingredients = this.props.ingredients.map((ing, index) => (
      //no {} or return needed for es6
      //parens here to wrap statement, works without. jsx standard?
      <li key={index}>{ing}</li>
    ));
     // () is needed to wrap statement so that js will not place an auto semicolon until after the statement
    return (
    <div>
      <div>Recipe {title/*this.props.title*/}</div>
      <ul>
        {ingredients}
      </ul>
    </div> //can never wrap multiple jsx elems next to eachother so have to wrap in a div
    );
  }
}

export default Recipe;