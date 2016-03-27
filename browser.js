import React from 'react';
import {render} from 'react-dom';
import ContactsApp from './app/components/ContactsApp';
import {Router, browserHistory} from 'react-router';
import routes from './app/components/routes';

let initialData = document.getElementById('initial-data').textContent;
if (initialData.length > 0) {
    initialData = JSON.parse(initialData);
}

let handleCreateElement = (Component, props) => {
    if (Component.hasOwnProperty('requestInitialData')) {
        let initialData = document.getElementById('initial-data').textContent;
        if (initialData.length > 0) {
            initialData = JSON.parse(initialData);
        }
        return (<Component initialData={initialData} {...props}/>)
    }
    else {
        return (<Component {...props}/>)
    }
}

render(
    <Router history={browserHistory} createElement={handleCreateElement} routes={routes} />,
    document.getElementById('root')
)
