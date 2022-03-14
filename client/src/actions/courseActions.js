import axios from 'axios';

export const getCs = (keyword = '', currentPage = 1) => async (dispatch) => {
    try {

        dispatch({ type: 'ALL_COURSES_REQUEST' });

        const { data } = await axios.get(`/api/courses`);
        
        dispatch({
            type: 'ALL_COURSES_SUCCESS',
            payload: data
        })
  
    } catch (error) {
        dispatch({
            type: 'ALL_COURSES_FAIL',
            payload: error.response.data.message
        })
    }
}

export const newC = (subjectData) => async (dispatch) => {
    try {

        dispatch({ type: 'NEW_COURSE_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const { data } = await axios.post(`/api/course/add`, subjectData, config);

        dispatch({
            type: 'NEW_COURSE_SUCCESS',
            payload: data
        });
  
    } catch (error) {
        dispatch({
            type: 'NEW_COURSE_FAIL',
            payload: error.response.data.message
        });
    }
}

export const updateC = (id, subjectData) => async (dispatch) => {
    try {

        dispatch({ type: 'UPDATE_COURSE_REQUEST' });
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/course/update/${id}`, subjectData, config);

        dispatch({
            type: 'UPDATE_COURSE_SUCCESS',
            payload: data.success
        });
        
    } catch (error) {
        dispatch({
            type: 'UPDATE_COURSE_FAIL',
            payload: error.response.data.message
        });
    }
}

export const getCDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: 'COURSE_DETAILS_REQUEST' });

        const { data } = await axios.get(`/api/course/${id}`);

        dispatch({
            type: 'COURSE_DETAILS_SUCCESS',
            payload: data.course
        })
  
    } catch (error) {
        dispatch({
            type: 'COURSE_DETAILS_FAIL',
            payload: error.response.data.message
        })
    }
}




export const deleteC = (id) => async (dispatch) => {
    try {

        dispatch({ type: 'DELETE_COURSE_REQUEST' });

        const { data } = await axios.post(`/api/course/del/${id}`);

        dispatch({
            type: 'DELETE_COURSE_SUCCESS',
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: 'DELETE_COURSE_FAIL',
            payload: error.response.data.message
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: 'CLEAR_ERRORS'
    })
}
