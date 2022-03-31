import React from 'react';

import './welcome.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import BadgeIcon from '@mui/icons-material/Badge';

// Core modules imports are same as usual
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// Styles must use direct files imports



const Welcome = () => {

    return (


        <main className="v-main" id="v-main-pad" data-v-5a4eb5ab="" data-booted="true">

            <div className="teamcolor v-main__wrap">
                <div>
                    <section>
                        <div fluid="" className="v-parallax" style={{ height: '750px' }}>
                            <div className="v-parallax__image-container">
                                <img src="/images/Cover.png" alt="Parallax wallpaper" className="v-parallax__image"
                                />

                                <div className="v-parallax__content" >
                                    <div className="row align-center justify-center">
                                        <div className="text-center col">

                                            <img alt="Ryujinx" src="/images/ituto_logo_nobg.png" width="250"

                                                data-src="images/lol.png"
                                                data-srcset="images/lol.png"
                                            />
                                            <p className="display-cover" id="font-title">Discover students who are interested in sharing their attained skills and knowledge</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="teamcolor container" id="what-is-ituto?">
                            <div className="row mt-5 align-center" >
                                <div className="container container--fluid">
                                    <div fluid="" className="v-parallax" style={{ height: '750px' }}>
                                        <div className="v-parallax__image-container">
                                            <img src="/images/app-mockup-1.PNG" alt="Parallax wallpaper" className="v-parallax__image" id="banner"
                                            />

                                            <div className="appTitle v-parallax__content" >
                                                <div className="row align-center justify-center">
                                                    <div className="text-center col">


                                                        <div className="whatisHeader" id="bold">
                                                            What is iTuto?
                                                        </div>

                                                        <span className="subheading">
                                                            <small>
                                                                <em>
                                                                    (Ay-Too-Toh)
                                                                </em>

                                                            </small>
                                                            <br />
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                                            <p className="my-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.</p>
                                                            <p className="my-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                                            <p className="my-2">Lorem ipsum dolor sit amet.</p>

                                                            <div className="row align-start">
                                                                <div className="col-md-12 col-12">
                                                                    <div className="elevation-0 transparent v-card v-sheet theme--light" id="elevation-0" >

                                                                        {/* <i aria-hidden="true"
                                                className="v-icon notranslate --text text--lighten-2 fab fa-github theme--light"
                                                style={{ fontSize: "40px" }}>
                                                    </i> */}
                                                                    </div>

                                                                    {/* <img src="images/app-mockup.png" width="380" /> */}



                                                                </div>


                                                            </div>
                                                            <div className="text-center">

                                                                <a href="https://drive.google.com/file/d/1mKA_qDNRKAK8Ym63LqMtewR2vT2Cwwu1/view" target="_blank" rel="noreferrer"
                                                                    className="ma-2 v-btn v-btn--contained v-btn--router theme--dark v-size--default ryu_orange">
                                                                    <span className="v-btn__content">
                                                                        <i aria-hidden="true"
                                                                            className="v-icon notranslate ml-n1 mr-2 fas fa-download theme--dark">
                                                                        </i>
                                                                        Download

                                                                    </span>
                                                                </a>

                                                                <a href="/#features" className="ma-2 v-btn v-btn--contained theme--dark v-size--default ryu_blue" id="compat">
                                                                    <span className="v-btn__content"><i aria-hidden="true"
                                                                        className="v-icon notranslate ml-n1 mr-2 fas fa-gamepad theme--dark"></i>Learn More
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </span>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>

                        {/* MOVE 1 DIV ABOVEEEEEEEE */}


                        <div className="col1 v-parallax hidden-sm-and-down" style={{ height: "200px" }} >

                            <div className="v-parallax__image-container" id="features">

                            </div>
                            <div className="v-parallax__content" >
                                <div className="teamHeader text-center" style={{ fontWeight: "bold" }} >Features</div>
                            </div>
                        </div>



                        <div className="swiper-color col-12">
                            <div className="elevation-0 transparent v-card v-sheet theme--light" >

                                <div primary-title="" className="v-card__title layout justify-center">

                                    <div className="row align-center">
                                        <div className="container">
                                            <div className="row align-start">
                                                <div className="col-md-12 col-12">

                                                    <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                        <Swiper
                                                            slidesPerView={1}
                                                            spaceBetween={30}
                                                            effect={"fade"}
                                                            loop={true}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            pagination={{
                                                                clickable: true,
                                                            }}
                                                            navigation={true}
                                                            modules={[EffectFade, Autoplay, Pagination, Navigation]}
                                                            className="mySwiper">


                                                            {/* Step 1 */}
                                                            <SwiperSlide>
                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Download the App
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/swiper-mockup1.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>


                                                            {/* Step 2 */}
                                                            <SwiperSlide>
                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Step 2
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/app-mockup2.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>

                                                            {/* Step 3 */}
                                                            <SwiperSlide>
                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Step 3
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/app-mockup3.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>

                                                            {/* Step 4*/}
                                                            <SwiperSlide>
                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Step 4
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/app-mockup4.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>

                                                            {/* Step 5 */}
                                                            <SwiperSlide>

                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Step 5
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/app-mockup5.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </SwiperSlide>

                                                            {/* Step 6 */}
                                                            <SwiperSlide>

                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Step 6
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/app-mockup6.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </SwiperSlide>

                                                            {/* Step 7 */}
                                                            <SwiperSlide>

                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Step 7
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/app-mockup7.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </SwiperSlide>

                                                            {/* Step 8 */}
                                                            <SwiperSlide>
                                                                <div className="row align-center">
                                                                    <div className="container">
                                                                        <div className="row align-start">
                                                                            <div className="col-md-4 col-12">

                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="swiper-display" id="swiperDisplay">
                                                                                            Step 8
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-align col-md-8 col-12">
                                                                                <img className="swiperImg" src="images/app-mockup8.png" alt="app-mockup" width="200" />
                                                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                                                    <div className="v-card__text text-center">
                                                                                        <div className="display-1 text-center" style={{ fontWeight: "bold", paddingTop: "10%" }}>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div primary-title="" className="v-card__title layout justify-center">

                                                                                    </div>
                                                                                    <div className="swiper-content v-card__text text-center">
                                                                                        <p style={{ paddingRight: "10%" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </SwiperSlide>


                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col1 col-12">
                            <div className="elevation-0 transparent v-card v-sheet theme--light" >

                                <div primary-title="" className="v-card__title layout justify-center">

                                    <div className="row align-center">
                                        <div className="container">
                                            <div className="row align-start">
                                                <div className="col1 col-md-4 col-12">

                                                    <div className="elevation-0 transparent v-card v-sheet theme--light">

                                                        <div className="v-card__text text-center">

                                                            <CloudDownloadIcon fontSize="large" />
                                                        </div>
                                                        <div primary-title="" className="col1 v-card__title layout justify-center">
                                                            <div className="display-straight text-center" style={{ fontWeight: "bold" }}>Where can i download?</div>
                                                            <div className="display-1 text-center" style={{ fontWeight: "bold" }}>
                                                                {/* <img src="images/app-mockup.png" alt="app-mockup" width="300" /> */}
                                                            </div>
                                                        </div>
                                                        <div className="col1 v-card__text text-center">
                                                            <p>
                                                                You can download the iTuto Service application on the website itself. Upon clicking
                                                                the download button it will redirect visitors to a google drive account. This application will help you find tutors inside the Technological university of the Philippines - Taguig Campus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col2 col-md-4 col-12">
                                                    <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                        <div className="v-card__text text-center">
                                                            <LiveHelpIcon fontSize="large" />

                                                        </div>
                                                        <div primary-title="" className="col2 v-card__title layout justify-center">
                                                            <div className="display-straight text-center" style={{ fontWeight: "bold" }}>How to participate?</div>
                                                            <div className="display-1 text-center" style={{ fontWeight: "bold" }}>
                                                                {/* <img src="images/app-mockup.png" alt="app-mockup" width="300" /> */}
                                                            </div>
                                                        </div>
                                                        <div className="col2 v-card__text text-center">
                                                            <p>
                                                                After downloading the application, you can either sign-up as Tutor or Tutee.  offer for you. You can help the students of the technological university of the Philippines- Taguig campus who have difficulty with their subjects to catch up and even better understand their lessons.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col1 col-md-4 col-12">
                                                    <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                        <div className="v-card__text text-center">
                                                            <BadgeIcon fontSize="large" />
                                                        </div>
                                                        <div primary-title="" className="col1 v-card__title layout justify-center">
                                                            <div className="display-straight text-center" style={{ fontWeight: "bold" }}>Why does it called iTuto?</div>
                                                            <div className="display-1 text-center" style={{ fontWeight: "bold" }}>
                                                                {/* <img src="images/app-mockup.png" alt="app-mockup" width="300" /> */}
                                                            </div>
                                                        </div>
                                                        <div className="col1 v-card__text text-center">
                                                            <p>
                                                                The name <b>iTuto</b> is loosely based on the english word <i>Tutor</i> and filipino word <i>Matuto</i> which means <i>"to learn"</i>. Whereas the letter <i>i</i> represents the students that are finding tutors. Resulting to an amalgamation of the word <b>iTuto</b> that can be defined as <i>learning among the students.</i>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* MEET THE TEAMMMMM */}


                        <div className="v-parallax hidden-sm-and-down" style={{ height: "200px" }}>

                            <div className="teamcolor v-parallax__content" id="about">
                                <div className="row align-start justify-center">
                                    <div className="col col-12">
                                        <div className="elevation-0 transparent v-card v-sheet theme--light">
                                            <div className="v-card__text text-center" id="picturePad">
                                                <i aria-hidden="true"
                                                    className=" v-icon notranslate --text text--lighten-2 fas fa-users  "
                                                    style={{ fontSize: '30px', color: '#2F4858' }}>
                                                </i>
                                            </div>
                                            <div primary-title="" className="v-card__title layout justify-center" >
                                                <div className="teamHeader text-center" style={{ fontWeight: "bold" }}>Meet Our Team</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container" id="moveAvatar">
                            <div className="row align-center">
                                <div className="container" id="teamColor">
                                    <div className="row align-start justify-center">
                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center" id="picturePad">
                                                    <div className="v-avatar"><img alt="gdkchan" style={{ height: "200px", minWidth: "200px", width: "200px" }}
                                                        src="/images/teamDp-2.png" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center" >
                                                    <a href="https://github.com/sayrsalad"
                                                        className="color1 headline text-center" target="_blank" rel="noreferrer" >
                                                        Jose Angelo Arboleda
                                                    </a>
                                                </div>

                                                <div primary-title="" className="v-card__title layout justify-center" >

                                                    <h6><b>Project Manager / Lead Developer / Mobile Developer</b></h6><br />

                                                </div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center" id="picturePad">
                                                    <div className="v-avatar" ><img style={{ height: "200px", minwidth: "200px", width: "200px" }} alt="Ac_K"
                                                        src="/images/teamDp-3.png" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center">
                                                    <a href="https://github.com/cardanyeee"
                                                        className="color1 headline text-center" target="_blank" rel="noreferrer">Carl Daniel Villanueva
                                                    </a>
                                                </div>

                                                <div primary-title="" className="v-card__title layout justify-center" >

                                                    <h6><b>Web Designer / Web Developer / Technical Support</b></h6><br />

                                                </div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center" id="picturePad">
                                                    <div className="v-avatar"><img style={{ height: "200px", minwidth: "200px", width: "200px" }} alt="Thog"
                                                        src="/images/teamDp-1.png" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="subRole1 v-card__title layout justify-center"><a href="https://github.com/arcane3"
                                                    className="color1 headline text-center" target="_blank" rel="noreferrer" >Cassidy Hashime  Carbajosa</a></div>

                                                <div primary-title="" className="v-card__title layout justify-center" >

                                                    <h6><b>Paper Manager / External Relation Officer </b></h6><br />

                                                </div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-md-2 col-12" id="tryspan">
                                            <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                <div className="v-card__text text-center" id="picturePad">
                                                    <div className="v-avatar"  ><img style={{ height: "200px", minwidth: "200px", width: "200px" }} alt="Thog"
                                                        src="/images/teamDp-4.png" className="g-image" />
                                                    </div>
                                                </div>
                                                <div primary-title="" className="v-card__title layout justify-center"><a href="https://github.com/x0x0123"
                                                    className="color1 headline text-center" target="_blank" rel="noreferrer">Mark Joseph Casas</a></div>

                                                <div primary-title="" className="subRole2 v-card__title layout justify-center" >

                                                    <b>External Relation Officer</b>

                                                </div>
                                                <div className="v-card__text text-center">
                                                    <p className="title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>

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