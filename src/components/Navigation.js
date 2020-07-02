import React from 'react';
import { Link } from 'react-router-dom';
import Path from '../classes/Path';

class Navigation extends React.Component {

    render() {
        return(
            <div className="navigation">
                <Link to={Path.path + "/"}>{this.props.home}</Link>
                &nbsp;|&nbsp;
                <Link to={Path.path + "/create"}>{this.props.create}</Link>
                <hr></hr>
            </div>
        );
    }
    
}

export default Navigation;
