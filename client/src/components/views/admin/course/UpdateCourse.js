import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../../../layout/main/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { updateC, getCDetails, clearErrors } from '../../../../actions/courseActions';
import AdminHeader from '../../../layout/admin/AdminHeader';

const UpdateMovie = ({ match, history }) => {

    const [code, setcode] = useState('');
    const [name, setname] = useState('');
    const [degree, setdegree] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { course, error } = useSelector(state => state.course_details);
    const { loading, error: updateError, isUpdated } = useSelector(state => state.course);

    const courseId = match.params.id;


    useEffect(() => {

        if (course && course._id !== courseId) {
            dispatch(getCDetails(courseId));
        } else {

            setcode(course.code);
            setname(course.name);
            setdegree(course.degree);

        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            history.push('/dashboard/courses');
            alert.success('Course updated successfully');
            dispatch({ type: 'UPDATE_COURSE_RESET' });
        }

    }, [dispatch, alert, error, isUpdated, history, updateError, course, courseId]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            'code': code,
            'name': name,
            'degree': degree
        }


        dispatch(updateC(course._id, formData));
    }


    return (
        <Fragment>
            <AdminHeader />

            <MetaData title={'New Course'} styles={'html, body, .App { background-color: #F3F7FD !important; }'} />


            <Fragment>

                <div className="home-section">

                    <div className="container-fluid">

                        <div className="row pr-4 pt-4">

                            <div className="col-xl-5 mb-3">
                                <div className="card-body" id="welcomeMove">
                                    <div className="text-center card-font-size"><h1>Edit Course</h1></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* USERS TABLES */}
                    <div className="container-fluid">
                        <div className="col col-lg-12">

                            <div class="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Edit Course</h6>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div class="card-body">

                                    {/* USER DATA SECTION */}


                                    <div className="table-responsive">
                                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                            <form className="submit" onSubmit={submitHandler} encType='multipart/form-data'>
                                                

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

export default UpdateMovie
