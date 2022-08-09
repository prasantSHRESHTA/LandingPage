import React from 'react';
import './header.css';
export default function Header() {
    return (
        <nav>
            <div className="logo">F O M <figcaption>Friends Of Meditation </figcaption></div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="search">
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}
