import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import './App.css';

class InstructorItem extends Component {
 static propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
 }
 render() {
  return (
   <li>
     <h3>{this.props.name}</h3>
     <h4>Hobbies: {this.props.hobbies.join(", ")}</h4>
   </li>
  );
 }
}

class AppWithArch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    //to randomly change content
    setTimeout(() => { //arrow fn to preserve 'this' in our callback functions, so that this .setState refers to the right 'this', App in this case
      // this.setState
      //find random instructor and output num between 1 and 4
      const randInst = Math.floor(Math.random() * this.state.instructors.length)
      //choose random hobby from within arr of hobbies
      const hobbyIndex = Math.floor(Math.random() * this.state.instructors[randInst].length); //accesses instrctors[2].length, also outputs a num between 1 and 2

      //still within setTimeout
      // const instructors = this.state.instructors.slice(); //slice gives new arr
      // // make a copy of obj we want to mutate
      // //try new name for arr here
      // instructors[randInst] = Object.assign({}, instructors[randInst]);
      // //modify only hobbies arr, use slice to make another new arr
      // instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
      // //now we can use splice to modify new arr
      // instructors[randInst].hobbies.splice(hobbyIndex, 1);
      // this.setState({instructors}); //instructors obj is made, no need for key/val

      const instructors = this.state.instructors.map((inst, i) => { //returns new arr
        if(i === randInst) { //if index we are mapping === inst we want to modify
          const hobbies = inst.hobbies.slice(); //copy of hobbies arr
          //or const hobbies = [...inst.hobbies]; same using spread ^^
          hobbies.splice(hobbyIndex, 1); //use on new arr to remove random from index 1
          return {
            ...inst, //return new obj with the spread of what inst has left
            hobbies // plus hobbies arr we just copied and modified
          };
        }
        return inst; //otherwise return original inst
        //alternatively..
        // const hobbies = inst.hobbies.slice(); //copy of hobbies arr
        // i === randInst ? { //if i === randInst
        //   ...inst, // to keep all of the keys in our obj
        //   hobbies: [...inst.hobbies.slice(0, hobbyIndex).concat(inst.hobbies.slice(hobbyIndex+1, inst.hobbies.length))]
        // } : inst; // if not, then return original instructor
      });
      this.setState({instructors}); // whenever setState is called, render is called vv
    }, 5000)

  } // ^within props

  render() {
    const instructors = this.state.instructors.map((instructor, index) => ( // rendering new instructor items, any new instructor vals will get re rendered in the dom
      // <li key={index}>
      //   <h3>{instructor.name}</h3>
      //   <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      // </li>
      <InstructorItem //a lot like calling a fn here and passing in values below
       key={index}
       name={instructor.name} //is a prop
       hobbies={instructor.hobbies} //is a prop
      />

    ));
    //still within render
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default AppWithArch;