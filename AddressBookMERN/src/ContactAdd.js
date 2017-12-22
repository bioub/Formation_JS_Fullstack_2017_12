import React, { Component } from 'react';
import { addContact } from './fetch';

class ContactAdd extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        prenom: 'Jean',
        nom: 'Dupont',
        email: '',
        telephone: '',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      contact: Object.assign(this.state.contact, {
        [event.target.name]: event.target.value,
      })
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const contact = await addContact(this.state.contact)
    console.log(contact);
  }
  render() {
    return (
      <div>
        <h2>Ajouter un contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Prénom</label>
            <input value={this.state.contact.prenom}
                  name="prenom"
                  className="form-control"
                  onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Nom</label>
            <input value={this.state.contact.nom}
                  name="nom"
                  className="form-control"
                  onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input value={this.state.contact.email}
                  name="email"
                  className="form-control"
                  onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Téléphone</label>
            <input value={this.state.contact.telephone}
                  name="telephone"
                  className="form-control"
                  onChange={this.handleChange} />
          </div>
          <div>
            <button className="btn btn-primary">Ajouter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactAdd;
