import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Header from './components/Header.jsx';
import {BrowserRouter} from 'react-router-dom';
import "./Sass/app.scss";
import Footer from './components/Products/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Home /> */}
  </BrowserRouter>,
  document.getElementById('root')
);
