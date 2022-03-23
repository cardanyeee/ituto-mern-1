import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../../../layout/main/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { newC, clearErrors } from '../../../../actions/courseActions';

import AdminHeader from '../../../layout/admin/AdminHeader';

const NewMovie = ({ history }) => {

    const [code, setcode] = useState('');
    const [name, setname] = useState('');
    const [degree, setdegree] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.newcourse);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/dashboard/courses');
            alert.success('Movie created successfully');
            dispatch({ type: 'NEW_COURSE_RESET' })
        }

    }, [dispatch, alert, error, success, history]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            'code': code,
            'name': name,
            'degree': degree
        }
        dispatch(newC(formData));
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
                                        <h1 className="m-0 font-weight-bold text-primary">Create New Course</h1>
                                    </div>
                                    {/* <!-- Card Body --> */}
                                    <div className="card-body">

                                        {/* USER DATA SECTION */}


                                        <div className="table-responsive">
                                            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                                <form className="shadow-lg p-5 rounded-3 clearfix" onSubmit={submitHandler} encType='multipart/form-data'>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="code">Code</label>
                                                        <input type="text" id="code" className="form-control" value={code} onChange={(e) => setcode(e.target.value)} required />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="name">Course Name</label>
                                                        <input type="text" id="name" className="form-control" value={name} onChange={(e) => setname(e.target.value)} required />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="degree">Degree</label>
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

