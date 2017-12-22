import React from 'react';
import ReactDOM from 'react-dom';
import Horloge from './Horloge';

ReactDOM.render(<Horloge format="HH:mm:ss" delay={1000} />, document.getElementById('root'));
