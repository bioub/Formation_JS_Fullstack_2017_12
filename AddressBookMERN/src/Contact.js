import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactAdd from './ContactAdd';
import ContactShow from './ContactShow';
import { Route, Switch } from 'react-router-dom';


class Contact extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <ContactList />
        </div>
        <div className="col">
          <Switch>
            <Route path={`${this.props.match.url}/add`} component={ContactAdd} />
            <Route path={`${this.props.match.url}/:id`} component={ContactShow} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Contact;
