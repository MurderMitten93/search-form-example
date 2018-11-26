import React, {Component} from 'react';
import Contact from './Contact';

class ContactsList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                if(contact.col === this.props.selectedOption) {
                    return contact.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
                } else {
                    return contact.name;
                }
            },

        );

        return (
            <div className="col col-1">
                <ul className="name-list droppable"
                    onDragOver={this.props.onDragOver}
                    onDrop={this.props.onDrop}>
                    {filteredContacts.map((contact)=>{
                        return <Contact contact={contact} key={contact.id} col={this.props.col} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default ContactsList;