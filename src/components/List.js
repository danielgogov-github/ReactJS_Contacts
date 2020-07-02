import React from 'react';
import { Redirect } from 'react-router-dom';
import Contacts from '../classes/Contacts';

class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.setRedirect = this.setRedirect.bind(this);
    }

    allContacts = Contacts.allContacts;

    setRedirect() {
        this.setState({
            redirect: true
        })
    }
    renderRedirect(path) {
        if(this.state.redirect) {
            return <Redirect to={path} />
        }
    }

    showDate(timestamp) {
        let date = new Date(timestamp);
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
    
        day = checkZero(day);
        month += 1;
        month = checkZero(month);
        hours = checkZero(hours);
        minutes = checkZero(minutes);
    
        function checkZero(number) {
            if(number < 10) {
                number = '0' + number;
            }
            return number;
        }
    
        return day +'-'+ month +'-'+ year +' '+ hours +':'+ minutes;
    }
      
    render() {
        const allItems = [];
        let row = '';
        let id = 0;
        for(const oneContact of this.allContacts) {
            for(const key in oneContact) {
                if(key === 'id') {
                    id = oneContact[key];
                    continue;
                }
                if(key === 'date') {
                    row += ' ' + this.showDate(oneContact[key]);
                    continue;
                }
                row += ' ' + oneContact[key];
            }
            allItems.push(<li id={id} key={id}>{row} <button onClick={Contacts.editContact}>Edit</button> <button onClick={Contacts.deleteContact}>Delete</button></li>);
            row = '';
        }

        return(
            <ul>
            {this.renderRedirect('/edit')}
                {allItems}
            </ul>            
        );
    }

}

export default List;
