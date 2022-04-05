import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../../../layout/main/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, getUserDetails, clearErrors } from '../../../../actions/authActions';
import AdminHeader from '../../../layout/admin/AdminHeader';

const UpdateMovie = ({ match, history }) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');
    const [phone, setPhone] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, error } = useSelector(state => state.allUsersDetails);
    const { error: updateError, isUpdated } = useSelector(state => state.allUsersUpdate);

    const userId = match.params.id;


    useEffect(() => {

        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId));
        } else {

            setFirstname(user.firstname);
            setLastname(user.lastname);
            setUsername(user.username);
            setGender(user.gender);
            setRole(user.role);
            setPhone(user.phone);

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
            history.push('/dashboard');
            alert.success('User updated successfully');
            dispatch({ type: 'UPDATE_ALL_USERS_RESET' });
        }

    }, [dispatch, alert, error, isUpdated, history, updateError, user, userId]);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            'firstname': firstname,
            'lastname': lastname,
            'username': username,
            'gender': gender,
            'role': role,
            'phone': phone
        }

        console.log(formData)

        dispatch(updateUser(user._id, formData));
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
                                    <h1 className="m-0 font-weight-bold text-primary">Edit User</h1>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body">

                                    {/* USER DATA SECTION */}


                                    <div className="table-responsive">
                                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                            <form className="submit" onSubmit={submitHandler} encType='multipart/form-data'>


                                                <div className="form-group mb-3">
                                                    <label htmlFor="code">Firstname</label>
                                                    <input type="text" id="code" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Lastname</label>
                                                    <input type="text" id="name" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="degree">Username</label>
                                                    <input type="text" id="degree" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="code">Gender</label>
                                                    <input type="text" id="code" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} required />
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="degree">Role</label>
                                                    <select class="form-select" aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)} required>
                                                        <option value="0" disabled>-- Select Role --</option>
                                                        <option value="user">user</option>
                                                        <option value="admin">admin</option>

                                                    </select>

                                                    {/* <input type="text" id="degree" className="form-control" value={degree} onChange={(e) => setdegree(e.target.value)} required /> */}
                                                </div>

                                                {/* <div className="form-group mb-3">
                                                    <label htmlFor="name">Role</label>
                                                    <input type="text" id="name" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} required />
                                                </div> */}

                                                <div className="form-group mb-3">
                                                    <label htmlFor="name">Phone</label>
                                                    <input type="text" id="name" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                                </div>





                                                <button className="btn btn-primary btn-lg btn-block w-100 text-white mb-2" type="submit">Update</button>

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
