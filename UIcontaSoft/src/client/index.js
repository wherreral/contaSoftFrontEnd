import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
//import { render } from 'react-dom';

const App = () => {
    return <h1> Hellow world </h1>;
};

ReactDOM.render(
    <Home txt="hola"/>,
    document.getElementById('templateApp')
);
