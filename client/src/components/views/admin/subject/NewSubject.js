import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../../../layout/main/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { newS, clearErrors } from '../../../../actions/subjectActions';

// import { getCs } from '../../actions/courseActions';

import AdminHeader from '../../../layout/admin/AdminHeader';

const NewMovie = ({ history }) => {

    const [code, setcode] = useState('');
    const [name, setname] = useState('');
    const [degree, setdegree] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();
    const { error, success } = useSelector(state => state.newsubject);

    useEffect(() => {


        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            history.push('/dashboard/subjects');
            alert.success('Subject created successfully');
            dispatch({ type: 'NEW_SUBJECT_RESET' })
        }

    }, [dispatch, alert, error, success, history]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            'code': code,
            'name': name,
            'semester': degree,
            'course': '6212388f5e805c84cf51295c'
        }
        dispatch(newS(formData));
    }


    return (
        <Fragment>
            <AdminHeader />

            <MetaData title={'New Course'} styles={'html, body, .App { background-color: #F3F7FD !important; }'} />


            <Fragment>

                <div className="home-section">
                    {/* USERS TABLES */}
                    <div className="container-fluid">
                        <div className="col col-lg-12">

                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div className="card-header py-3">
                                    <h1 className="m-0 font-weight-bold text-primary">Create New Subject</h1>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body">

                                    {/* USER DATA SECTION */}


                                    <div className="table-responsive">
                                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                            <form className="submit" onSubmit={submitHandler} encType='multipart/form-data'>
                                              

                                                <div className="form-group mb-3">
                                                    <label htmlFor="code">Code</label>
                                                    <input type="text" id="code" className="form-control" value={code} onChange={(e) => setcode(e.target.value)} required />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Subject Name</label>
                                                    <input type="text" id="name" className="form-control" value={name} onChange={(e) => setname(e.target.value)} required />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="degree">Semester</label>
                                                    <input type="text" id="degree" className="form-control" value={degree} onChange={(e) => setdegree(e.target.value)} required />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="degree">Couse</label>
                                                    <input type="text" id="degree" className="form-control" value={degree} onChange={(e) => setdegree(e.target.value)} required />
                                                </div>



                                                <button className="btn btn-primary btn-lg btn-block w-100 text-white mb-2" type="submit">Create</button>

                                            </form>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </Fragment>





        </Fragment >
    )
}

export default NewMovie
