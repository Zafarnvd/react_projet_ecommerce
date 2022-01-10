import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <Fragment>
            <div className="nav">
                <h1>Fache<span>.</span></h1>
                <div className="pages">
                    <Link to="/">Home</Link>
                    <Link to="/Product">Product</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="rights">
                    <Link to="/"><i class="far fa-heart"></i></Link>
                    <span>|</span>
                    <Link className="panier" to="/"><i class="fas fa-shopping-basket"></i></Link>
                </div>
            </div>
        </Fragment>
    )
}
