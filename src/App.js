import React,{ Component } from 'react';
import './App.css';
import Bookslist from './components/booksList'
class App extends Component{
  render(){
    return (
      <div className="App">
          <Bookslist />
      </div>
    );
  }
}
export default App;
