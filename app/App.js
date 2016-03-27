import React,{Component, PropTypes} from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';

class ContactsAppContainer extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    updateContacts() {
        fetch('./data.json')
            .then((response) => {
                return response.json()
            })
            .then((reponseData)=> {
                this.setState({contacts: reponseData})
            })
            .catch((error)=> {
                console.log('Error fetch and parsing data', error);
            })
    }

    addContact(name, email) {
        let contacts = this.state.contacts.concat({name: name, email});
        this.setState({contacts: contacts});
    }

    componentDidMount() {
        this.updateContacts()
    }

    render() {
        return (
            <div>
                <ContactsApp contacts={this.state.contacts} onUpdateContacts={this.updateContacts.bind(this)}/>
            </div>
        )
    }
}








let contacts = [
    {name: "Cassio Zen", email: "cassiozen@gmail.com"},
    {name: "Dan Abramov", email: "gaearon@somewhere.com"},
    {name: "Pete Hunt", email: "floydophone@somewhere.com"},
    {name: "Paul O’Shannessy", email: "zpao@somewhere.com"},
    {name: "Ryan Florence", email: "rpflorence@somewhere.com"},
    {name: "Sebastian Markbage", email: "sebmarkbage@here.com"},
]

render(<ContactsAppContainer/>, document.getElementById('root'));