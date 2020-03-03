import React, {Component} from 'react';
import './App.css';
import Animal from './Animal/Animal.js'

class App extends Component {
  state = {
    animals: [
      {type: 'giraffe', skin: 'orange'},
      {type: 'cat', skin: 'white'}
    ]
  }

  changeAnimalHandler = () => {
    console.log('animal changed lol');
  }

  render() {
    return (
    <div className="App">
      <h2>Hello react.</h2>
      <button onClick={this.changeAnimalHandler}>Change Animal</button>
      <Animal type={this.state.animals[0].type} skin={this.state.animals[0].skin} />
      <Animal type={this.state.animals[1].type} skin={this.state.animals[1].skin}>Meow.</Animal>
    </div>
    );
  }
}

export default App;
