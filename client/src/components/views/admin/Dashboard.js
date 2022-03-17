import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

import './dashboard.scss'

import AdminHeader from '../../layout/admin/AdminHeader';
import MetaData from '../../layout/main/MetaData';
import Loader from '../../layout/main/Loader';
import Widget from '../../widget/widget'

import { getData } from '../../../actions/all_actions';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);

    const { loading } = useSelector(state => state.datas);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>

                    <AdminHeader />

                    <MetaData title={'Admin Dashboard'} styles={'footer p {color: #000000 !important;}'} />

                    {loading ? <Loader /> : (
                        <Fragment>

                            <div className="home-section">

                                <div className="container-fluid">
                                    {/* <div className="row mt-5 mb-4">
                                    <div className="col-xl-12 col-sm-12">
                                        <div className="card  bg-white o-hidden h-100">
                                            <div className="card-body">
                                                <div className="text-center card-font-size">Registered Users<br /> <b>{users && users.length}</b></div>
                                            </div>
                                            <Link className="card-footer  clearfix small z-1" to="/dashboard/movies">
                                                <span className="float-left">View Details</span>
                                                <span className="float-right">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}

                                    <div className="row pr-4 pt-4">

                                        <div className="col-xl-5 mb-3">
                                            <div className="card-body" id="welcomeMove">
                                                <div className="text-center card-font-size"><h1>Welcome, <b>{user.username}</b></h1></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                                {/* <div className="row pr-4 pt-4">

                                    </div> */}


                                <div className="row pr-4 pt-4">

                                    {/* <div className="col-xl-4 mb-3">
                                    <div className="card bg-white o-hidden h-100 border-0 shadow-sm">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Registered User<br /> <b>{users && users.length}</b></div>
                                        </div>
                                    </div>
                                </div> */}


                                    <div className="col-xl-4 mb-3">
                                        <div className="widgets">
                                            <Widget type="subject" />

                                        </div>

                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <div className="widgets" >
                                            <Widget type="user" />

                                        </div>

                                    </div>

                                    <div className="col-xl-4 mb-3">


                                        <div className="widgets">
                                            <Widget type="tutor" />

                                        </div>

                                    </div>


                                    <div className="col-xl-4 mb-3">


                                        <div className="widgets">
                                            <Widget type="male" />

                                        </div>

                                    </div>


                                    <div className="col-xl-4 mb-3">


                                        <div className="widgets">
                                            <Widget type="female" />

                                        </div>

                                    </div>

                                    <div className="col-xl-4 mb-3">


                                        <div className="widgets">
                                            <Widget type="other" />

                                        </div>

                                    </div>



                                    {/* <div className="col-xl-4 mb-3">
                                            <div className="card  bg-white o-hidden h-100 border-0 shadow-sm">
                                                <div className="card-body">
                                                    <div className="text-center card-font-size">Subjects<br /><b>{subs && subs.length}</b></div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-4 mb-3">
                                            <div className="card  bg-white o-hidden h-100 border-0 shadow-sm">
                                                <div className="card-body">
                                                    <div className="text-center card-font-size">Tutors<br /> <b>{tutors && tutors.length}</b></div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>

                                        <div className="row pr-4 pt-4">
                                        <div className="col-xl-3 mb-3">
                                            <div className="card  bg-white o-hidden h-100 border-0 shadow-sm">
                                                <div className="card-body">
                                                    <div className="text-center card-font-size">Male Users<br /> <b>{male && male}</b></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <div className="card  bg-white o-hidden h-100 border-0 shadow-sm">
                                                <div className="card-body">
                                                    <div className="text-center card-font-size">Female Users<br /> <b>{female && female}</b></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <div className="card  bg-white o-hidden h-100 border-0 shadow-sm">
                                                <div className="card-body">
                                                    <div className="text-center card-font-size">Others Users<br /> <b>{other && other}</b></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <div className="card  bg-white o-hidden h-100 border-0 shadow-sm">
                                                <div className="card-body">
                                                    <div className="text-center card-font-size">Prefer not to say Users<br /> <b>{pnts && pnts}</b></div>
                                                </div>
                                            </div>
                                        </div> */}



                                </div>


                            </div>




                        </Fragment>
                    )}
                </Fragment>
            )
            }
        </Fragment >
    )
}

export default Dashboard
