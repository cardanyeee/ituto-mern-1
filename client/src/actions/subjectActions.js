import axios from 'axios';

export const getSs = (keyword = '', currentPage = 1) => async (dispatch) => {
    try {

        dispatch({ type: 'ALL_SUBJECTS_REQUEST' });

        const { data } = await axios.get(`/api/subjects`);
        
        dispatch({
            type: 'ALL_SUBJECTS_SUCCESS',
            payload: data
        })
  
    } catch (error) {
        dispatch({
            type: 'ALL_SUBJECTS_FAIL',
            payload: error.response.data.message
        })
    }
}

export const newS = (subjectData) => async (dispatch) => {
    try {

        dispatch({ type: 'NEW_SUBJECT_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const { data } = await axios.post(`/api/subject/add`, subjectData, config);

        dispatch({
            type: 'NEW_SUBJECT_SUCCESS',
            payload: data
        });
  
    } catch (error) {
        dispatch({
            type: 'NEW_SUBJECT_FAIL',
            payload: error.response.data.message
        });
    }
}

export const updateS = (id, subjectData) => async (dispatch) => {
    try {

        dispatch({ type: 'UPDATE_SUBJECT_REQUEST' });
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/subject/update/${id}`, subjectData, config);

        dispatch({
            type: 'UPDATE_SUBJECT_SUCCESS',
            payload: data.success
        });
        
    } catch (error) {
        dispatch({
            type: 'UPDATE_SUBJECT_FAIL',
            payload: error.response.data.message
        });
    }
}

export const getSDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: 'SUBJECT_DETAILS_REQUEST' });

        const { data } = await axios.get(`/api/subject/${id}`);

        dispatch({
            type: 'SUBJECT_DETAILS_SUCCESS',
            payload: data.subject
        })
  
    } catch (error) {
        dispatch({
            type: 'SUBJECT_DETAILS_FAIL',
            payload: error.response.data.message
        })
    }
}




export const deleteS = (id) => async (dispatch) => {
    try {

        dispatch({ type: 'DELETE_SUBJECT_REQUEST' });

        const { data } = await axios.post(`/api/subject/del/${id}`);

        dispatch({
            type: 'DELETE_SUBJECT_SUCCESS',
            payload: data.success
        });

    } catch (error) {
        dispatch({
            type: 'DELETE_SUBJECT_FAIL',
            payload: error.response.data.message
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: 'CLEAR_ERRORS'
    })
}
