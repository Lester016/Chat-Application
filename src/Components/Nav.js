import React from 'react';
import Aux from '../hoc/myAux/Aux';
import { Link } from 'react-router-dom';

const myNav = () => (
    <Aux>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top">
            <Link className="navbar-brand" to="/">Landian <i className='fas fa-comments' style={{ fontSize: "25px", color: "white" }}></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{
                            pathname: '/Devs'
                        }}>Developers</Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to={{
                            pathname: '/About'
                        }}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </Aux>
);
export default myNav;