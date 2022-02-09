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

            <nav class="navbar navbar-expand-lg navbar-light bg-white px-0 py-3">
                <div class="container-xl">

                    <a class="navbar-brand" href="/#">
                        <h1 class="logo-brand">
                            iTuto
                        </h1>
                        {/* <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" class="h-8" alt="..." /> */}
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">

                        <div class="navbar-nav mx-lg-auto">
                            <a class="nav-item nav-link active" href="/" aria-current="page">Home</a>
                            <a class="nav-item nav-link" href="/#">Product</a>
                            <a class="nav-item nav-link" href="/#">Features</a>
                            <a class="nav-item nav-link" href="/#">Download</a>
                        </div>


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

                        <>
                            <div class="navbar-nav ms-lg-4">
                                <a class="nav-item nav-link" href="/login">Sign in</a>
                            </div>
                            <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                                <a href="/register" class="btn btn-sm btn-primary w-full w-lg-auto">
                                    Register
                                </a>
                            </div>
                        </>

                        }

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
