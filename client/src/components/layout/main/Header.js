import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

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
            <header className="v-sheet theme--light v-toolbar v-app-bar v-app-bar--fixed" id="navt"
                style={{ height: "56px", margintop: "0px", transform: `translateY("0px")`, left: "0px", right: "0px" }} data-v-5a4eb5ab=""
                data-booted="true">

                {/* <input type="checkbox" id="check" />
                        <label for="check" className="checkbtn">
                            <i className="fas fa-bars"></i>

                        </label> */}
                <div className="wrapper">
                    <a className="navbar-brand" href="/">
                        <h1 className="logo-brand">
                            iTuto
                        </h1>
                    </a>
                </div>



                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>

                    {/* <div id="move">
                    <a href="/login" className="v-btn v-btn--flat v-btn--text theme--light v-size--default" id="auth" data-v-5a4eb5ab="">Sign in
                    </a>

                    <a href="/register" className="btn btn-sm btn-primary w-full w-lg-auto">
                        Register
                    </a>
                </div> */}
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarCollapse">

                                <div className="navbar-nav mx-lg-auto">
                                    <a className="nav-item nav-link active" href="/" aria-current="page">Home</a>
                                    <a className="nav-item nav-link" href="/#">Products to</a>
                                    <a className="nav-item nav-link" href="/#">Features</a>
                                    <a className="nav-item nav-link" href="/#">Download</a>
                                </div>
                            </div> */}
                    {/* <div className="spacer" data-v-5a4eb5ab=""></div> */}
                    {/* <div className="v-toolbar__items hidden-sm-and-down hidden-lg-and-up" data-v-5a4eb5ab=""><a href="/"
                                aria-current="page"
                                className="v-btn--active v-btn v-btn--flat v-btn--router v-btn--text theme--light v-size--default"
                                data-v-5a4eb5ab=""><span className="v-btn__content"><i aria-hidden="true"
                                    className="v-icon notranslate fas fa-home theme--light" data-v-5a4eb5ab=""></i></span></a><a
                                        href="https://blog.ryujinx.org/" className="v-btn v-btn--flat v-btn--text theme--light v-size--default"
                                        data-v-5a4eb5ab=""><span className="v-btn__content"><i aria-hidden="true"
                                            className="v-icon notranslate fas fa-newspaper theme--light" data-v-5a4eb5ab=""></i></span></a><a
                                                href="/download" className="v-btn v-btn--flat v-btn--router v-btn--text theme--light v-size--default"
                                                data-v-5a4eb5ab=""><span className="v-btn__content"><i aria-hidden="true"
                                                    className="v-icon notranslate fas fa-download theme--light" data-v-5a4eb5ab=""></i></span></a><a
                                                        href="/contribute" className="v-btn v-btn--flat v-btn--router v-btn--text theme--light v-size--default"
                                                        data-v-5a4eb5ab=""><span className="v-btn__content"><i aria-hidden="true"
                                                            className="v-icon notranslate fas fa-code theme--light" data-v-5a4eb5ab=""></i></span></a><a
                                                                href="https://github.com/Ryujinx/Ryujinx-Games-List/issues" target="_blank" rel="noopener"
                                                                className="v-btn v-btn--flat v-btn--text theme--light v-size--default" data-v-5a4eb5ab=""><span
                                                                    className="v-btn__content"><i aria-hidden="true" className="v-icon notranslate fas fa-gamepad theme--light"
                                                                        data-v-5a4eb5ab=""></i></span></a><a href="https://patreon.com/Ryujinx"
                                                                            className="v-btn v-btn--flat v-btn--text theme--light v-size--default red--text" data-v-5a4eb5ab=""><span
                                                                                className="v-btn__content"><i aria-hidden="true" className="v-icon notranslate fab fa-patreon theme--light"
                                                                                    data-v-5a4eb5ab=""></i></span></a><a href="https://github.com/Ryujinx/Ryujinx"
                                                                                        className="v-btn v-btn--flat v-btn--text theme--light v-size--default green--text" data-v-5a4eb5ab=""><span
                                                                                            className="v-btn__content"><i aria-hidden="true" className="v-icon notranslate fab fa-github theme--light"
                                                                                                data-v-5a4eb5ab=""></i></span></a><a href="https://twitter.com/RyujinxEmu"
                                                                                                    className="v-btn v-btn--flat v-btn--text theme--light v-size--default blue--text" data-v-5a4eb5ab=""><span
                                                                                                        className="v-btn__content"><i aria-hidden="true" className="v-icon notranslate fab fa-twitter theme--light"
                                                                                                            data-v-5a4eb5ab=""></i></span></a><a href="https://discord.gg/VkQYXAZ"
                                                                                                                className="v-btn v-btn--flat v-btn--text theme--light v-size--default"
                                                                                                                style={{color:"#7289DA", caretcolor:"#7289DA"}} data-v-5a4eb5ab=""><span className="v-btn__content"><i
                                                                                                                    aria-hidden="true" className="v-icon notranslate fab fa-discord theme--light"
                                                                                                                    data-v-5a4eb5ab=""></i></span></a></div> */}
                    {/* <div className="v-toolbar__items hidden-md-and-down" data-v-5a4eb5ab=""> */}

                    <ul>



                        <li>
                            <a href="/" aria-current="page"
                                className="v-btn--active v-btn v-btn--flat v-btn--router v-btn--text theme--light v-size--default"
                                data-v-5a4eb5ab="" id="Border">
                                <span className="v-btn__content">
                                    Home
                                </span>
                            </a>
                        </li>

                        <li>



                            <a href="/register"
                                className="v-btn v-btn--flat v-btn--router v-btn--text theme--light v-size--default"
                                data-v-5a4eb5ab="">
                                <span className="v-btn__content">Download</span>
                            </a>



                        </li>

                        <li>
                            <a href="/login" className="v-btn v-btn--flat v-btn--text theme--light v-size--default" data-v-5a4eb5ab="">
                                <span
                                    className="v-btn__content">Compatibility</span>
                            </a>

                        </li>
                        {user ? (
                            <li>
                                <a className="v-btn v-btn--flat v-btn--text theme--light v-size--default" data-v-5a4eb5ab="">
                                    <span className="v-btn__content">
                                        <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                                            <li className="nav-item dropdown" >
                                                <img src={user.avatar && user.avatar.url} alt={user && user.name} className="rounded header-profile" />
                                                {/* <input type="checkbox" id="check1" />
                                                <label for="check1" className="checkbtn1">
                                                    <span>
                                                        <i className="fas fa-caret-down" role="button"></i>
                                                    </span>
                                                </label>




                                                <ul>
                                                    <li>
                                                        <a className="dropdown-item" href="/me">
                                                            Profile
                                                        </a>
                                                    </li>
                                                    {user && user.role === 'admin' && (
                                                        <li>
                                                            <a className="dropdown-item" href="/dashboard">
                                                                Dashboard
                                                            </a>
                                                        </li>
                                                    )}
                                                    <li>
                                                        <hr className="dropdown-divide m-1" />
                                                    </li>

                                                    <li>
                                                        <a className="dropdown-item" onClick={logoutHandler} href="/">
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul> */}

                                                <div className="main">
                                                    <input type="checkbox" id="drop-1" hidden />
                                                    <label className="dropHeader dropHeader-1" for="drop-1">
                                                        <i className="fas fa-caret-down" role="button"></i>
                                                    </label>
                                                    <div className="list list-1">
                                                        <div className="item" >
                                                            <a href="/me" style={{fontSize:"14px"}}>
                                                                Profile
                                                            </a>

                                                        </div>

                                                        <div className="item">
                                                            {user && user.role === 'admin' && (
                                                                <a className="item" href="/dashboard" style={{fontSize:"14px"}}>
                                                                    Dashboard
                                                                </a>
                                                            )}
                                                        </div>

                                                        <div className="item">
                                                            <a onClick={logoutHandler} href="/" style={{fontSize:"14px"}}>
                                                                Logout
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </span>
                                </a>

                            </li>
                        ) : !loading &&

                        <>
                            <li>
                                <a href="/login" className="v-btn v-btn--flat v-btn--text theme--light v-size--default" id="auth" data-v-5a4eb5ab="">Sign in
                                </a>

                                <a href="/register" className="btn btn-sm btn-primary w-full w-lg-auto">
                                    Register
                                </a>
                            </li>

                        </>
                        }



                    </ul>

                </nav>
                {/* 
                        <div className="checkbtn">

                            <button type="button" className="v-app-bar__nav-icon hidden-md-and-up mr-0 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"
                                data-v-5a4eb5ab="">
                                <span className="v-btn__content">
                                    <i aria-hidden="true" className="v-icon notranslate fas fa-bars theme--light" data-v-5a4eb5ab=""></i>
                                </span>
                            </button>


                        </div> */}

                {/* <div className="v-toolbar__items ml-0 mr-2" data-v-5a4eb5ab=""><button type="button"
                                className="v-btn v-btn--flat v-btn--text theme--light v-size--default" data-v-5a4eb5ab=""><span
                                    className="v-btn__content"><i aria-hidden="true" className="v-icon notranslate fas fa-moon theme--light"
                                        data-v-5a4eb5ab=""></i></span></button></div> */}
            </header>

        </Fragment >
    )
}

export default Header
