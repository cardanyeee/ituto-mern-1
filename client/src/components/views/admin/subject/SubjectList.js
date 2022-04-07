import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert';
import { MDBDataTableV5 } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSVLink } from "react-csv";


import { getSs, deleteS, clearErrors } from '../../../../actions/subjectActions';


import MetaData from '../../../layout/main/MetaData';
import Loader from '../../../layout/main/Loader';
import './producer.css'

import AdminHeader from '../../../layout/admin/AdminHeader';

import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ProducersLists = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, subjects } = useSelector(state => state.subjects);

    const { error: deleteError, isDeleted } = useSelector(state => state.subject);

    useEffect(() => {
        dispatch(getSs());


        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Subjects deleted successfully');
            history.push('/dashboard/subjects');
            dispatch({ type: 'DELETE_SUBJECT_RESET' });
        }

    }, [dispatch, alert, error, history, deleteError, isDeleted]);

    const setsubjects = () => {
        const data = {
            columns: [
                { label: 'Code', field: 'Code',  sort: 'asc' },
                { label: 'Name', field: 'Name',  sort: 'asc' },
                { label: 'Semester', field: 'Semester', sort: 'asc' },
                { label: 'Course', field: 'Course',  sort: 'asc' },
                { label: 'Actions', field: 'actions', width: 100 }
            ],
            rows: []
        }

        subjects.forEach(subject => {
            data.rows.push({
                Code: subject.code,
                Name: subject.name,
                Semester: subject.semester,
                Course: subject.course[0].code,
                actions:
                    <Fragment>
                        <Link to={`/dashboard/subject/update/${subject._id}`} className="btn btn-primary py-1 px-2 me-3">
                            <FontAwesomeIcon icon="pencil-alt" />
                        </Link>
                        <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deletesubjectHandler(subject._id)}>
                            <FontAwesomeIcon icon="trash" />
                        </button>
                    </Fragment>
            })
        })

        return data;
    }

    const csvData = [];

    subjects.forEach(subject => {
        csvData.push({
            _id: subject._id,
            code: subject.code,
            name: subject.name,
            semester: subject.semester,
            course: subject.course[0].code
        })
    })


    const columns = [
        { title: "ID", field: "_id", },
        { title: "Code", field: "code", },
        { title: "Name", field: "name",},
        { title: "Semester", field: "semester",},
        { title: "Course", field: "course",},
    ]

    const csvDownloadDate = moment(new Date()).format('DD-MMM-YYYY');

    const csvReport = { 
        filename: `${csvDownloadDate}-Subjects.csv`,
        headers: setsubjects.columns,
        data: csvData
    };

    const downloadPdf = () => {

        const doc = new jsPDF()
        doc.text("Course Details", 20, 10)
        doc.autoTable({
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
            columns: columns.map(col => ({ ...col, dataKey: col.field })),
            theme: "striped",
            body: csvData 
        })
        doc.save(`${csvDownloadDate}-Subject.pdf`)
    }

    const deletesubjectHandler = (id) => {
        dispatch(deleteS(id));
    }

    return (
        <Fragment>
            <AdminHeader />


            <MetaData title={'All Producers'} styles={'html, body, .App { background-color:  !important; } .home-navbar {background: #141414 !important;} footer p {color: #000000 !important;}'} />
           
           <Fragment>
           {loading ? <Loader /> : (
                <div className="home-section">

                    <div className="container-fluid" id="subjectContainer">

                        <h1 className="h3 mb-2 text-gray-800">Subjects</h1>


                        <p className="mb-4">Listed below are the  <b>subjects</b> that are included on the mobile application </p>


                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <CSVLink {...csvReport} style={{ color: "#4FBD95", textDecoration: "none" }}>
                                    <div className="btn" role="button"  style={{ backgroundColor: "#2A4250" }}>
                                        <i className="color-report fas fa-print fa-xs" >
                                            <span className="m-0 font-weight-bold" >
                                                &nbsp;CSV

                                            </span>
                                        </i>
                                    </div>
                                </CSVLink>
                                &nbsp;

                                <div className="btn" role="button" onClick={downloadPdf} style={{ backgroundColor: "#9FDACA" }}>
                                    <i className="color-report fas fa-print fa-xs" >
                                        <span className="m-0 font-weight-bold" >
                                            &nbsp;PDF

                                        </span>
                                    </i>
                                </div>

                            </div>



                            <div className="card-body">
                                <div className="table-responsive">
                                    <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">

                                        <Fragment>
                                            {loading ? <Loader /> : (
                                                <MDBDataTableV5
                                                    data={setsubjects()}
                                                    striped
                                                    hover
                                                    searchTop
                                                    searchRight
                                                    barReverse
                                                    searchBottom={false}
                                                />
                                            )}
                                        </Fragment>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
           )}

           
            </Fragment>
            


        </Fragment>
    )
}

export default ProducersLists
