import React, { Fragment } from 'react';





// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    registerables
} from "chart.js";
import { Bar } from 'react-chartjs-2'
import '../dashboard.scss'

import AdminHeader from '../../../layout/admin/AdminHeader';
import MetaData from '../../../layout/main/MetaData';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import jsPDF from 'jspdf';
import moment from 'moment';


// defaults.tooltips.enabled = false
// defaults.legend.position = 'bottom'


ChartJS.register(
    ...registerables
);


// function pdfDownload ({


// });

const MostOfferedSubject = () => {


    //REPORT CHARTSS DOWNLOADS


    const pdfBar = () => {

        const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

        const canvas = document.getElementById('bar-populations');

        const canvasImage = canvas.toDataURL('image/png', 1.0);


        var pdf = new jsPDF('landscape')


        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(40)
        pdf.text(15, 20, 'Most Offered Subject By Tutors')
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(16)

        // pdf.text(16, 35, `Male: ${male && male}`)
        // pdf.text(80, 35, `Female: ${female && female}`)
        // pdf.text(150, 35, `Total Users: ${users && users.length}`)

        pdf.setFontSize(16)
        pdf.setFont("helvetica", "bolditalic")
        pdf.text(175, 200, `Data gathered as of ${DateGathered}`)


        pdf.addImage(canvasImage, 10, 25, 280, 170);
        pdf.save(`Tutors-MostOfferedSubject-Chart-${DateGathered}.pdf`);
    }


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


                        <h1 className="h1 mb-2 text-gray-800">Most Offered Subject By Tutors</h1>

                        <div class="row align-start">
                            <div class="col-md-8 col-12">


                                <p className="mb-4">Presented below are the Most Offered Subject by Tutors</p>

                            </div>




                        </div>





                        <div className="row pr-4">





                            {/* LINE CHART */}

                            <div className="col-xl- mb-3" >

                                <div className="card shadow mb-4">
                                    {/* <!-- Card Header - Dropdown --> */}
                                    <div className="card-header">
                                        <div className="row align-center">
                                            <div className="container">
                                                <div className="row align-start">
                                                    <div className="col-md-8 col-12">
                                                        <h6 className="color1 mt-2 font-weight-bold">
                                                            Bar Chart
                                                        </h6>

                                                    </div>
                                                    <div className="pdficon-align col-md-4 col-12">
                                                        <small className="pdf-icon" onClick={pdfBar}>

                                                            <b role="button" >save as PDF</b>
                                                            <FileDownloadIcon role="button" />

                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pdficon-align col-md-4 col-12">


                                    </div>
                                    {/* <!-- Card Body --> */}
                                    <div className="card-body">


                                        <Bar id="bar-populations"
                                            data={{
                                                labels: ['tutor1', 'tutor2', 'tutor3', 'tutor4', 'tutor5', 'tutor6', 'tutor7', 'tutor8', 'tutor9', 'tutor10',],
                                                datasets: [
                                                    {
                                                        label: '# of votes',
                                                        data: [12, 19, 3, 5, 2, 3, 5, 9, 11, 10],

                                                        backgroundColor: [
                                                            "#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7",
                                                            '#7eb0d5',
                                                        ],
                                                        borderColor: [
                                                            "#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7",
                                                            '#7eb0d5',
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
                                            height={800}
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





        </Fragment >
    )
}

export default MostOfferedSubject
