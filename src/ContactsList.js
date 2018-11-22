import React, {Component} from 'react';
import Contact from './Contact';

class ContactsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectedOption: 'col1',
            contacts: props.contacts
        }
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, colNum) => {
        let name = ev.dataTransfer.getData("name");
        let contacts = this.state.contacts.filter((contact) => {
            if (contact.name == name) {
                contact.col = colNum;
            }
            return contact;
        });

        this.setState({
            ...this.state,
            contacts
        });
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    };

    optionChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        })
    };



    render() {
        let filteredContacts = this.state.contacts.filter(
            (contact) => {
                if(contact.col === this.state.selectedOption) {
                    return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
                } else {
                    return contact.name;
                }

            },

        );




        //console.log(filteredContacts);
        return (
            <div className="container">
                <div className="col col-1">
                    <ul className="name-list droppable" onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "col1")}}>
                        {filteredContacts.map((contact)=>{
                            return <Contact contact={contact} key={contact.id} col="col1"/>;

                        })}
                    </ul>
                </div>
                <div className="col col-2">
                    <div className="form-block">
                        <input type="text"
                               placeholder="Search"
                               value={this.state.search}
                               onChange={this.updateSearch.bind(this)}
                        />
                        <div>
                            <label>
                                <input type="radio"
                                       value="col1"
                                       checked={this.state.selectedOption === 'col1'}
                                       onChange={this.optionChange}/>
                                1
                            </label>
                            <label>
                                <input type="radio"
                                       value="col2"
                                       checked={this.state.selectedOption === 'col2'}
                                       onChange={this.optionChange}/>
                                2
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <ul className="name-list  droppable" onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "col2")}}>
                        {filteredContacts.map((contact)=>{
                            return <Contact contact={contact} key={contact.id} col="col2"/>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactsList;