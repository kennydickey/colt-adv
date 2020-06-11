import React, {Component} from 'react'; //non default import, also anything in node_modules such as 'react' does not need a relative path
import './Pet.css'; //need .ext -> .css etc. for non js files

class Pet extends Component { //previously React.Component before import
  render() {
    const liStyle = {fontSize: '1.5em'};
    return ( //jsx within this code block vv
      <div className="card">
        <h2 className="name">moxie</h2>
        <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="moxie"></img> 
        <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
        {/* <HobbyList /> */}
      </div>
    );
  }
}
//end of component

export default Pet; //can also place on declaration -> export default class Pet extends Component {}