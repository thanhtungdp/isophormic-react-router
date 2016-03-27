import React,{Component, PropTypes} from 'react';
import ContactItem from './ContactItem'

class ContactList extends Component {
    render() {
        let filteredContacts = this.props.contacts;
        if (this.props.filterText) {
            filteredContacts = filteredContacts.filter(
                (contact)=> contact.name.indexOf(this.props.filterText) !== -1
            )
        }
        return (
            <ul>
                {filteredContacts.map((contact, index)=>
                    <ContactItem key={index} name={contact.name} email={contact.email}/>
                )}
            </ul>
        )
    }
}

export default ContactList;