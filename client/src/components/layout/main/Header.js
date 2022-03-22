import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { logout } from '../../../actions/authActions';

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

    return (
        <Fragment>

            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white px-0">
                <div className="container-xl">

                    <a className="navbar-brand" href="/#">

                        <h1 className="logo-brand">
                            <img src="/images/ituto_logo_nobg.png" width="50" />
                            iTuto
                        </h1>
                        {/* <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" className="h-8" alt="..." /> */}
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <div className="navbar-nav mx-lg-auto">
                            <a className="nav-item nav-link active" href="/" aria-current="page">Home</a>

                            <a className="nav-item nav-link" href="/#what-is-ituto?">Download</a>
                            <a className="nav-item nav-link" href="/#features">Features</a>
                            <a className="nav-item nav-link" href="/#about">About</a>
                            <a className="nav-item nav-link" href="/terms-and-conditions">Terms & Conditions</a>
                        </div>


                        {user ? (
                            <ul className="nav navbar-nav ms-lg-4 justify-content-end" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                <li className="nav-item dropdown">
                                    {/* data-bs-toggle="dropdown" */}
                                    <div className={dropdown === true ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="navbarDropdown" role="button" aria-expanded={dropdown} disabled>
                                        <img src={user.avatar && user.avatar.url} alt={user && user.name} className="rounded header-profile" />
                                    </div>
                                    <ul className={dropdown === true ? "dropdown-menu dropdown-menu-end m-0 show" : "dropdown-menu dropdown-menu-end m-0"} aria-labelledby="navbarDropdown" data-bs-popper="">
                                        <li><a className="dropdown-item" href="/me">Profile</a></li>
                                        {user && user.role === 'admin' && 
                                            <li>
                                                <Link className="dropdown-item" to="/dashboard" >
                                                    Dashboard
                                                </Link>
                                            </li>
                                        }
                                        <li><hr className="dropdown-divide m-1" /></li>
                                        {/* <Link className="dropdown-item" to="/" onClick={logoutHandler}>Logout</Link> */}
                                        <li><a className="dropdown-item" onClick={logoutHandler} href="/">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>

                        ) : !loading &&

                        <>
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="/login">Sign in</a>
                            </div>
                            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                                <a href="/register" className="btn btn-sm btn-primary w-full w-lg-auto">
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
