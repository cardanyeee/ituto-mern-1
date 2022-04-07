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

import { topratedTutor } from '../../../../actions/reportActions';

import Loader from '../../../layout/main/Loader';


import { getData } from '../../../../actions/all_actions';

import jsPDF from 'jspdf';
import moment from 'moment';




// defaults.tooltips.enabled = false
// defaults.legend.position = 'bottom'


ChartJS.register(
    ...registerables
);


// function pdfDownload ({


// });

const TopTutor = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
        dispatch(topratedTutor());
    }, [dispatch]);

    const { tutor } = useSelector(state => state.topTutors);

    const { loading } = useSelector(state => state.datas);

    let ratings = tutor.map(t => t.ratings);
    let names = tutor.map(t => [t.userID.firstname, t.userID.lastname]);

    //REPORT CHARTSS DOWNLOADS

    const pdfBar = () => {

        const DateGathered = moment(new Date()).format('DD-MMM-YYYY');

        const canvas = document.getElementById('bar-populations');

        const canvasImage = canvas.toDataURL('image/png', 1.0);


        var pdf = new jsPDF('landscape')


        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(40)
        pdf.text(15, 20, 'Top 10 Rated Tutors')
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(16)

        pdf.setFontSize(16)
        pdf.setFont("helvetica", "bolditalic")
        pdf.text(175, 200, `Data gathered as of ${DateGathered}`)


        pdf.addImage(canvasImage, 10, 25, 280, 170);
        pdf.save(`Top-Tutors-${DateGathered}.pdf`);
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


                            <h1 className="h1 mb-2 text-gray-800">Top Tutor</h1>

                            <div className="row align-start">
                                <div className="col-md-8 col-12">


                                    <p className="mb-4">Presented below are the Top Rated Tutors</p>

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


                                        <div className="chart-pie pt-4">
                                            <div className="card-body">


                                                <Bar id="bar-populations"
                                                    data={{
                                                        labels: names,
                                                        datasets: [
                                                            {
                                                                label: 'number of Ratings',
                                                                data: ratings,

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

export default TopTutor
