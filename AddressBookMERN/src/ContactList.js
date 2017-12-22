import React, { Component } from 'react';
import {
  LinkContainer
} from 'react-router-bootstrap'
import { fetchContacts } from './fetch';

class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }
  async componentWillMount() {
    const contacts = await fetchContacts();
    this.setState({
      contacts,
    });
  }
  render() {
    const listItems = this.state.contacts.map((c) =>
      <LinkContainer to={`/contacts/${c._id}`} key={c._id}>
        <a
          className="list-group-item list-group-item-action">
          {c.prenom} {c.nom}
        </a>
      </LinkContainer>
    );

    return (
      <div>
      <div className="list-group">
        {listItems}
      </div>

      <LinkContainer to="/contacts/add">
      <a className="btn btn-primary btn-block mt-3">Ajouter</a>
      </LinkContainer>

      </div>
    );
  }
}

export default ContactList;
