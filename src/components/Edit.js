import React from 'react';
import Form from './Form';

class Edit extends React.Component {

    render() {
        return(<Form 
            firstName={this.props.match.params.firstName} 
            lastName={this.props.match.params.lastName}
            number={this.props.match.params.number}
            label={"Update"}
            />);
    }

}

export default Edit;
