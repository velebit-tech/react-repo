import React, { Component } from 'react';
import './App.css';
import Animal from './Animal/Animal.js'


class App extends Component {
  state = {
    animals: [
      {id: 'asdfgasdg', type: 'giraffe', skin: 'orange'},
      {id: 'asdgsasdgasdf', type: 'cat', skin: 'white'}
    ],
    otherState: 'some value',
    visible: true
  }

  changeSkinHandler = (event, id) => {
    const animalIndex = this.state.animals.findIndex(a => {
      return a.id === id;
    });

    const animal = {...this.state.animals[animalIndex]};
    animal.skin = event.target.value;

    const animals = [...this.state.animals];
    animals[animalIndex] = animal;

    this.setState({animals: animals});
  }

  toggleAnimalsHandler = () => {
    const visibleAnimals = this.state.visible;
    this.setState({visible: !visibleAnimals});
  }

  deleteAnimalHandler = (animalIndex) => {
    const animals = [...this.state.animals];
    animals.splice(animalIndex, 1);
    this.setState({animals: animals});
  }

  render() {
    let animals = null;

    if (this.state.visible) {
      animals = (
        <div>
          {this.state.animals.map((animal, index) => {
            return <Animal
              key={animal.id} 
              type={animal.type} 
              skin={animal.skin}
              clicked={() => {this.deleteAnimalHandler(index)}}
              skinchange={(event) => this.changeSkinHandler(event, animal.id)} />
          })}
        </div>
      );
    }

    const btnStyles = {
      display: 'block',
      width: '30%',
      margin: '10px auto',
      border: '1px solid black',
      padding: '10px',
      backgroundColor: 'DodgerBlue',
      color: 'white',
      font: '14px Verdana',
      ':hover': {
        backgroundColor: 'DeepSkyBlue'
      }
    }

    return (
    <div className="App">
      <h2>Hello react.</h2>
      <button onClick={this.toggleAnimalsHandler} style={btnStyles}>Show/Hide animals</button>
      {animals}
    </div>
    );
  }
}
export default App;