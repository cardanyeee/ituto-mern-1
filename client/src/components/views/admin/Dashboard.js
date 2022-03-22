import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MDBDataTableV5 } from 'mdbreact';

// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    TimeScale, //Import timescale instead of category for X axis
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale
} from "chart.js";



import { Pie, Doughnut, Line } from 'react-chartjs-2'
import './dashboard.scss'

import AdminHeader from '../../layout/admin/AdminHeader';
import MetaData from '../../layout/main/MetaData';
import Loader from '../../layout/main/Loader';
import Widget from '../../widget/widget';

import { clearErrors } from '../../../actions/authActions';

import { getData } from '../../../actions/all_actions';


// defaults.tooltips.enabled = false
// defaults.legend.position = 'bottom'


ChartJS.register(
    TimeScale, //Register timescale instead of category for X axis
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale
);

const Dashboard = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);


    const { loading, users, error } = useSelector(state => state.datas);

    useEffect(() => {
        dispatch(getData());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch]);


    const setUsers = () => {

        const data = {
            columns: [

                { label: 'Firstname', field: 'Firstname', width: 210, sort: 'asc' },
                { label: 'Lastname', field: 'Lastname', width: 150, sort: 'asc' },
                { label: 'Username', field: 'Username', width: 230, sort: 'asc' },
                { label: 'Gender', field: 'Gender', width: 230, sort: 'asc' },
                { label: 'Email', field: 'Email', width: 230, sort: 'asc' },
                { label: 'Role', field: 'Role', width: 230, sort: 'asc' },
                { label: 'Phone', field: 'Phone', width: 230, sort: 'asc' },

            ],
            rows: []
        }

        users.forEach(users => {
            data.rows.push({
                Firstname: users.firstname,
                Lastname: users.lastname,
                Username: users.username,
                Gender: users.gender,
                Email: users.email,
                Role: users.role,
                Phone: users.phone,

            });
        });

        return data;
    }



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

                                    <div className="row pr-4 pt-4">

                                        <div className="col-xl-5 mb-3">
                                            <div className="card-body" id="welcomeMove">
                                                <div className="text-center card-font-size"><h1>Welcome, <b>{user.username}!</b></h1></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* WIDGETS */}


                                <div className="row pr-4 pt-4">

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

                                </div>



                                {/* USERS TABLES */}
                                <div className="container-fluid">

                                    <div className="row pr-4 pt-4">


                                        <div className="col col-lg-12">

                                            <div class="card shadow mb-4">
                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div class="card-header py-3">
                                                    <h6 class="m-0 font-weight-bold text-primary">REGISTERED USERS</h6>
                                                </div>
                                                {/* <!-- Card Body --> */}
                                                <div class="card-body">

                                                    {/* USER DATA SECTION */}


                                                    <div className="table-responsive">
                                                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">

                                                            <Fragment>
                                                                {loading ? <Loader /> : (
                                                                    <MDBDataTableV5
                                                                        data={setUsers()}
                                                                        striped
                                                                        hover
                                                                    />
                                                                )}
                                                            </Fragment>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="container-fluid">

                                    <div className="row pr-4 pt-4">

                                        {/* //Donut Chart */}

                                        <div className="col-xl-4 mb-3" >

                                            <div class="card shadow mb-4">
                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div class="card-header py-3">
                                                    <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                                </div>
                                                {/* <!-- Card Body --> */}
                                                <div class="card-body">
                                                    <div class="chart-pie pt-4">

                                                        <Doughnut

                                                            data={{
                                                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                                                datasets: [
                                                                    {
                                                                        label: '# of votes',
                                                                        data: [12, 19, 3, 5, 2, 3],

                                                                        backgroundColor: [
                                                                            '#FF6384',
                                                                            '#36A2EB',
                                                                            '#FFCE56    ',
                                                                            '#4BC0C0',
                                                                            '#9966FF',
                                                                            '#FF9F40',
                                                                        ],
                                                                        borderColor: [
                                                                            'rgba(255, 99, 132, 1)',
                                                                            'rgba(54, 162, 235, 1)',
                                                                            'rgba(255, 206, 86, 1)',
                                                                            'rgba(75, 192, 192, 1)',
                                                                            'rgba(153, 102, 255, 1)',
                                                                            'rgba(255, 159, 64, 1)',
                                                                        ],
                                                                        borderWidth: 1,
                                                                    },
                                                                    // {
                                                                    //   label: 'Quantity',
                                                                    //   data: [47, 52, 67, 58, 9, 50],
                                                                    //   backgroundColor: 'orange',
                                                                    //   borderColor: 'red',
                                                                    // },
                                                                ],
                                                            }}
                                                            height={300}
                                                            width={600}
                                                            options={{
                                                                maintainAspectRatio: false,
                                                                scales: {
                                                                    yAxes: [
                                                                        {
                                                                            ticks: {
                                                                                beginAtZero: true,
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                                legend: {
                                                                    labels: {
                                                                        fontSize: 25,
                                                                    },
                                                                },
                                                            }}
                                                        />

                                                    </div>

                                                </div>
                                            </div>


                                        </div>

                                        {/* LINE CHART */}

                                        <div className="col-xl-8 mb-3" >

                                            <div class="card shadow mb-4">
                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div class="card-header py-3">
                                                    <h6 class="m-0 font-weight-bold text-primary">Line Chart</h6>
                                                </div>
                                                {/* <!-- Card Body --> */}
                                                <div class="card-body">
                                                    <div class="chart-pie pt-4">

                                                        <Line
                                                            data={{
                                                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                                                datasets: [
                                                                    {
                                                                        label: '# of votes',
                                                                        data: [12, 19, 3, 5, 2, 3],

                                                                        backgroundColor: [
                                                                            '#FF6384',
                                                                            '#36A2EB',
                                                                            '#FFCE56    ',
                                                                            '#4BC0C0',
                                                                            '#9966FF',
                                                                            '#FF9F40',
                                                                        ],
                                                                        borderColor: [
                                                                            'rgba(255, 99, 132, 1)',
                                                                            'rgba(54, 162, 235, 1)',
                                                                            'rgba(255, 206, 86, 1)',
                                                                            'rgba(75, 192, 192, 1)',
                                                                            'rgba(153, 102, 255, 1)',
                                                                            'rgba(255, 159, 64, 1)',
                                                                        ],
                                                                        borderWidth: 1,
                                                                    },
                                                                    // {
                                                                    //   label: 'Quantity',
                                                                    //   data: [47, 52, 67, 58, 9, 50],
                                                                    //   backgroundColor: 'orange',
                                                                    //   borderColor: 'red',
                                                                    // },
                                                                ],
                                                            }}
                                                            height={300}
                                                            width={600}
                                                            options={{
                                                                maintainAspectRatio: false,
                                                                scales: {
                                                                    yAxes: [
                                                                        {
                                                                            ticks: {
                                                                                beginAtZero: true,
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                                legend: {
                                                                    labels: {
                                                                        fontSize: 25,
                                                                    },
                                                                },
                                                            }}
                                                        />

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
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



