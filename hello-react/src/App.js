import React, { Component } from 'react';
import { Horloge } from './Horloge';
import { HelloForm } from './HelloForm';

const App = () => <div>
  <Horloge format="HH:mm:ss" delay={1000} />
  <HelloForm/>
</div>;

export { App };
