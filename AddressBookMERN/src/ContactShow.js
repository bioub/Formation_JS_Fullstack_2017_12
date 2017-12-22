import React, { Component } from 'react';
import { fetchContactById } from './fetch';

class ContactShow extends Component {
  constructor() {
    super();
    this.state = {
      contact: {}
    };
  }
  async getContact() {
    const id = this.props.match.params.id;
    const contact = await fetchContactById(id);
    this.setState({
      contact,
    });
  }
  componentWillMount() {
    this.getContact();
  }
  componentWillUpdate() {
    this.getContact();
  }
  render() {


    return (
      <div>
        <h2>Détails d'un contact</h2>
        <p>Prénom : {this.state.contact.prenom}</p>
        <p>Nom : {this.state.contact.nom}</p>
        {this.state.contact.email &&
          <p>Email : {this.state.contact.email}</p>}
        {this.state.contact.telephone &&
          <p>Téléphone : {this.state.contact.telephone}</p>}
      </div>
    );
  }
}

export default ContactShow;
