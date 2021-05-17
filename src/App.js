import React, { Component } from 'react';
import './App.css';
import ContactsList from './ContactsList';
import FilterForm from './FilterForm';

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

console.log('1111111111111111111111111')

class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            search: '',
            selectedOption: 'col1',
            contacts: contacts
        }
    }

    updateSearch = (event) => {
        this.setState({
            ...this.state,
            search: event.target.value
        });
    };

    optionChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
        });
    };

    onDragOver = (ev) => {
        ev.preventDefault();
    };

    onDrop = (ev, colNum) => {
        let name = ev.dataTransfer.getData("name");
        let contacts = this.state.contacts.filter((contact) => {
            if (contact.name === name) {
                contact.col = colNum;
            }
            return contact;
        });

        this.setState({
            ...this.state,
            contacts
        });
    };

    render() {
        return (
          <div className="App">
            <header className="App-header">
                <div className="container">
                    <h1>Filter Form</h1>
                    <ContactsList
                        contacts={this.state.contacts}
                        col="col1"
                        selectedOption={this.state.selectedOption}
                        search={this.state.search}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "col1")}
                    />

                    <FilterForm
                        search={this.state.search}
                        selectedOption={this.state.selectedOption}
                        onSearchChange={this.updateSearch}
                        onColChange={this.optionChange}
                    />

                    <ContactsList
                        contacts={this.state.contacts}
                        col="col2"
                        selectedOption={this.state.selectedOption}
                        search={this.state.search}
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "col2")}
                    />
                </div>
            </header>
          </div>
        );
  }
}

export default App;
