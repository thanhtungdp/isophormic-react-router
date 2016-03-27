import React,{Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import ContactsApp from './ContactsApp';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="contacts" component={ContactsApp}/>
    </Route>
)