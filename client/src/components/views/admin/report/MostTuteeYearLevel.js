import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBDataTableV5 } from 'mdbreact';

import {
    Chart as ChartJS,
    registerables
} from "chart.js";
import { Pie } from 'react-chartjs-2'
import '../dashboard.scss'

import AdminHeader from '../../../layout/admin/AdminHeader';
import MetaData from '../../../layout/main/MetaData';

import Loader from '../../../layout/main/Loader';

import { topratedYearLevel } from '../../../../actions/reportActions';


import { getData } from '../../../../actions/all_actions';


ChartJS.register(
    ...registerables
);



const MostTuteeYearLevel = () => {
    const { users } = useSelector(state => state.allUsers);
    const { topYearLevel } = useSelector(state => state.topYearLevel);
    const { loading } = useSelector(state => state.datas);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
        dispatch(topratedYearLevel());
    }, [dispatch]);
    const sortArray = ["First", "Second", "Third", "Fourth"];
    const sorted = topYearLevel.sort((a, b) => sortArray.indexOf(a._id) - sortArray.indexOf(b._id));
    let yearLevel = sorted.map(year => year.count)

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
            })
        })

        return data;


    }

    // const pdfDonut = () => {

    //     const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

    //     const canvas = document.getElementById('mf-populations');

    //     const canvasImage = canvas.toDataURL('image/png', 1.0);


    //     var pdf = new jsPDF('landscape')


    //     pdf.setFont("helvetica", "bold")
    //     pdf.setFontSize(40)
    //     pdf.text(15, 20, 'Tutee Per Year Level')
    //     pdf.setFont("helvetica", "normal")
    //     pdf.setFontSize(16)

    //     pdf.setFontSize(16)
    //     pdf.setFont("helvetica", "bolditalic")
    //     pdf.text(175, 200, `Data gathered as of ${DateGathered}`)


    //     pdf.addImage(canvasImage, 75, 30, 150, 150);
    //     pdf.save(`Tutee-YearLevel-${DateGathered}.pdf`);

    // }




    //REPORT CHARTSS DOWNLOADS


    return (

        <Fragment>
            <AdminHeader />

            <MetaData title={'All courses'} styles={'html, body, .App { background-color:  !important; } .home-navbar {background: #141414 !important;} footer p {color: #000000 !important;}'} />

            <Fragment>


                {loading ? <Loader /> : (
                    <div className="home-section">
                        {/* //Donut Chart */}
                        <div className="container-fluid">

                            <div className="container-fluid" id="subjectContainer">


                                <h1 className="h1 mb-2 text-gray-800">Most Tutee Per Year Level</h1>

                                <div className="row align-start">
                                    <div className="col-md-8 col-12">


                                        <p className="mb-4">Presented below are the most count of tutees per year level</p>

                                    </div>

                                    <div className="row pr-4">
                                        {/* LINE CHART */}

                                        <div className="col-xl- mb-3" >


                                            <div className="row pr-4 pt-4">


                                                <div className="col col-lg-8">

                                                    <div className="card shadow mb-4">
                                                        {/* <!-- Card Header - Dropdown --> */}
                                                        <div className="card-header">
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
                                                                <div className="container" style={{ color: "#4FBD95", textDecoration: "none" }}>
                                                                    <div className="btn" role="button" style={{ backgroundColor: "#2A4250" }}>
                                                                        <i className="color-report fas fa-print fa-xs" >
                                                                            <span className="m-0 font-weight-bold" >
                                                                                &nbsp;CSV

                                                                            </span>
                                                                        </i>
                                                                    </div>
                                                                    &nbsp;

                                                                    &nbsp;

                                                                    <div className="btn" role="button" style={{ backgroundColor: "#9FDACA" }}>
                                                                        <i className="color-report fas fa-print fa-xs" >
                                                                            <span className="m-0 font-weight-bold" >
                                                                                &nbsp;Chart PDF

                                                                            </span>
                                                                        </i>
                                                                    </div>

                                                                    &nbsp;
                                                                    <div className="btn" role="button" style={{ backgroundColor: "#2A4250" }}>
                                                                        <i className="color-report fas fa-print fa-xs" >
                                                                            <span className="m-0 font-weight-bold" >
                                                                                &nbsp;PDF

                                                                            </span>
                                                                        </i>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- Card Body --> */}
                                                        <div className="card-body">

                                                            <div className="chart-pie pt-4">

                                                                <Pie id="mf-populations"

                                                                    data={{
                                                                        labels: ['First year', 'Second Year', 'Third Year', 'Fourth Year'],
                                                                        datasets: [
                                                                            {
                                                                                label: '# of votes',
                                                                                data: yearLevel,

                                                                                backgroundColor: [
                                                                                    "#50e991", "#0bb4ff", "#e6d800", "#FD7F6F",
                                                                                    // '#4BC0C0',
                                                                                    // '#9966FF',
                                                                                    // '#FF9F40',
                                                                                ],
                                                                                borderColor: [
                                                                                    "#50e991", "#0bb4ff", "#e6d800", "#FD7F6F",
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
                                                                        render: 'percentage',

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






                            </div>







                        </div>

                    </div>

                )}



            </Fragment>






        </Fragment >
    )
}

export default MostTuteeYearLevel
