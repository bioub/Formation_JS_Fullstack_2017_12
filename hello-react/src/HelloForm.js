import React, { Component } from 'react';

class HelloForm extends Component {
  constructor() {
    super();
    this.state = {
      prenom: 'Jean',
      nom: 'Dupont',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <div>
          Prénom :
          <input value={this.state.prenom}
                 name="prenom"
                 onChange={this.handleChange} />
        </div>
        <div>
          Nom :
          <input value={this.state.nom}
                 name="nom"
                 onChange={this.handleChange} />
        </div>
        <p>Hello {this.state.prenom} {this.state.nom} !</p>
      </div>
    );
  }
}

export { HelloForm };
