import axios from 'axios';


export const requestedSubject = () => async (dispatch) => {
    try {
        
        dispatch({ type: 'REQUESTED_SUBJECT_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { } = await axios.post('', {  }, config);
        
        dispatch({
            type: 'REQUESTED_SUBJECT_SUCCESS',
            // payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'REQUESTED_SUBJECT_FAIL',
            // payload: error.response.data.message
        })
    }
}


export const requestedbyMale = () => async (dispatch) => {
    try {
        
        dispatch({ type: 'REQUESTED_BY_MALE_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { } = await axios.post('', {  }, config);
        
        dispatch({
            type: 'REQUESTED_BY_MALE_SUCCESS',
            // payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'REQUESTED_BY_MALE_FAIL',
            // payload: error.response.data.message
        })
    }
}

export const requestedbyFenale = () => async (dispatch) => {
    try {
        
        dispatch({ type: 'REQUESTED_BY_FEMALE_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { } = await axios.post('', {  }, config);
        
        dispatch({
            type: 'REQUESTED_BY_FEMALE_SUCCESS',
            // payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'REQUESTED_BY_FEMALE_FAIL',
            // payload: error.response.data.message
        })
    }
}




export const topSubject = () => async (dispatch) => {
    try {
        
        dispatch({ type: 'TOP_SUBJECT_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { } = await axios.post('', {  }, config);
        
        dispatch({
            type: 'TOP_SUBJECT_SUCCESS',
            // payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'TOP_SUBJECT_FAIL',
            // payload: error.response.data.message
        })
    }
}



export const topratedTutor = () => async (dispatch) => {
    try {
        
        dispatch({ type: 'TOP_TUTOR_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { } = await axios.post('', {  }, config);
        
        dispatch({
            type: 'TOP_TUTOR_SUCCESS',
            // payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'TOP_TUTOR_FAIL',
            // payload: error.response.data.message
        })
    }
}



export const topratedYearLevel = () => async (dispatch) => {
    try {
        
        dispatch({ type: 'TOP_TUTEE_YEARLEVEL_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { } = await axios.post('', {  }, config);
        
        dispatch({
            type: 'TOP_TUTEE_YEARLEVEL_SUCCESS',
            // payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'TOP_TUTEE_YEARLEVEL_FAIL',
            // payload: error.response.data.message
        })
    }
}



export const prefferedDays = () => async (dispatch) => {
    try {
        
        dispatch({ type: 'PREFFERED_DAYS_REQUEST' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { } = await axios.post('', {  }, config);
        
        dispatch({
            type: 'PREFFERED_DAYS_SUCCESS',
            // payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'PREFFERED_DAYS_FAIL',
            // payload: error.response.data.message
        })
    }
}