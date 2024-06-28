import { Component } from 'react';
import './App.css';

class App extends Component {
 
  constructor() {
    super();

    this.state = {

      monsters: []
    
  };
}

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
        })}
      </div>
    );
  }
}
  

  

export default App;
