import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import './welcome.css';
const Welcome = () => {
    return (


        <main className="v-main" id="v-main-pad" data-v-5a4eb5ab="" data-booted="true">

            <div className="v-main__wrap">
                <div>
                    <section>
                        <div fluid="" className="v-parallax" style={{ height: '600px' }}>
                            <div className="v-parallax__image-container">
                                <img src="/images/Cover.png" alt="Parallax wallpaper" className="v-parallax__image"
                                />

                                <div className="v-parallax__content">
                                    <div className="row align-center justify-center">
                                        <div className="text-center col">

                                            <img alt="Ryujinx" src="/images/ituto_logo_nobg.png" width="128"

                                                data-src="images/lol.png"
                                                data-srcset="images/lol.png"

                                            />


                                            <p className="display-1" id="font-title">Discover students who are interested in sharing their attained skills and knowledge.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section>

                        <div className="container">

                            <div className="row mt-5 align-center">



                                <div className="container container--fluid" id="container-intro">
                                    <div className="row align-start justify-center">
                                        {/* <div className="col-md-6 col-12"> */}

                                        <div className="text-center">
                                            <h1 id="bold" >What is iTuto?</h1><span className="subheading"><small><em>(Ay-Too-Toh)</em></small>
                                                <p className="my-2">iTuto is a requirement for capstone project develop using MERN </p>
                                                <p className="my-2">This emulator aims at p roviding excellent accuracy and performance, a user-friendly
                                                    interface, and consistent builds.</p>
                                                <p className="my-2">iTuto is available on GitHub under the MIT license.</p>
                                                <div className="text-center"><a href="https://github.com/Ryujinx/Ryujinx-Games-List/issues"
                                                    className="ma-2 v-btn v-btn--contained theme--dark v-size--default ryu_blue" id="compat"><span
                                                        className="v-btn__content"><i aria-hidden="true"
                                                            className="v-icon notranslate ml-n1 mr-2 fas fa-gamepad theme--dark"></i> App Versions   list
                                                    </span></a><a href="/download"
                                                        className="ma-2 v-btn v-btn--contained v-btn--router theme--dark v-size--default ryu_orange"><span
                                                            className="v-btn__content"><i aria-hidden="true"
                                                                className="v-icon notranslate ml-n1 mr-2 fas fa-download theme--dark">
                                                            </i>
                                                            Download latest build

                                                        </span>
                                                    </a>
                                                </div>
                                            </span>
                                        </div>

                                    </div>

                                </div>
                                {/* </div> */}


                            </div>
                            <div className="row align-start">
                                <div className="col-md-4 col-12">
                                    <div className="elevation-0 transparent v-card v-sheet theme--light" id="elevation-0" >
                                        <div className="v-card__text text-center">
                                            {/* <i aria-hidden="true"
                                            className="v-icon notranslate --text text--lighten-2 fab fa-github theme--light"
                                            style={{ fontSize: "40px" }}>
                                                </i> */}
                                        </div>
                                        <div primary-title="" className="v-card__title layout justify-center">
                                            <div className="display-1 text-center" style={{ fontWeight: "bold" }}>Where can I grab it?</div>
                                        </div>
                                        <div className="v-card__text text-center">
                                            You can download the latest pre-compiled build <a href="/download" className="">here</a>, or you may
                                            build directly from the <b>iTuto</b> source code repository by following the guide <a href="/build"
                                                className="">here</a>.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="elevation-0 transparent v-card v-sheet theme--light">
                                        <div className="v-card__text text-center">
                                            {/* <i aria-hidden="true"
                                            className="v-icon notranslate --text text--lighten-2 fas fa-code theme--light"
                                            style={{ fontsize: "40px" }}>
                                                </i> */}
                                        </div>
                                        <div primary-title="" className="v-card__title layout justify-center">
                                            <div className="display-1 text-center" style={{ fontWeight: "bold" }}>How can I contribute?</div>
                                        </div>
                                        <div className="v-card__text text-center">Please visit the contributing tab for more information.</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="elevation-0 transparent v-card v-sheet theme--light">
                                        <div className="v-card__text text-center">
                                            {/* <i aria-hidden="true"
                                            className="v-icon notranslate --text text--lighten-2 fas fa-gamepad theme--light"
                                            style={{ fontsize: "40px" }}>
                                                </i> */}

                                        </div>
                                        <div primary-title="" className="v-card__title layout justify-center">
                                            <div className="display-1 text-center" style={{ fontWeight: "bold" }}>How well does it work?</div>
                                        </div>
                                        <div className="v-card__text text-center">As of September 2021, iTuto has been tested on nearly 3,400
                                            titles: ~3,000 boot past menus and into gameplay, with approximately 2,400 of those being considered
                                            playable. See the compatibility list <a href="https://github.com/Ryujinx/Ryujinx-Games-List"
                                                rel="noopener">here</a>.</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="v-parallax hidden-sm-and-down" style={{ height: "200px" }}>
                            <div className="v-parallax__image-container">
                                <img src="/images/Cover.png" alt="" className="v-parallax__image"
                                style={{ display: "block", opacity: "1", transform: "translate('-50%', '305px')" }} /></div>
                            <div className="v-parallax__content">
                                
                            </div>
                        </div>



                        <div className="container">
                            <div className="row align-center">
                                <div className="container">
                                    <div className="row align-start">
                                        <div className="col-md-4 col-12">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center">
                                                    {/* <i aria-hidden="true"
                                                    className="v-icon notranslate --text text--lighten-2 mr-4 fab fa-windows theme--light"
                                                    style={{ fontsize: "40px" }}>
                                                        </i> */}
                                                    {/* <i aria-hidden="true"
                                                        className="v-icon notranslate --text text--lighten-2 mr-4 fab fa-apple theme--light"
                                                        style={{ fontsize: "40px" }}></i>
                                                        <i aria-hidden="true"
                                                            className="v-icon notranslate --text text--lighten-2 fab fa-linux theme--light"
                                                            style={{ fontsize: "40px" }}></i> */}
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center">
                                                    <div className="display-1 text-center" style={{ fontWeight: "bold" }}>Platforms</div>
                                                </div>
                                                <div className="v-card__text text-center">iTuto is currently available for Windows and Linux (macOS
                                                    support is planned).</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center">
                                                    {/* <i aria-hidden="true"
                                                    className="v-icon notranslate --text text--lighten-2 fab fa-discord theme--light"
                                                    style={{ fontsize: "40px" }}>
                                                        </i> */}
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center">
                                                    <div className="display-1 text-center" style={{ fontWeight: "bold" }}>Discord</div>
                                                </div>
                                                <div className="v-card__text text-center">
                                                    You may reach <a href="https://discord.gg/VkQYXAZ" rel="noopener">iTuto
                                                        server</a>! You can get help,
                                                    as well as converse with fellow users and developers.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center"><i aria-hidden="true"
                                                    className="v-icon notranslate --text text--lighten-2 fab fa-nintendo-switch theme--light"
                                                    style={{ fontsize: "40px" }}></i></div>
                                                <div primary-title="" className="v-card__title layout justify-center">
                                                    <div className="display-1 text-center" style={{ fontWeight: "bold" }}>Why the name?</div>
                                                </div>
                                                <div className="v-card__text text-center">
                                                    The name iTuto is based on the name "Tutor."
                                                    More information can be found here.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="v-parallax hidden-sm-and-down" style={{ height: "200px" }}>
                            <div className="v-parallax__image-container"><img src="/images/Cover.png" alt="" className="v-parallax__image"
                                style={{ display: "block", opacity: "1", transform: "translate('-50%', '305px')" }} /></div>
                            <div className="v-parallax__content"></div>
                        </div>

                        <div className="container" id="moveAvatar">
                            <div className="row align-center">
                                <div className="container">
                                    <div className="row align-start justify-center">
                                        <div className="col col-12">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center"><GroupsIcon aria-hidden="true"
                                                    className="v-icon notranslate --text text--lighten-2 fas fa-users theme--light"
                                                    style={{ fontsize: "40px" }} /></div>
                                                <div primary-title="" className="v-card__title layout justify-center">
                                                    <div className="display-1 text-center" style={{ fontWeight: "bold" }}>Meet Our Team</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-start justify-center">
                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center">
                                                    <div className="v-avatar" ><img alt="gdkchan" style={{ height: "200px", minwidth: "200px", width: "200px" }}
                                                        src="/images/Avatar2.jpg" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center"><a
                                                    href="https://github.com/sayrsalad" rel="noopener"
                                                    className="headline text-center">Jose Angelo Arboleda</a></div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Lead Developer</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center">
                                                    <div className="v-avatar" ><img style={{ height: "200px", minwidth: "200px", width: "200px" }} alt="Ac_K"
                                                        src="/images/Avatar1.jpg" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center">
                                                    <a href="https://github.com/cardanyeee"
                                                        rel="noopener" className="headline text-center">Carl Daniel Villanueva</a></div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Web Designer</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center">
                                                    <div className="v-avatar"  ><img style={{ height: "200px", minwidth: "200px", width: "200px" }} alt="Thog"
                                                        src="/images/Avatar3.jpg" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center"><a href="https://github.com/Thog"
                                                    rel="noopener" className="headline text-center">Hashime Cassidy Carbajosa</a></div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Paper Manager</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center">
                                                    <div className="v-avatar"  ><img style={{ height: "200px", minwidth: "200px", width: "200px" }} alt="Thog"
                                                        src="/images/Avatar4.jpg" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center"><a href="https://github.com/Thog"
                                                    rel="noopener" className="headline text-center">Mark Joseph Casas</a></div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Developer</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </main >


    )
}

export default Welcome;