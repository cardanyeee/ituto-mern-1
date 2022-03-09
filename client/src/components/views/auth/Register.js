import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert';

import MetaData from '../../layout/main/MetaData';
// import Loader from '../layout/main/Loader';

import { register, clearErrors } from '../../../actions/authActions';


const Register = ({ history }) => {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        birthdate: '',
        gender: 0
    });

    const { firstname, lastname, email, password, birthdate, gender } = user;

    // const [avatar, setAvatar] = useState('');
    // const [avatarPreview, setAvatarPreview] = useState('https://res.cloudinary.com/djqpxmv5o/image/upload/v1639001382/movflix/avatars/1636619587424empty_profile_f28fsh.png');

    // const [checked, setChecked] = useState(true);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error } = useSelector(state => state.auth);

    const genders = [
        "Male",
        "Female",
        "Other"
    ];

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/');
        }

        if (error && !(error === 'You have to login first to access this.')) {
            alert.error(error);
            dispatch(clearErrors());
        }


    }, [dispatch, alert, isAuthenticated, error, history]);

    const registerHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('firstname', firstname);
        formData.set('lastname', lastname);
        formData.set('username', email.substring(0, email.lastIndexOf("@")));
        formData.set('email', email);
        formData.set('password', password);
        formData.set('birthdate', birthdate);
        formData.set('gender', gender);

        // formData.set('avatar', avatar);
        dispatch(register(formData));
    };

    const onChange = e => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {

                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    return (
        <Fragment>
            <MetaData title={'Register'} styles={'html, body, .App { background-color: #75BBB3 !important; }'} />
            <div className="d-lg-flex half">
                <div className="d-flex justify-content-center">
                    <img className="bg order-1 order-md-2 h-75 w-75 my-auto img-fluid half" src="/images/undraw_login_re_4vu2.svg" alt="Login" />
                </div>
                <div className="contents order-2 order-md-1 bg-app-primary-light">

                    <div className="container">
                        <div className="row align-items-center justify-content-center bg-app-primary-light">
                            <div className="col-md-7">
                                <h3 className="fs-2">Sign in to <strong>iTuto</strong></h3>
                                <p className="login-subheading fs-5 fw-light mb-4">Discover students who are interested in sharing their attained skills and knowledge.</p>
                                <form onSubmit={registerHandler}>

                                    <div className="row g-0">
                                        <div className="col form-floating mb-3 me-4">
                                            <input type="text" className="form-control" id="firstname" placeholder="Firstname" name="firstname" value={firstname} onChange={onChange} required />
                                            <label htmlFor="firstname">Firstname</label>
                                        </div>

                                        <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="lastname" placeholder="Lastname" name="lastname" value={lastname} onChange={onChange} required />
                                            <label htmlFor="lastname">Lastname</label>
                                        </div>
                                    </div>


                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" value={email} onChange={onChange} required />
                                        <label htmlFor="email">Email address</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
                                        <label htmlFor="password">Password</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" name="confirmpassword" required />
                                        <label htmlFor="confirmpassword">Confirm Password</label>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="birthdate" placeholder="Birthday" name="birthdate" onChange={onChange} onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} required />
                                    </div>

                                    <div className="form-group mb-3">
                                        <select className="form-control" id="gender" name="gender" value={gender} onChange={onChange} required>
                                            <option value="0" disabled>Select Gender</option>
                                            {genders.map(gender => (
                                                <option key={gender} value={gender} >{gender}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* <div className="d-flex mb-4 align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkRemember" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                                            <label className="form-check-label" htmlFor="checkRemember">Remember me</label>
                                        </div>
                                        <span className="ms-auto"><a href="/#" className="link-secondary">Forgot Password</a></span>
                                    </div> */}

                                    <button className="btn btn-primary btn-lg btn-block w-100 text-white mb-3" type="submit">Register</button>

                                    <p >Already have an account? <Link className="link-secondary" to='/login'>Sign In</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Register
