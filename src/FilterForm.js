import React, {Component} from 'react'
class FilterForm extends Component {

    render() {
        return (
            <div className="col col-2">
                <div className="form-block">
                    <input type="text"
                           placeholder="Search"
                           value={this.props.search}
                           onChange={this.props.onSearchChange}
                    />
                    <div>
                        <label>
                            <input type="radio"
                                   value="col1"
                                   checked={this.props.selectedOption === 'col1'}
                                   onChange={this.props.onColChange}/>
                            11

                        </label>
                        <label>
                            <input type="radio"
                                   value="col2"
                                   checked={this.props.selectedOption === 'col2'}
                                   onChange={this.props.onColChange}/>
                            2
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterForm;