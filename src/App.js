import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Card from './Components/Card.js';
import Phrase from './Components/Phrase.js';
import Session1 from './Components/Session1.js';
import Text_List from './Components/Text_List.js';
import Books from './Components/Books.js';
import Session4 from './Components/Session4.js';
import Session6 from './Components/Session6.js';


class App extends Component{

  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  soma() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render(){
    return(
      <div className="App"> 

        <Header />

        <Session1 />

        <Phrase />

        <Text_List />

        <Books />

        <Text_List />

        <Books />

        <Session4 />

        <Card />

        <Session6 />

        <Footer />

      </div>
    );
  }
}


export default App;
