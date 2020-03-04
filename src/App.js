import React, {Component} from 'react';
import './App.css';
import Animal from './Animal/Animal.js'

class App extends Component {
  state = {
    animals: [
      {type: 'giraffe', skin: 'orange'},
      {type: 'cat', skin: 'white'}
    ],
    otherState: 'someValue'
  }

  changeAnimalHandler = (type) => {
    this.setState( {
      animals: [
        {type: type, skin: 'orange'},
        {type: 'dog', skin: 'brown'}
      ]
    } )
  }

  changeSkinHandler = (event) => {
    this.setState( {
      animals: [
        {type: 'giraffe', skin: event.target.value},
        {type: 'dog', skin: 'brown'}
      ]
    } )
  }

  render() {
    return (
    <div className="App">
      <h2>Hello react.</h2>
      <button onClick={this.changeAnimalHandler.bind(this, 'pas')}>Change Animal</button>
      <Animal 
        type={this.state.animals[0].type} 
        skin={this.state.animals[0].skin}
        skinchange={this.changeSkinHandler} />
      <Animal 
        type={this.state.animals[1].type} 
        skin={this.state.animals[1].skin}
        click={this.changeAnimalHandler.bind(this, 'macka')} >
        Meow.
      </Animal>
    </div>
    );
  }
}
export default App;