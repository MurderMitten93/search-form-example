import React, {Component} from 'react';

class Contact extends Component {

    onDragStart = (ev, name) => {
        ev.dataTransfer.setData("name", name);
        console.log(ev.dataTransfer.getData("name"));
    };

    render() {
        if (this.props.contact.col === this.props.col) {
            return (

                <li draggable className="draggable" onDragStart={(e)=>this.onDragStart(e, this.props.contact.name)}>
                    {this.props.contact.name}
                </li>

            );
        } else {
            return null;
        }
    }
}

export default Contact;