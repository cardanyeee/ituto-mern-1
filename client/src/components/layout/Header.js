import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link, useLocation } from 'react-router-dom';
import { useAlert } from 'react-alert';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { logout } from '../../actions/authActions';

import Search from './Search';

import './header.css';

const Header = ({ history }) => {

    const [dropdown, setDropdown] = useState("");
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth);

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    const path = useLocation().pathname.split('/')[1];

    return (
        <Fragment>
            <nav className="navbar home-navbar navbar-expand-lg navbar-light sticky-top topbar bg-white justify-content-center">
                <div className="mx-4 container">
                    <div className="logo-brand d-flex w-50 me-auto link-primary">iTuto</div>
                    {/* <a className="me-3 logo-brand" href="/#">MOVFLIX</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 justify-content-center">
                            <li className="nav-item active">
                                <Link className="fw-bold nav-link text-dark" to="/">Home</Link>
                                {/* <a className="fw-bold nav-link text-dark" href="/#">Home <span className="sr-only">(current)</span></a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="fw-bold nav-link text-dark" to="/actors">Actors</Link>
                                {/* <a className="nav-link text-dark" href="/actor">Actors</a> */}
                            </li>
                            <li className="nav-item">
                                <a className="fw-bold nav-link text-dark" href="/producers">Producers</a>
                            </li>
                        </ul>
                        {/* <Route render={({ history }) => <Search history={history} search={path} />} /> */}

                        {user ? (
                            <ul className="nav navbar-nav ms-auto w-100 justify-content-end" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                <li className="nav-item dropdown">
                                    {/* data-bs-toggle="dropdown" */}
                                    <div className={dropdown === true ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="navbarDropdown" role="button" aria-expanded={dropdown} disabled>
                                        <img src={user.avatar && user.avatar.url} alt={user && user.name} className="rounded header-profile" />
                                    </div>
                                    <ul className={dropdown === true ? "dropdown-menu dropdown-menu-end m-0 show" : "dropdown-menu dropdown-menu-end m-0"} aria-labelledby="navbarDropdown" data-bs-popper="">
                                        <li><a className="dropdown-item" href="/me">Profile</a></li>
                                        {user && user.role === 'admin' && (
                                            <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                                        )}
                                        <li><hr className="dropdown-divide m-1" /></li>
                                        {/* <Link className="dropdown-item" to="/" onClick={logoutHandler}>Logout</Link> */}
                                        <li><a className="dropdown-item" onClick={logoutHandler} href="/">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>

                        ) : !loading &&
                        <div className="nav navbar-nav ms-auto w-100 justify-content-end">
                            <a className="btn btn-primary fw-bold bg-transparent me-3" id="loginBtn" href="/login">Login</a>
                            <a className="btn btn-primary fw-bold text-white" id="loginBtn" href="/register">Registration</a>
                        </div>

                        }

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
