import React from 'react';
import { Link } from 'react-router-dom';
import PageHeaderNotification from './Notification';
import PageHeaderProfile from './Profile';

import './index.css'

const PageHeader = (props) => {
    return (
        <header className="header">
            <div className="logo-container">
                <a href="https://basriyasin.com" className="logo">
                    <img src="https://basriyasin.com/images/logo.png"  
                    alt="Basri Yasin" />
                </a>
                <div className="d-md-none toggle-sidebar-left">
                    <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
                </div>
            </div>
            <div className="header-right">
                <PageHeaderNotification />
                <span className="separator"></span>
                <PageHeaderProfile />
            </div>
        </header>
    )
}
{/* <header>
            <h1>Welcome to My App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    ); */}

export default PageHeader