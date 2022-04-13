import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert';
import { MDBDataTableV5 } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSVLink } from "react-csv";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { getCs, deleteC, clearErrors } from '../../../../actions/courseActions';

import MetaData from '../../../layout/main/MetaData';
import Loader from '../../../layout/main/Loader';

import AdminHeader from '../../../layout/admin/AdminHeader';

import moment from 'moment';

const MoviesLists = ({ history }) => {


    const alert = useAlert()
    const dispatch = useDispatch()

    const { loading, error, courses } = useSelector(state => state.courses);
    const { error: deleteError, isDeleted } = useSelector(state => state.course);

    useEffect(() => {
        dispatch(getCs());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('course deleted successfully');
            history.push('/dashboard/courses');
            dispatch({ type: 'DELETE_COURSE_RESET' });
        }

    }, [dispatch, alert, error, history, deleteError, isDeleted]);

    const setcourses = () => {

        const data = {
            columns: [
                { label: 'Code', field: 'Code', width: 210, sort: 'asc' },
                { label: 'Name', field: 'Name', sort: 'asc' },
                { label: 'Degree', field: 'Degree', width: 230, sort: 'asc' },
                { label: 'Status', field: 'Status', width: 230, sort: 'asc' },
                { label: 'Actions', field: 'actions', width: 100 }
            ],
            rows: []
        }

        courses.forEach(course => {
            data.rows.push({
                Code: course.code,
                Name: course.name,
                Degree: course.degree,
                Status: course.active ? 'Active' : 'Inactive',
                actions:
                    <Fragment>
                        <Link to={`/dashboard/course/update/${course._id}`} className="btn btn-primary py-1 px-2 me-3">
                            <FontAwesomeIcon icon="pencil-alt" />
                        </Link>
                        <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deletecourseHandler(course._id)}>
                            <FontAwesomeIcon icon="trash" />
                        </button>
                    </Fragment>
            })
        })

        return data;
    }

    const columns = [
        { title: "ID", field: "_id", },
        { title: "Code", field: "code", },
        { title: "Name", field: "name", },
        { title: "Degree", field: "degree", },
    ]

    const csvDownloadDate = moment(new Date()).format('DD-MMM-YYYY');
    const csvReport = {

        filename: `${csvDownloadDate}-Courses.csv`,
        headers: setcourses.columns,
        data: courses

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
            body: courses
        })
        doc.save(`${csvDownloadDate}-Courses.pdf`)
    }


    const deletecourseHandler = (id) => {
        dispatch(deleteC(id));
    }

    return (

        <Fragment>
            <AdminHeader />

            <MetaData title={'All courses'} styles={'html, body, .App { background-color:  !important; } .home-navbar {background: #141414 !important;} footer p {color: #000000 !important;}'} />

            <Fragment>
                {loading ? <Loader /> : (
                    <div className="home-section">
                        <div className="container-fluid" id="subjectContainer">
                            <h1 className="h3 mb-2 text-gray-800">Courses</h1>
                            <p className="mb-4">Listed below are the courses that are included on the mobile application </p>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
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
                                                        data={setcourses()}
                                                        striped
                                                        hover
                                                        searchTop
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
        </Fragment >
    )
}

export default MoviesLists
