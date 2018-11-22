import React, { Component } from 'react';
import './App.css';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name: 'Scott',
    col: 'col1',
}, {
    id: 2,
    name: 'Courtney',
    col: 'col2',
}, {
    id: 3,
    name: 'Tim',
    col: 'col1',
}, {
    id: 4,
    name: 'Jeff',
    col: 'col2'
}, {
    id: 5,
    name: 'Jim',
    col: 'col2'
}, {
    id: 6,
    name: 'fdgh',
    col: 'col1'
}, {
    id: 7,
    name: 'sdqqq',
    col: 'col1'
}, {
    id: 8,
    name: 'qwertfff',
    col: 'col2'
}, {
    id: 9,
    name: 'qwefdasd',
    col: 'col2'
}, {
    id: 10,
    name: 'fdasd',
    col: 'col1'
}, {
    id: 11,
    name: 'dacaca',
    col: 'col1'
}, {
    id: 12,
    name: 'Cacacaca',
    col: 'col2'
}]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Filter Form</h1>
            <ContactsList contacts={contacts}/>

        </header>
      </div>
    );
  }
}

export default App;
