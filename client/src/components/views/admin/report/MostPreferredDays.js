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

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { prefferedDays } from '../../../../actions/reportActions';

import Loader from '../../../layout/main/Loader';


import { getData } from '../../../../actions/all_actions';

import jsPDF from 'jspdf';
import moment from 'moment';

ChartJS.register(
    ...registerables
);

const MostPreferredDays = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
        dispatch(prefferedDays());
    }, [dispatch]);

    const { preffereddays } = useSelector(state => state.prefferedDays);
    const { loading } = useSelector(state => state.datas);


    var days = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    };

    const newPreferredDays = [];

    for (var key in days) {
        var o = days[key];
        var dayCount = {
            _id: o,
            count: 0
        }
        for (var pfk in preffereddays) {
            var obj = preffereddays[pfk];
            if (parseInt(key) === parseInt(obj._id)) {
                dayCount.count = obj.count;
                break;
            }
        }
        newPreferredDays.push(dayCount);
    }

    let preferredDaysData = newPreferredDays.map(s => s.count);
    let preferredDaysName = newPreferredDays.map(s => s._id);


    //REPORT CHARTSS DOWNLOADS


    const pdfBar = () => {

        const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

        const canvas = document.getElementById('bar-populations');

        const canvasImage = canvas.toDataURL('image/png', 1.0);


        var pdf = new jsPDF('landscape')


        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(40)
        pdf.text(15, 20, 'Most Preferred Days')
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(16)

        pdf.setFontSize(16)
        pdf.setFont("helvetica", "bolditalic")
        pdf.text(175, 200, `Data gathered as of ${DateGathered}`)


        pdf.addImage(canvasImage, 10, 25, 280, 170);
        pdf.save(`PreferredDays-Chart-${DateGathered}.pdf`);
    }

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


                                <h1 className="h1 mb-2 text-gray-800">Most Preferred Days</h1>

                                <div className="row align-start">
                                    <div className="col-md-8 col-12">


                                        <p className="mb-4">Presented below are the Most Preferred Days of Tutoring sessions</p>

                                    </div>




                                </div>





                                <div className="row pr-4">





                                    {/* LINE CHART */}

                                    <div className="col-xl- mb-3" >

                                        <div className="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
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

                                            <div className="pdficon-align col-md-4 col-12">


                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div className="card-body">


                                                <Bar id="bar-populations"
                                                    data={{
                                                        labels: preferredDaysName,
                                                        datasets: [
                                                            {
                                                                label: '# of votes',
                                                                data: preferredDaysData,

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
                                                        plugins: {
                                                            legend: {
                                                                display: false
                                                            },
                                                        },
                                                        maintainAspectRatio: false,

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

                )}

            </Fragment>




        </Fragment >
    )
}

export default MostPreferredDays
