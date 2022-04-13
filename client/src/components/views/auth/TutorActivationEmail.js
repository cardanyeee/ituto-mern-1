import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MetaData from '../../layout/main/MetaData';
import axios from 'axios'
// import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'

function ActivationEmail() {
    const { activation_token } = useParams()
    const [errorObj, setErrorObj] = useState();
    // const [success, setSuccess] = useState('')

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    await axios.post('/api/tutor/activate', { activation_token })
                    // setSuccess(res.data.msg)
                } catch (err) {
                    setErrorObj(err.response.data.message);
                }
            }
            activationEmail()
        }
    }, [activation_token])

    return (
        <div className="active_page">
            <MetaData title={'Congratulations!'} styles={'html, body, .App { background-color: #4FBD95 !important; }'} />
            <div className="d-lg-flex half">
                <div className="d-flex justify-content-center">
                    <img className="bg order-1 order-md-2 h-75 w-75 my-auto img-fluid half" src={errorObj ? "/images/undraw_cancel_re_pkdm.svg" : "/images/undraw_winners_re_wr1l.`svg"} alt="ForgotPassword" />
                </div>

                <div className="contents order-2 order-md-1 bg-app-primary-light">

                    <div className="row align-items-center justify-content-center bg-app-primary-light" id="adjustRow">
                        <div className="col-md-10" id="Align">
                            <h3 className="fs-1">
                                <strong>
                                    {errorObj ? errorObj : "Congratulations! Your tutor account has been Activated."}
                                </strong>
                            </h3>
                            {/* <p className="ForgotPassword-subheading fs-5 fw-light mb-4">Discover students who are interested in sharing their attained skills and knowledge.</p> */}

                        </div>
                    </div>
                </div>

            </div>
            {/* {err && showErrMsg(err)}
            {success && showSuccessMsg(success)} */}
        </div>
    )
}

export default ActivationEmail
