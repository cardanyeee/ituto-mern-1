import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const isLength = password => {
    if(password.length < 6) return true
    return false
}

const isMatch = (password, cf_password) => {
    if(password === cf_password) return true
    return false
}

const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const {accesstoken} = useParams()

    const {password, cf_password} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPass = async () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post('/api/auth/password/reset', {password, cf_password}, {
                headers: {Authorization: accesstoken}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (
        <div className="fg_pass">
            <h2>Reset Your Password</h2>

            <div className="row">
                {/* {err && showErrMsg(err)}
                {success && showSuccessMsg(success)} */}

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                onChange={handleChangeInput} />

                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" name="cf_password" id="cf_password" value={cf_password}
                onChange={handleChangeInput} />         

                <button onClick={handleResetPass}>Reset Password</button>
            </div>
        </div>
    )
}

export default ResetPassword
