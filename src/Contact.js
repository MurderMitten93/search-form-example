import React, {Component} from 'react';

class Contact extends Component {

    onDragStart = (ev, name) => {
        console.log('dragstart:',name);
        ev.dataTransfer.setData("name", name);
    }

    render() {
        if (this.props.contact.col == this.props.col) {
            return (

                <li draggable className="draggable" onDragStart={(e)=>this.onDragStart(e, this.props.contact.name)}>
                    {this.props.contact.name}
                </li>

            );
        } else {
            return false;
        }
    }
}

export default Contact;