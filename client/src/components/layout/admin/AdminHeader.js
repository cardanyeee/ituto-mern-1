import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from '../../layout/main/Loader';
import Sidebar from './Sidebar';

import '../../layout/admin/Sidebar.css';

import { logout } from '../../../actions/authActions';

const   AdminHeader = (props) => {

    const [dropdown, setDropdown] = useState("");
    const [sidebar, setSidebar] = useState(false);
    
    

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth);

    const logoutHandler = () => {

        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <Sidebar sidebarToggle={sidebar} />
                    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top home-section topbar shadow-sm">
                        <div className="container-fluid">
                            <FontAwesomeIcon icon="bars" className="sidebar-toggler" size="2x" onClick={toggleSidebar} />
                            {/* <a className="navbar-brand fw-bold" href="/#">Movies</a> */}
                            <div id="navbarSupportedContent">
                                <form className="d-flex ms-auto">
                                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button> */}
                                </form>
                                {user ? (
                                    <ul className="navbar-nav" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                        <li className="nav-item dropdown">
                                            {/* data-bs-toggle="dropdown" */}
                                            <a className={dropdown === true ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} href="/" id="navbarDropdown" role="button" aria-expanded={dropdown}>
                                                <img src={user.avatar && user.avatar.url} alt={user && user.name} className="rounded header-profile" />
                                            </a>
                                            <ul className={dropdown === true ? "dropdown-menu dropdown-menu-end m-0 show" : "dropdown-menu dropdown-menu-end m-0"} aria-labelledby="navbarDropdown" data-bs-popper="">
                                              
                                                {user && user.role === 'admin' && (
                                                    <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                                                )}
                                                <li><hr className="dropdown-divide m-1" /></li>
                                                {/* <Link className="dropdown-item" to="/" onClick={logoutHandler}>Logout</Link> */}
                                                <li><a className="dropdown-item" onClick={logoutHandler} href="/">Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>

                                ) : !loading && <a className="btn btn-danger" id="loginBtn" href="/login">Login</a>}
                            </div>
                        </div>
                    </nav>
                </Fragment>
            )}
        </Fragment>

    )
}

export default AdminHeader
