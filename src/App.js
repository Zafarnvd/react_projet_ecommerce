import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Product from './Product.jsx';
import About from './About.jsx';
import Footer from './components/Products/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                {/* <Route path="/Header" element= {<Header/>}/> */}
                <Route path="/" element= {<Home/>}/>
                <Route path="/Contact" element= {<Contact/>}/>
                <Route path="/Product" element= {<Product/>}/>
                <Route path="/Contact" element= {<Contact/>}/>
                <Route path="/About" element= {<About/>}/>
            </Routes>  
            <Footer />
        </div>
    )
}
