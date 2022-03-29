import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';


// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    registerables
} from "chart.js";
import { Doughnut, Line, Bar } from 'react-chartjs-2'
import '../dashboard.scss'

import AdminHeader from '../../../layout/admin/AdminHeader';
import MetaData from '../../../layout/main/MetaData';


// defaults.tooltips.enabled = false
// defaults.legend.position = 'bottom'


ChartJS.register(
    ...registerables
);


const Charts = () => {

    const { users } = useSelector(state => state.allUsers);

    const { male, female } = useSelector(state => state.datas);


    return (

        <Fragment>
            <AdminHeader />

            <MetaData title={'All courses'} styles={'html, body, .App { background-color:  !important; } .home-navbar {background: #141414 !important;} footer p {color: #000000 !important;}'} />
            <div className="home-section">

                <div className="container-fluid" id="subjectContainer">

                    <h1 className="h1 mb-2 text-gray-800">Reports</h1>


                    <p className="mb-4">Presented below are the report charts</p>


                    <div className="container-fluid">




                        {/* BAAAR CT */}

                        <div className="col-xl-12 mb-5" >

                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div className="card-header py-3">
                                    <h6 className="color1 m-0 font-weight-bold">Most Inquired Subject</h6>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body">
                                    <div className="chart-pie pt-4">

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


                        <div className="container-fluid">

                            <div className="row pr-4 pt-4">

                                {/* //Donut Chart */}

                                <div className="col-xl-4 mb-3" >

                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary"
                                            >
                                                <a href="/dashboard/tutor" style={{ textDecoration: "none" }}>
                                                    Male and Female Populations
                                                </a>
                                            </h6>


                                            {/* <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            Dropdown Button
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>  */}
                                        </div>
                                        {/* <!-- Card Body --> */}
                                        <div className="card-body">
                                            <h6 className="color1 m-0 font-weight-bold">
                                                <b>{users && users.length} </b>Total Users
                                            </h6>
                                            <div className="chart-pie pt-4">



                                                <Doughnut

                                                    data={{
                                                        labels: ['Female', 'Male'],
                                                        datasets: [
                                                            {
                                                                label: '# of votes',
                                                                data: [female && female, male && male],

                                                                backgroundColor: [
                                                                    '#FF6384',
                                                                    '#36A2EB',
                                                                    '#FFCE56    ',
                                                                    // '#4BC0C0',
                                                                    // '#9966FF',
                                                                    // '#FF9F40',
                                                                ],
                                                                borderColor: [
                                                                    'rgba(255, 99, 132, 1)',
                                                                    'rgba(54, 162, 235, 1)',
                                                                    'rgba(255, 206, 86, 1)',
                                                                    // 'rgba(75, 192, 192, 1)',
                                                                    // 'rgba(153, 102, 255, 1)',
                                                                    // 'rgba(255, 159, 64, 1)',
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

                                                                    gridLines: {
                                                                        color: 'white'
                                                                    }
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

                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Line Chart</h6>
                                        </div>
                                        {/* <!-- Card Body --> */}
                                        <div className="card-body">
                                            <div className="chart-pie pt-4">

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

                                <div className="card shadow mb-4">
                                    {/* <!-- Card Header - Dropdown --> */}
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Most Inquired Subject</h6>
                                    </div>
                                    {/* <!-- Card Body --> */}
                                    <div className="card-body">
                                        <div className="chart-pie pt-4">

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


                        <div className="container-fluid">

                            {/* BAAAR CT */}

                            <div className="col-xl-12 mb-3" >

                                <div className="card shadow mb-4">
                                    {/* <!-- Card Header - Dropdown --> */}
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Most Inquired Subject</h6>
                                    </div>
                                    {/* <!-- Card Body --> */}
                                    <div className="card-body">
                                        <div className="chart-pie pt-4">

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

                </div>


            </div>


        </Fragment >
    )
}

export default Charts
