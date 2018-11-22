import React, {Component} from 'react';

class Toggle extends Component {
    state = {
        toggle: true,
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle,
        })
    }


    render() {
        return (
            <div>
                {this.state.toggle &&
                <p>This should show and hide</p>
                }
                <button onClick={this.toggle}>Show / Hide</button>

            </div>
        );
    }
}

export default Toggle;