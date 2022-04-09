import axios from 'axios';


export const requestedSubject = () => async (dispatch) => {
    try {

        dispatch({ type: 'REQUESTED_SUBJECT_REQUEST' });

        const { data } = await axios.get(`/api/reports/subjects/toprequested`);
        dispatch({
            type: 'REQUESTED_SUBJECTS_SUCCESS',
            payload: data.subjects
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
        const { data } = await axios.get(`/api/reports/subjects/requestedbymale`);
        dispatch({
            type: 'REQUESTED_BY_MALE_SUCCESS',
            payload: data.subjects
        })

    } catch (error) {
        dispatch({
            type: 'REQUESTED_BY_MALE_FAIL',
            // payload: error.response.data.message
        })
    }
}

export const requestedbyFemale = () => async (dispatch) => {
    try {

        dispatch({ type: 'REQUESTED_BY_FEMALE_REQUEST' });

        const { data } = await axios.get(`/api/reports/subjects/requestedbyfemale`);

        dispatch({
            type: 'REQUESTED_BY_FEMALE_SUCCESS',
            payload: data.subjects
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
        const { data } = await axios.get(`/api/reports/subjects/topoffered`);

        dispatch({
            type: 'TOP_SUBJECTS_SUCCESS',
            payload: data.subjects
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

        const { data } = await axios.get(`/api/reports/tutors/toprated`);

        dispatch({
            type: 'TOP_TUTOR_SUCCESS',
            payload: data.tutor
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

        const { data } =  await axios.get(`/api/reports/tutee/yearlevel`);

        dispatch({
            type: 'TOP_TUTEE_YEARLEVEL_SUCCESS',
            payload: data.users
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
        
        const { data } =  await axios.get(`/api/reports/session/prefferedsessiondays`);


        dispatch({
            type: 'PREFFERED_DAYS_SUCCESS',
            payload: data.days
        })

    } catch (error) {
        dispatch({
            type: 'PREFFERED_DAYS_FAIL',
            // payload: error.response.data.message
        })
    }
}


export const averageMonthRequests = () => async (dispatch) => {
    try {

        dispatch({ type: 'AVERAGE_MONTH_REQUEST' });
        
        const { data } =  await axios.get(`/api/reports/session/topmonthsrequested`);


        dispatch({
            type: 'AVERAGE_MONTH_SUCCESS',
            payload: data.months
        })

    } catch (error) {
        dispatch({
            type: 'AVERAGE_MONTH_FAIL',
            // payload: error.response.data.message
        })
    }
}


export const getTuteeCount = () => async (dispatch) => {
    try {

        dispatch({ type: 'TUTEE_COUNT_REQUEST' });
        
        const { data } =  await axios.get(`/api/tutees`);


        dispatch({
            type: 'TUTEE_COUNT_SUCCESS',
            payload: data.tutees
        })

    } catch (error) {
        dispatch({
            type: 'TUTEE_COUNT_FAIL',
            // payload: error.response.data.message
        })
    }
}