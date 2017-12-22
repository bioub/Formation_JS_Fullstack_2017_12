import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

/*
Créer 3 composants :
ContactShow :
- sur le state, ajouter un objet contact
avec en clé : prenom nom email telephone
- afficher dans le JSX ces 4 valeur dans
des paragraphes
- (ne pas afficher de paragraphe si pas d'email ou téléphone Conditionnal Rendering)

ContactAdd :
- sur le state, ajouter un objet contact
avec en clé : prenom nom email telephone
- créer un formulaire dont chaque champs
met à jour le state (comme HelloForm)
- ajouter une méthode handleSubmit
qui traite l'événement onSubmit de la balise form
(appeler event.preventDefault())


ContactList :
- sur le state, ajouter un tableau de contact
(que prenom et nom)
- faire une boucle dans le JSX pour les afficher
*/
