import { Component } from 'react';
import './App.css';

class App extends Component {
 
  constructor() {
    super();

    this.state = {

      monsters: [

       {
          name: 'Linda',
          id: '123',
        },
  
       {
          name: 'Frank',
          id: '124',
        },
  
        {

          name: 'Jacky',
          id: '125',
        },

        {
          name: 'Andrei',
          id: '126',
        }
        
    ]
    
  };
}

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>;
              </div>
            );
        })}
      </div>
    );
  }
}
  

  

export default App;
