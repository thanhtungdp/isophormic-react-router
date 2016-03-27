import React,{Component, PropTypes} from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import fetch from 'isomorphic-fetch';

class ContactsApp extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            contacts: this.props.initialData || [],
            filterText: ''
        }
    }

    componentDidMount() {
        if(!this.props.initialData){
            ContactsApp.requestInitialData().then(contacts => {
                this.setState({contacts})
            });
        }
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm})
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                <ContactList contacts={this.state.contacts} filterText={this.state.filterText}/>
            </div>
        )
    }
}
ContactsApp.propTypes = {
    initialData: PropTypes.any
}

ContactsApp.requestInitialData = ()=>{
    return fetch('http://localhost:3000/contacts.json')
        .then((response) => response.json());
}

export default ContactsApp;