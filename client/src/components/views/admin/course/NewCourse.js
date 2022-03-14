import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../../../layout/main/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { newC, clearErrors } from '../../../../actions/courseActions';

import AdminHeader from '../../../layout/admin/AdminHeader';

import movie from './movie.css';

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


            <MetaData title={'New Course'} styles={'html, body, .App { background-color: #75BBB3 !important; }'} />
            <div className="d-lg-flex half">
                <div className="d-flex justify-content-center">
                    <img className="bg order-1 order-md-2 h-75 w-75 my-auto img-fluid half" src="/images/undraw_login_re_4vu2.svg" alt="ForgotPassword" />
                </div>
                <div className="contents order-2 order-md-1 bg-app-primary-light">

                    <div className="row align-items-center justify-content-center bg-app-primary-light" id="adjustRow">
                        <div className="col-md-7" id="Align">
                        <form className="submit" onSubmit={submitHandler} encType='multipart/form-data'>
                                    <h1 className="mb-4">New Course</h1>

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


                          


                            {/* <p className="mb-2 pb-lg-2 text-secondary">Don't have an account? <Link className="link-secondary" to='/register'>Register Here</Link></p> */}

                        </div>
                    </div>
                </div>
            </div>







        </Fragment>
    )
}

export default NewMovie
