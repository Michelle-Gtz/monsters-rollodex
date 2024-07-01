import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
 
  constructor() {
    super();

    this.state = {

      monsters: [],
     searchField: ""
  };
  console.log('constructor');
}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => 
      this.setState(
        () => {
          return { monsters:users };
        },
        () => {
          console.log(this.state);
        }
      ));
    console.log('componentDidMount');
  }

  handleSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
   
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { handleSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <div className='App'>
      <SearchBox handleSearchChange = {handleSearchChange} placeholder= 'search monsters' className = 'search-box'/>
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
  

  

export default App;
