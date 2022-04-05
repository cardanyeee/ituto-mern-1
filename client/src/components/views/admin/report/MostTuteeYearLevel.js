import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { MDBDataTableV5 } from 'mdbreact';




// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    registerables
} from "chart.js";
import { Pie } from 'react-chartjs-2'
import '../dashboard.scss'

import AdminHeader from '../../../layout/admin/AdminHeader';
import MetaData from '../../../layout/main/MetaData';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import jsPDF from 'jspdf';
import moment from 'moment';
import Loader from '../../../layout/main/Loader';


// defaults.tooltips.enabled = false
// defaults.legend.position = 'bottom'


ChartJS.register(
    ...registerables
);


// function pdfDownload ({


// });

const MostTuteeYearLevel = () => {

    const { users } = useSelector(state => state.allUsers);


    const { loading } = useSelector(state => state.datas);

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
                // actions:
                //     <Fragment>
                //         <Link to={`/dashboard/user/update/${allUsers._id}`} className="btn btn-primary py-1 px-2 me-3">
                //             <EditIcon />
                //         </Link>

                //     </Fragment>
            })
        })

        return data;


    }

    const pdfDonut = () => {

        const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

        const canvas = document.getElementById('mf-populations');

        const canvasImage = canvas.toDataURL('image/png', 1.0);


        var pdf = new jsPDF('landscape')


        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(40)
        pdf.text(15, 20, 'Tutee Per Year Level')
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(16)

        pdf.setFontSize(16)
        pdf.setFont("helvetica", "bolditalic")
        pdf.text(175, 200, `Data gathered as of ${DateGathered}`)


        pdf.addImage(canvasImage, 75, 30, 150, 150);
        pdf.save(`Tutee-YearLevel-${DateGathered}.pdf`);

    }




    //REPORT CHARTSS DOWNLOADS


    // const pdfLine = () => {

    //     const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

    //     const canvas = document.getElementById('line-populations');

    //     const canvasImage = canvas.toDataURL('image/png', 1.0);


    //     var pdf = new jsPDF('landscape')


    //     pdf.setFont("helvetica", "bold")
    //     pdf.setFontSize(40)
    //     pdf.text(15, 25, 'Male & Female Populations')
    //     pdf.setFont("helvetica", "normal")
    //     pdf.setFontSize(16)

    //     pdf.text(16, 35, `Male: ${male && male}`)
    //     pdf.text(80, 35, `Female: ${female && female}`)
    //     pdf.text(150, 35, `Total Users: ${users && users.length}`)

    //     pdf.setFontSize(16)
    //     pdf.setFont("helvetica", "bolditalic")
    //     pdf.text(175, 190, `Data gathered as of ${DateGathered}`)


    //     pdf.addImage(canvasImage, 10, 50, 280, 120);
    //     pdf.save('Line-Chart.pdf');

    // }

    // const pdfBar = () => {

    //     const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

    //     const canvas = document.getElementById('bar-populations');

    //     const canvasImage = canvas.toDataURL('image/png', 1.0);


    //     var pdf = new jsPDF('landscape')


    //     pdf.setFont("helvetica", "bold")
    //     pdf.setFontSize(40)
    //     pdf.text(15, 25, 'Male & Female Populations')
    //     pdf.setFont("helvetica", "normal")
    //     pdf.setFontSize(16)

    //     pdf.text(16, 35, `Male: ${male && male}`)
    //     pdf.text(80, 35, `Female: ${female && female}`)
    //     pdf.text(150, 35, `Total Users: ${users && users.length}`)

    //     pdf.setFontSize(16)
    //     pdf.setFont("helvetica", "bolditalic")
    //     pdf.text(175, 190, `Data gathered as of ${DateGathered}`)


    //     pdf.addImage(canvasImage, 10, 50, 280, 120);
    //     pdf.save('Bar-Chart.pdf');
    // }

    // const pdfAlldownload = () => {

    //     const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

    //     const canvas = document.getElementById('bar-populations');
    //     const canvasImage = canvas.toDataURL('image/png', 1.0);

    //     const mf = document.getElementById('mf-populations');
    //     const mfImage = mf.toDataURL('image/png', 1.0);

    //     const Line = document.getElementById('line-populations');
    //     const LineImage = Line.toDataURL('image/png', 1.0);


    //     var pdf = new jsPDF('landscape')


    //     //DONUT CHARTTTTTTTTTTT/////
    //     pdf.setFont("helvetica", "bold")
    //     pdf.setFontSize(40)
    //     pdf.text(15, 25, 'Male & Female Populations')
    //     pdf.setFont("helvetica", "normal")
    //     pdf.setFontSize(16)

    //     pdf.text(16, 35, `Male: ${male && male}`)
    //     pdf.text(80, 35, `Female: ${female && female}`)
    //     pdf.text(150, 35, `Total Users: ${users && users.length}`)

    //     pdf.setFontSize(16)
    //     pdf.setFont("helvetica", "bolditalic")
    //     pdf.text(175, 190, `Data gathered as of ${DateGathered}`)


    //     pdf.addImage(mfImage, 75, 50, 150, 120);

    //     //LINEEE CHARTTTTTTTTT//

    //     pdf.addPage()

    //     pdf.setFont("helvetica", "bold")
    //     pdf.setFontSize(40)
    //     pdf.text(15, 25, 'Male & Female Populations')
    //     pdf.setFont("helvetica", "normal")
    //     pdf.setFontSize(16)

    //     pdf.text(16, 35, `Male: ${male && male}`)
    //     pdf.text(80, 35, `Female: ${female && female}`)
    //     pdf.text(150, 35, `Total Users: ${users && users.length}`)

    //     pdf.setFontSize(16)
    //     pdf.setFont("helvetica", "bolditalic")
    //     pdf.text(175, 190, `Data gathered as of ${DateGathered}`)


    //     pdf.addImage(LineImage, 10, 50, 280, 120);



    //     //BAR CHARTTTTTTTTT//

    //     pdf.addPage()

    //     pdf.setFont("helvetica", "bold")
    //     pdf.setFontSize(40)
    //     pdf.text(15, 25, 'Male & Female Populations')
    //     pdf.setFont("helvetica", "normal")
    //     pdf.setFontSize(16)

    //     pdf.text(16, 35, `Male: ${male && male}`)
    //     pdf.text(80, 35, `Female: ${female && female}`)
    //     pdf.text(150, 35, `Total Users: ${users && users.length}`)

    //     pdf.setFontSize(16)
    //     pdf.setFont("helvetica", "bolditalic")
    //     pdf.text(175, 190, `Data gathered as of ${DateGathered}`)


    //     pdf.addImage(canvasImage, 10, 50, 280, 120);

    //     pdf.save('Reports.pdf');
    // }

    return (

        <Fragment>
            <AdminHeader />

            <MetaData title={'All courses'} styles={'html, body, .App { background-color:  !important; } .home-navbar {background: #141414 !important;} footer p {color: #000000 !important;}'} />
            <div className="home-section">
                {/* //Donut Chart */}
                <div className="container-fluid">

                    <div className="container-fluid" id="subjectContainer">


                        <h1 className="h1 mb-2 text-gray-800">Most Tutee Per Year Level</h1>

                        <div class="row align-start">
                            <div class="col-md-8 col-12">


                                <p className="mb-4">Presented below are the most count of tutees per year level</p>

                            </div>

                            <div className="row pr-4">
                                {/* LINE CHART */}

                                <div className="col-xl- mb-3" >


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
                                                                    <small className="pdf-icon"> 
                                                                        <FileDownloadIcon  role="button" />
                                                                        <b role="button" onClick={pdfDonut}>save as PDF</b>
                                                                       
                                                                    </small>

                                                                    </h6>

                                                                </div>
                                                                <div className="pdficon-align col-md-4 col-12">
                                                                   
                                                                

                                                                </div>
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
                                                                        data: ['12', '36', '21', '72'],

                                                                        backgroundColor: [
                                                                            "#50e991", "#0bb4ff", "#e6d800", "#e60049",
                                                                            // '#4BC0C0',
                                                                            // '#9966FF',
                                                                            // '#FF9F40',
                                                                        ],
                                                                        borderColor: [
                                                                            "#50e991", "#0bb4ff", "#e6d800", "#e60049",
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




                        </div>






                    </div>







                </div>

            </div>





        </Fragment >
    )
}

export default MostTuteeYearLevel
