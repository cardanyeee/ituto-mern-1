import React, { Fragment } from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
    return (
        <Fragment>
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="row1">
                        <div className="col">
                            <h2>Our Company</h2>
                            <img src="/images/app-title.png" alt="GROUP-NAME" id="footerLogo" />
                        </div>
                        <div className="col">
                            <h2>Our Partner</h2>
                            {/* <a href=""><img src="" alt="TUPT-LOGO" /></a> */}

                        </div>
                        <div className="col" id="removeL">
                            <h2>Quick Links</h2>
                            <ul className="list-unstyled li-space-lg p-small">
                                <li className="media">
                                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                                    <div className="media-body">Km 14. East Service Road, Western Bicutan 1630 Taguig, Philippines</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row2">

                        <div className="socials">
                            <h2> Copyright <CopyrightIcon/> iTuto - 2021-2022, All Rights Reserved</h2>
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
