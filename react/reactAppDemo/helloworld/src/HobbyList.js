import React, {Component} from 'react';

class HobbyList extends Component{ // new class to render hobby list
  render() {
    const hobbies = ['sleeping', 'eating', 'cuddling'];
    const liStyle = {fontSize: '1.5em'}; //vars need to be defined in each component I think
    return (
    <ul>
      {hobbies.map((h, i) => {
        {/* each child in arr / iterator should have unique key. here we use index of arr, but only for an unchanging arr*/}
        return <li key={i} style = {liStyle}>{h}</li>
      })}
        {/*<li style={liStyle}>sleep</li>*/}
    </ul>
    );
  }
}

export default HobbyList;