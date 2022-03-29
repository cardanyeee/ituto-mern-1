import React, { Fragment } from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
    return (
        <Fragment>
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="row1">
                        <div className="col">
                            <h2>Our Company</h2>
                            <img className="footerLogo" src="/images/footerLogo.png" alt="GROUP-NAME" />
                        </div>
                        <div className="col">
                            <h2>Contact</h2>
                            {/* <a href=""><img src="" alt="TUPT-LOGO" /></a> */}


                            <ul className="list-unstyled li-space-lg p-small">
                                <li className="media" style={{ color: '#2F4858' }}>
                                    <EmailIcon />
                                    <a className="media-body" style={{ textDecoration: 'none' }} href="https://mailto:ituto.developers@gmail.com" target="_blank" rel="noreferrer">
                                        <p style={{ color: '#0A8B5C' }}>
                                            ituto.developers@gmail.com
                                        </p>

                                    </a>


                                </li>

                                <li className="media" style={{ color: '#2F4858' }}>
                                    <LocationOnIcon />
                                    <div className="media-body" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                                        <p style={{ color: '#0A8B5C' }}>
                                            Km 14. East Service Road, <br /> Western Bicutan 1630 Taguig,<br />Philippines
                                        </p>

                                    </div>


                                </li>

                                {/* <li className="media" style={{ color: '#2F4858' }}>
                                    <LanguageIcon />
                                    <div className="media-body" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                                        <p style={{ color: '#0A8B5C' }}>
                                            https://mern-ituto.herokuapp.com/
                                        </p>

                                    </div>


                                </li> */}




                            </ul>



                        </div>
                        <div className="col" id="removeL">
                            <h2>Quick Links</h2>
                            <ul className="list-unstyled li-space-lg p-small">

                                <li className="media">

                                    <div className="media-body">
                                        <a href="https://mern-ituto.herokuapp.com/" style={{ color: '#0A8B5C', textDecoration: 'none' }}>

                                            Home
                                        </a>
                                    </div>
                                </li>

                                <li className="media">

                                    <div className="media-body">
                                        <a href="https://drive.google.com/file/d/1mKA_qDNRKAK8Ym63LqMtewR2vT2Cwwu1/view" style={{ color: '#0A8B5C', textDecoration: 'none' }} target="_blank" rel="noreferrer" >

                                            Download
                                        </a>
                                    </div>
                                </li>

                                <li className="media">

                                    <div className="media-body">
                                        <a href="https://mern-ituto.herokuapp.com/register" style={{ color: '#0A8B5C', textDecoration: 'none' }} >

                                            Register
                                        </a>

                                    </div>
                                </li>

                                <li className="media">

                                    <div className="media-body">
                                        <a href="https://mern-ituto.herokuapp.com/login" style={{ color: '#0A8B5C', textDecoration: 'none' }} >

                                            Login
                                        </a>

                                    </div>
                                </li>

                                <li className="media">

                                    <div className="media-body">
                                        <a href="https://mern-ituto.herokuapp.com/terms-and-conditions" style={{ color: '#0A8B5C', textDecoration: 'none' }} >

                                            Terms & Conditions
                                        </a>
                                    </div>
                                </li>







                            </ul>
                        </div>
                    </div>
                    <div className="row2">

                        <div className="teamcolor1 socials">
                            <h2> Copyright <CopyrightIcon /> iTuto - 2021-2022, All Rights Reserved</h2>
                            {/* <ul>
                                <li><a href="https://www.instagram.com/beak_a_boo_ar/"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.facebook.com/beak.a.booAR"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a href="https://twitter.com/beak_a_boo_AR"><i className="fab fa-twitter-square"></i></a></li>
                            </ul> */}

                        </div>

                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
