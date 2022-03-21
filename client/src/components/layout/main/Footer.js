import React, { Fragment } from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
    return (
        <Fragment>
            <footer class="footer-container">
                <div class="footer-content">
                    <div class="row1">
                        <div class="col">
                            <h2>Our Company</h2>
                            <img src="" alt="GROUP-NAME" />
                        </div>
                        <div class="col">
                            <h2>Our Partner</h2>
                            <a href=""><img src="" alt="TUPT-LOGO" /></a>

                        </div>
                        <div class="col" id="removeL">
                            <h2>Quick Links</h2>
                            <ul class="list-unstyled li-space-lg p-small">
                                <li class="media">
                                    <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                                    <div class="media-body">Km 14. East Service Road, Western Bicutan 1630 Taguig, Philippines</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="row2">

                        <div class="socials">
                            <h2> Copyright <CopyrightIcon/> iTuto - 2021-2022, All Rights Reserved</h2>
                            {/* <ul>
                                <li><a href="https://www.instagram.com/beak_a_boo_ar/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.facebook.com/beak.a.booAR"><i class="fab fa-facebook-square"></i></a></li>
                                <li><a href="https://twitter.com/beak_a_boo_AR"><i class="fab fa-twitter-square"></i></a></li>
                            </ul> */}

                        </div>

                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
