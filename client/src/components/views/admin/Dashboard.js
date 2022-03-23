import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MDBDataTableV5 } from 'mdbreact';

// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    registerables 
} from "chart.js";
import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2'
import './dashboard.scss'

import AdminHeader from '../../layout/admin/AdminHeader';
import MetaData from '../../layout/main/MetaData';
import Loader from '../../layout/main/Loader';
import Widget from '../../widget/widget';

import { allUsers } from '../../../actions/authActions';


import { getData } from '../../../actions/all_actions';


// defaults.tooltips.enabled = false
// defaults.legend.position = 'bottom'


ChartJS.register(
  ...registerables
);


const Dashboard = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);

    const { users } = useSelector(state => state.allUsers);

    const { loading } = useSelector(state => state.datas);

    useEffect(() => {
        dispatch(getData());
        dispatch(allUsers());
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
                { label: 'Time', field: 'Time', width: 230, sort: 'asc' }

            ],
            rows: []
        }

        users.forEach(allUsers => {
            data.rows.push({
                Firstname: allUsers.firstname,
                Lastname: allUsers.lastname,
                Username: allUsers.username,
                Gender: allUsers.gender,
                Email: allUsers.email,
                Role: allUsers.role,
                Phone: allUsers.phone,
                Time: allUsers.createdAt,
            })
        })

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

                            <div className="home-section table-responsive">

                                <div className="container-fluid">

                                    <div className="row pr-4 pt-4">

                                        <div className="col-xl-4 mb-3" >

                                            <div class="card shadow mb-4">
                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div class="card-header py-3">
                                                    <h2 class="m-0 font-weight-bold text-primary" id="Username">Welcome <b>{user.username}!</b></h2>
                                                </div>
                                                {/* <!-- Card Body --> */}
                                                <div className="d-flex flex-column align-items-center text-center p-3 py-4">
                                                    <img className="rounded" width="200" src={user.avatar.url} alt={user.avatar.public_id} />
                                                    <span className="font-weight-bold mt-4">{user.username}</span>
                                                    <span className="text-black-50">{user.email}</span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-8 mb-3" >

                                            <div className="row pr-4">

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
                                        </div>




                                    </div>



                                </div>

                                {/* WIDGETS */}





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
                                                    <h6 class="m-0 font-weight-bold text-primary">Male and Female Populations</h6>
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

                                <div className="container-fluid">

                                    {/* BAAAR CT */}

                                    <div className="col-xl-12 mb-3" >

                                        <div class="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div class="card-header py-3">
                                                <h6 class="m-0 font-weight-bold text-primary">MOST INQUIRED SUBJECT</h6>
                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div class="card-body">
                                                <div class="chart-pie pt-4">

                                                    <Bar
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
                        </Fragment>
                    )}
                </Fragment>
            )
            }
        </Fragment >
    )
}

export default Dashboard



