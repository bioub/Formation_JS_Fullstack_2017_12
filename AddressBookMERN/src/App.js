import React, { Component } from 'react';
import Contact from './Contact';
import Menu from './Menu';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <div className="container-fluid mt-3">
            <Route path="/contacts" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
