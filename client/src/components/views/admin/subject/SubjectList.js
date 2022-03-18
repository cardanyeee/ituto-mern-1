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
                { label: 'Code', field: 'Code', width: 210, sort: 'asc' },
                { label: 'Name', field: 'Name', width: 150, sort: 'asc' },
                { label: 'Semester', field: 'Semester', width: 230, sort: 'asc' },
                { label: 'Course', field: 'Course', width: 230, sort: 'asc' },
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


    const csvReport = {

        filename: 'Subjects.csv',
        headers: setsubjects.columns,
        data: subjects
    };

    const deletesubjectHandler = (id) => {
        dispatch(deleteS(id));
    }

    return (
        <Fragment>
            <AdminHeader />
            <MetaData title={'All Producers'} styles={'html, body, .App { background-color:  !important; } .home-navbar {background: #141414 !important;} footer p {color: #000000 !important;}'} />
            <div className="home-section">

                <div className="container-fluid" id="subjectContainer">

                    <h1 className="h3 mb-2 text-gray-800">Subjects</h1>


                    <p className="mb-4">Listed below are the  <b>subjects</b> that are included on the mobile application </p>


                    <div className="card shadow mb-4">

                        <div className="card-header py-3">

                            <div className="d-sm-inline-block btn btn-sm btn-primary shadow-sm" role="button" onClick={csvReport}>
                                <i class="fas fa-download fa-sm text-white-50">
                                    <span className="m-0 font-weight-bold" >
                                        <CSVLink {...csvReport} style={{ color: "#F3F7FD" }}>
                                            Generate CSV
                                        </CSVLink>
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
                                            />
                                        )}
                                    </Fragment>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>





        </Fragment>
    )
}

export default ProducersLists
