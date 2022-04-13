import axios from 'axios';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    try {
        
        dispatch({ type: LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/auth/admin/login', { email, password }, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const googleLogin = (res) => async (dispatch) => {
    try {
        
        dispatch({ type: LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/auth/google/login', { tokenId: res.tokenId }, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/api/auth/register', userData, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.user
        });

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        });
    }
}

export const loadUser = () => async (dispatch) => {
    try {

        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get('/api/profile/me');

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        });

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        });
    }
}

export const logout = () => async (dispatch) => {
    try {

        await axios.get('/api/auth/logout');

        dispatch({
            type: LOGOUT_SUCCESS
        });

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        });
    }
}

export const allUsers = (keyword = '', currentPage = 1) => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST });

        const { data } = await axios.get('/api/admin/users');

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.users
        });

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        });
    }
}


export const getUserDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: 'ALL_USERS_DETAILS_REQUEST' });

        const { data } = await axios.get(`/api/user/${id}`);

        dispatch({
            type: 'ALL_USERS_DETAILS_SUCCESS',
            payload: data.user
        })

        
  
    } catch (error) {
        dispatch({
            type: 'ALL_USERS_DETAILS_FAIL',
            payload: error.response.data.message
        })
    }
}




// EDIT USERSSS

export const updateUser = (id, userData) => async (dispatch) => {
    try {

        dispatch({ type: 'UPDATE_ALL_USERS_REQUEST' });
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/user/update/${id}`, userData, config);


        dispatch({
            type: 'UPDATE_ALL_USERS_SUCCESS',
            payload: data.success
        });
        
    } catch (error) {
        dispatch({
            type: 'UPDATE_ALL_USERS_FAIL',
            payload: error.response.data.message
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}