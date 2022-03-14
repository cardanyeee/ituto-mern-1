import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../../../layout/main/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { updateS, getSDetails, clearErrors } from '../../../../actions/subjectActions';
import AdminHeader from '../../../layout/admin/AdminHeader';

const UpdateMovie = ({ match, history }) => {

    const [code, setcode] = useState('');
    const [name, setname] = useState('');
    const [degree, setdegree] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { subject, error } = useSelector(state => state.subject_details);
    const { loading, error: updateError, isUpdated } = useSelector(state => state.subject);

    const subjectId = match.params.id;


    useEffect(() => {

        if (subject && subject._id !== subjectId) {
            dispatch(getSDetails(subjectId));
        } else {

            setcode(subject.code);
            setname(subject.name);
            setdegree(subject.semester);

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
            history.push('/dashboard/subjects');
            alert.success('subject updated successfully');
            dispatch({ type: 'UPDATE_SUBJECT_RESET' });
        }

    }, [dispatch, alert, error, isUpdated, history, updateError, subject, subjectId]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            'code': code,
            'name': name,
            'semester': degree
        }


        dispatch(updateS(subject._id, formData));
    }


    return (
        <Fragment>
            <MetaData title={'Update Subject'} styles={'html, body, .App { background-color: #75BBB3 !important; }'} />
            <div className="d-lg-flex half">
                <div className="d-flex justify-content-center">
                    <img className="bg order-1 order-md-2 h-75 w-75 my-auto img-fluid half" src="/images/undraw_login_re_4vu2.svg" alt="ForgotPassword" />
                </div>
                <div className="contents order-2 order-md-1 bg-app-primary-light">

                    <div className="row align-items-center justify-content-center bg-app-primary-light" id="adjustRow">
                        <div className="col-md-7" id="Align">
                            <form className="submit" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Edit subject</h1>

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

export default UpdateMovie
