import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { MDBDataTableV5 } from 'mdbreact';


// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    registerables
} from "chart.js";
// import { Doughnut, Line, Bar } from 'react-chartjs-2'
import './dashboard.scss'

import AdminHeader from '../../layout/admin/AdminHeader';
import MetaData from '../../layout/main/MetaData';
import Loader from '../../layout/main/Loader';
import Widget from '../../widget/widget';

import { allUsers } from '../../../actions/authActions';


import { getData } from '../../../actions/all_actions';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Doughnut } from 'react-chartjs-2'
import jsPDF from 'jspdf';
import moment from 'moment';

// import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';


// defaults.tooltips.enabled = false
// defaults.legend.position = 'bottom'


ChartJS.register(
    ...registerables
);


const Dashboard = () => {

    const { datas, male, female } = useSelector(state => state.datas);

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

                { label: 'Firstname', field: 'Firstname', width: 210 },
                { label: 'Lastname', field: 'Lastname', width: 150 },
                { label: 'Username', field: 'Username', width: 230 },
                { label: 'Gender', field: 'Gender', width: 230 },
                { label: 'Email', field: 'Email', width: 230 },
                { label: 'Role', field: 'Role', width: 230 },
                { label: 'Phone', field: 'Phone', width: 230 },
                { label: 'Time', field: 'Time', width: 240 },
                { label: 'Actions', field: 'actions', width: 100 }

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
                actions:
                    <Fragment>
                        <Link to={`/dashboard/user/update/${allUsers._id}`} className="btn btn-primary py-1 px-2 me-3">
                            <EditIcon />
                        </Link>

                    </Fragment>
            })
        })

        return data;

    }


    const pdfDonut = () => {

        const columns = [
            { title: "Male", field: male, },
            { title: "Female", field: female, },

        ]

        const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

        const canvas = document.getElementById('mf-populations');

        const canvasImage = canvas.toDataURL('image/png', 1.0);


        let pdf = new jsPDF();


        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(40)
        pdf.text(15, 25, 'Male & Female Populations')
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(16)

        pdf.text(16, 35, `Male: ${male && male}`)
        pdf.text(80, 35, `Female: ${female && female}`)
        pdf.text(150, 35, `Total Users: ${users && users.length}`)


        pdf.setFontSize(16)
        pdf.setFont("helvetica", "bolditalic")
        pdf.text(100, 250, `Data gathered as of ${DateGathered}`)

        pdf.addImage(canvasImage, 15, 50, 180, 160);

        pdf.addPage()

        pdf.text("Course Details", 20, 10)
        pdf.autoTable({
            // columnStyles: {
            //     0: { cellWidth: 20 },
            //     1: { cellWidth: 30 },    
            //     2: { cellWidth: 30 },
            //     3: { cellWidth: 20 },
            //     4: { cellWidth: 20 },
            //     5: { cellWidth: 20 },   
            //     6: { cellWidth: 20 },
            //     7: { cellWidth: 20 },
            //     // etc   
            // },   
            margin: { top: 25 },
            theme: "striped",
            columns: columns.map(col => ({ ...col, dataKey: col.field })),
            body: datas
        })
        pdf.save('mf-populations.pdf');

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

                                            <div className="greeting-font card shadow mb-4">

                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div className="color1 card-header py-3">
                                                    <h5 className="greeting-font m-0 font-weight-bold" id="Username">Welcome <b>{user.username}!</b></h5>
                                                </div>
                                                {/* <!-- Card Body --> */}






                                                <div className="no-card col-sm-4 col-md-2 col-12 align-items-center text-center" id="tryspan">
                                                    <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                        <div className="v-card__text text-center" id="picturePad">
                                                            <div className="v-avatar">
                                                                <img style={{ height: "250px", width: "250px", minHeight: "100%", maxWidth: "100%" }}
                                                                    src={user.avatar.url} alt={user.avatar.public_id} className="g-image" />
                                                            </div>
                                                        </div>
                                                        <div primary-title="" className="v-card__title layout justify-center" >
                                                            <div className="color1 headline text-center" target="_blank" rel="noreferrer" >
                                                                {user.username}
                                                            </div>
                                                        </div>

                                                        <div primary-title="" className="v-card__title layout justify-center" >

                                                            <h6><b>{user.email}</b></h6>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        {/* WWWIDGETSSSSSSSSS */}

                                        <div className="col-xl-8 mb-3" >

                                            <div className="row pr-4">

                                                <div className="col-xl-4 mb-3">
                                                    <div className="widgets">
                                                        <Widget type="subject" />

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
                                                        <Widget type="other" />

                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>



                                </div>
                                {/* USERS TABLES */}
                                <div className="container-fluid">

                                    <div className="row pr-4 pt-4">


                                        <div className="col col-lg-8">

                                            <div className="card shadow mb-4">
                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div className="card-header py-3">
                                                    <h6 className="color1 m-0 font-weight-bold">REGISTERED USERS</h6>
                                                </div>
                                                {/* <!-- Card Body --> */}

                                                {/* USER DATA SECTION */}


                                                <div className="table-responsive">
                                                    <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">

                                                        <Fragment>
                                                            {loading ? <Loader /> : (
                                                                <MDBDataTableV5 className="adjust-table"
                                                                    data={setUsers()}
                                                                    striped
                                                                    hover
                                                                    order={['Date', 'asc']}

                                                                />
                                                            )}
                                                        </Fragment>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>



                                        {/* DONUTTTT SECTIONNNNN*/}
                                        <div className="col col-lg-4">

                                            <div className="card shadow mb-4">
                                                {/* <!-- Card TITLE*/}
                                                <div className="card-header">
                                                    <div className="row align-center">
                                                        <div className="container">
                                                            <div className="row align-start">
                                                                <div className="col-md-8 col-12">
                                                                    <h6 className="color1 mt-2 font-weight-bold">
                                                                        Male and Female Populations
                                                                    </h6>
                                                                    <h6 className="color1 m-0 font-weight-bold">
                                                                        <b>{users && users.length} </b>Total Users
                                                                    </h6>
                                                                </div>
                                                                <div className="pdficon-align col-md-4 col-12">
                                                                    <FileDownloadIcon className="pdf-icon" role="button" onClick={pdfDonut} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Card Body --> */}
                                                <div className="card-body">

                                                    <div className="chart-pie pt-4">

                                                        <Doughnut id="mf-populations"

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
                                                            height={400}
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



