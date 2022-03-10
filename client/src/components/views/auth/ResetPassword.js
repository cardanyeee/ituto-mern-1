import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

import MetaData from '../../layout/main/MetaData';
import Loader from '../../layout/main/Loader';


const isLength = password => {
    if (password.length < 6) return true
    return false
}

const isMatch = (password, cf_password) => {
    if (password === cf_password) return true
    return false
}

const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}


const ResetPassword = ({ history }) => {


    const [data, setData] = useState(initialState)
    const { accesstoken } = useParams()

    const [password, setPassword] = useState('');
    const [cf_password, set_Cfpassword] = useState('');

    const { loading } = data

    const handleResetPass = async () => {
        if (isLength(password))
            return setData({ ...data, err: "Password must be at least 6 characters.", success: '' })

        if (!isMatch(password, cf_password))
            return setData({ ...data, err: "Password did not match.", success: '' })

        try {
            const res = await axios.post('/api/auth/password/reset', { password, cf_password }, {
                headers: { Authorization: accesstoken }
            })

            return setData({ ...data, err: "", success: res.data.msg })

        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
        }

    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'ForgotPassword'} styles={'html, body, .App { background-color: #75BBB3 !important; }'} />
                    <div className="d-lg-flex half">
                        <div className="d-flex justify-content-center">
                            <img className="bg order-1 order-md-2 h-75 w-75 my-auto img-fluid half" src="/images/undraw_login_re_4vu2.svg" alt="ForgotPassword" />
                        </div>
                        <div className="contents order-2 order-md-1 bg-app-primary-light">

                            <div id="containerLogin">
                                <div className="row align-items-center justify-content-center bg-app-primary-light" id="adjustRow">
                                    <div className="col-md-7" id="Align">
                                        <h1 className="fs-2">Reset <strong>Password</strong></h1>
                                        {/* <p className="ForgotPassword-subheading fs-5 fw-light mb-4">Discover students who are interested in sharing their attained skills and knowledge.</p> */}

                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                            {/* <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> */}

                                            <label htmlFor="password">Enter Password</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="password" placeholder="password" value={cf_password} onChange={(e) => set_Cfpassword(e.target.value)} required />
                                            {/* <input type="email" name="email" id="email" value={email} onChange={handleChangeInput} /> */}

                                            <label htmlFor="password">Confirm Password</label>
                                        </div>
                                        <button className="btn btn-primary btn-lg btn-block w-100 text-white mb-2" type="submit" onClick={handleResetPass}>Verify Email</button>


                                        <p className="mb-2 pb-lg-2 text-secondary">Don't have an account? <Link className="link-secondary" to='/register'>Register Here</Link></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}

        </Fragment>
    )
}

export default ResetPassword
