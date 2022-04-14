import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Chart as ChartJS,
    registerables
} from "chart.js";
import { Bar } from 'react-chartjs-2'
import '../dashboard.scss'

import AdminHeader from '../../../layout/admin/AdminHeader';
import MetaData from '../../../layout/main/MetaData';

import { requestedbyMale } from '../../../../actions/reportActions';

import Loader from '../../../layout/main/Loader';


import { getData } from '../../../../actions/all_actions';

import { CSVLink } from "react-csv";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';
ChartJS.register(
    ...registerables
);
const MostRequestedByMale = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
        dispatch(requestedbyMale());
    }, [dispatch]);

    const { requestedbymale } = useSelector(state => state.requestedbyMales);

    const { loading } = useSelector(state => state.datas);

    let reqsByMaleData = requestedbymale.map(s => s.count);
    let reqsByMaleName = requestedbymale.map(s => s.subject[0].name);
    reqsByMaleName = reqsByMaleName.map(s => s.split(' '));
    // let tutorname = tutor.map(t => t.userID.firstname + " " + t.userID.lastname);

    //REPORT CHARTSS DOWNLOADS
    const csvDownloadDate = moment(new Date()).format('DD-MMM-YYYY');

    const columns = [
        { label: "Code", key: "code" },
        { label: "Subject Name", key: "name" },
        { label: "Requested by (n) Male Tutees", key: "counts" }
    ]

    const columnsPDF = [
        { title: "Code", field: "code" },
        { title: "Subject Name", field: "name" },
        { title: "Requested by (n) Male Tutees", field: "counts" }
    ]

    const topRequestedSubjectData = [];

    requestedbymale.forEach(t => {
        topRequestedSubjectData.push({
            code: t.subject[0].code,
            name: t.subject[0].name,
            counts: t.count
        })
    })

    const csvReport = {
        filename: `${csvDownloadDate}-mostRequestedbyMale`,
        headers: columns,
        data: topRequestedSubjectData
    };


    const downloadPdf = () => {

        const DateGathered = moment(new Date()).format('DD-MMM-YYYY');
        const doc = new jsPDF('landscape')

        doc.setFont("helvetica", "bold")
        doc.setFontSize(30)
        doc.text(10, 20, 'Most Requested Subject By Males')
        doc.setFont("helvetica", "normal")

        doc.autoTable({
            columnStyles: {
                // 1: { cellWidth: 50 },
            },
            margin: { top: 35 },
            columns: columnsPDF.map(col => ({ ...col, dataKey: col.field })),
            theme: "striped",
            body: topRequestedSubjectData
        })

        doc.setFontSize(16)
        doc.setFont("helvetica", "bolditalic")
        doc.text(200, 200, `Data gathered as of ${DateGathered}`)

        doc.save(`${csvDownloadDate}-mostRequestedbyMales.pdf`)
    }

    const pdfBar = () => {

        const DateGathered = moment(new Date()).format('DD-MMM-YYYY');
        const canvas = document.getElementById('bar-populations');
        const canvasImage = canvas.toDataURL('image/png', 1.0);
        var pdf = new jsPDF('landscape')

        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(30)
        pdf.text(10, 20, 'Most Requested Subject By Males')
        pdf.setFont("helvetica", "normal")

        pdf.setFontSize(16)
        pdf.setFont("helvetica", "bolditalic")
        pdf.text(200, 200, `Data gathered as of ${DateGathered}`)

        pdf.addImage(canvasImage, 10, 45, 280, 120);
        pdf.save(`${DateGathered}-Male-MostRequestedSubject-Chart.pdf`);
    }

    return (

        <Fragment>
            <AdminHeader />

            <MetaData title={'Reports - Most Requested Subjects by Male Tutees'} styles={'html, body, .App { background-color:  !important; } .home-navbar {background: #141414 !important;} footer p {color: #000000 !important;}'} />

            <Fragment>
                {loading ? <Loader /> : (
                    <div className="home-section">
                        {/* //Donut Chart */}
                        <div className="container-fluid">
                            <div className="container-fluid" id="subjectContainer">
                                <h1 className="h1 mb-2 text-gray-800">Most Requested Subject By Males</h1>
                                <div className="row align-start">
                                    <div className="col-md-8 col-12">
                                        <p className="mb-4">Presented below are the Most Requested Subject of Male tutees</p>
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
                                                        <div className="card-body">
                                                            <CSVLink {...csvReport} style={{ color: "#4FBD95", textDecoration: "none" }}>
                                                                <div className="btn" role="button" style={{ backgroundColor: "#2A4250" }}>
                                                                    <i className="color-report fas fa-print fa-xs" >
                                                                        <span className="m-0 font-weight-bold" >
                                                                            &nbsp;CSV

                                                                        </span>
                                                                    </i>
                                                                </div>
                                                            </CSVLink>
                                                            &nbsp;
                                                            <div className="btn" role="button" onClick={pdfBar} style={{ backgroundColor: "#9FDACA" }}>
                                                                <i className="color-report fas fa-print fa-xs" >
                                                                    <span className="m-0 font-weight-bold" >
                                                                        &nbsp;Chart PDF

                                                                    </span>
                                                                </i>
                                                            </div>

                                                            &nbsp;
                                                            <div className="btn" role="button" onClick={downloadPdf} style={{ backgroundColor: "#2A4250" }}>
                                                                <i className="color-report fas fa-print fa-xs" >
                                                                    <span className="m-0 font-weight-bold" >
                                                                        &nbsp;PDF

                                                                    </span>
                                                                </i>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div className="chart-pie pt-4">
                                                <div className="card-body table-responsive">
                                                    <Bar id="bar-populations"
                                                        data={{
                                                            labels: reqsByMaleName,
                                                            datasets: [
                                                                {
                                                                    label: 'Number of Male Requests',
                                                                    data: reqsByMaleData,

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
                                                        height={600}
                                                        width={1700}
                                                        options={{
                                                            plugins: {
                                                                legend: {
                                                                    display: false
                                                                },
                                                            },
                                                            responsive: false,
                                                            maintainAspectRatio: false,
                                                            scales: {
                                                                y: {
                                                                    ticks: {
                                                                        font: {
                                                                            size: 15,
                                                                            weight: 500,
                                                                            family: 'Roboto'
                                                                        }
                                                                    }
                                                                },
                                                                x: {
                                                                    ticks: {
                                                                        font: {
                                                                            size: 15,
                                                                            weight: 500,
                                                                            family: 'Roboto'
                                                                        }
                                                                    }
                                                                }
                                                            }
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
                )}
            </Fragment>
        </Fragment >
    )
}

export default MostRequestedByMale
