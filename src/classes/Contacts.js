import Path from '../classes/Path';

class Contacts {

    static allContacts = JSON.parse(localStorage.getItem('allContacts'));

    static deleteContact(event) {
        if(window.confirm('Are you sure you want to delete?')) {
            let row = event.currentTarget.parentNode;
            let id = parseInt(row.getAttribute('id'));
    
            for(const [arrayIndex, contactObject] of Contacts.allContacts.entries()) {
                for(const key in contactObject) {
                    if(contactObject[key] === id) {
                        Contacts.allContacts.splice(arrayIndex, 1);
                        localStorage.setItem('allContacts', JSON.stringify(Contacts.allContacts));
                        window.location.replace(Path.path);
                        break;
                    }
                }
            }
        }
    }

    static editContact(event) {
        let row = event.currentTarget.parentNode;
        let id = parseInt(row.getAttribute('id'));
        let contactToEdit = null;
        
        for(const [arrayIndex, contactObject] of Contacts.allContacts.entries()) {
            for(const key in contactObject) {
                if(contactObject[key] === id) {
                    contactToEdit = Contacts.allContacts.slice(arrayIndex, arrayIndex + 1);
                    Contacts.allContacts.splice(arrayIndex, 1);
                    localStorage.setItem('allContacts', JSON.stringify(Contacts.allContacts));
                    window.location.replace(Path.path + '/edit/' + contactToEdit[0].firstName + '/' + contactToEdit[0].lastName + '/' + contactToEdit[0].number);
                    break;
                }
            }
        }
    }

}

export default Contacts;
