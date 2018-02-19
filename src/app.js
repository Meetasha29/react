import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import './style/style.scss';
import 'normalize.css/normalize.css'
const doc=document.getElementById('app');

ReactDOM.render(<IndecisionApp option= {['option1','option2','option3']}/>,doc);
//Use stateless component wherever state is not being used
