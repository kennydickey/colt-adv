import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

const NUM_BOXES = 32;

//stateless functional component to create indiv box
//const Box = props => {
const Box = ({color}) => { // fn with as always, props passed in
  //color is from 
  const style = { //create style obj
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color //props.color
  }
  //jsx to render our box
  return <div style={style} />
};

class App extends Component {
  constructor(props) { //standard constructor
    super(props); // to access app component with 'this'!
    //                   V arr length V modify  
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    // then map over each val with getRandomColor fn ^^
    // ! .this will change when invoked within map() so..
    // ! 2nd param to map is what you want kw this to be, App in this case
    this.state = {boxes}; //created and applied boxes var to state
    // choose random box from arr and update color of that box
    // remember to make a copy of box state to be updated 
    setInterval(() => { // remember, arrow fn uses this in surrounding context, App
      const boxes = this.state.boxes.slice(); //copy of boxes arr
      //pick a random index to update
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.getRandomColor();
      this.setState({boxes});
    }, 300);
  }

  getRandomColor() {
    //get a random color from allColors
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length) //outputs random num
    return this.props.allColors[colorIndex]; // random num as index
  }
  
  render() {
    // boxes var that pulls from and maps over boxes arr created in App above
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color}/> //our stateless box with a key and value for color
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
