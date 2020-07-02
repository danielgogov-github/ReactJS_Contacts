import React from 'react';
import Contacts from '../classes/Contacts';
import Path from '../classes/Path';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            number: this.props.number,
            status: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    allContacts = Contacts.allContacts;
    newContact = {};

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            status: ''
        });

        if(this.state.firstName.trim().length < 3) {
            this.setState({
                status: 'Firstname is too short!'
            });
        }else if(this.state.lastName.trim().length < 3) {
            this.setState({
                status: 'Lastname is too short!'
            });
        }else if(this.state.number.trim().length < 3) {
            this.setState({
                status: 'Number is too short!'
            });
        }else {
            this.newContact = {
                id: (new Date()).getTime(),
                firstName: this.state.firstName.trim(),
                lastName: this.state.lastName.trim(),
                number: this.state.number.trim(),
                date: + new Date()
            }

            this.allContacts.push(this.newContact);
            localStorage.setItem('allContacts', JSON.stringify(this.allContacts));
            this.setState({
                status: 'Contact was created or updated successfully!'
            });
            window.location.replace(Path.path);           
        }
        
    }
    
    render() {
        return(
            <div>
                <p>{this.state.status}</p>
                <form onSubmit={this.handleSubmit}>
                    Firstname <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
                    <br />
                    Lastname <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
                    <br />
                    Number <input type="text" name="number" value={this.state.number} onChange={this.handleChange} required />
                    <br />
                    <input type="submit" value={this.props.label} />
                </form>
            </div>
        );
    }
    
}

export default Form;
