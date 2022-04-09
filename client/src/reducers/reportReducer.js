
export const requestedSubjectsReducer = (state = { requestedsubjects: [] }, action) => {
    switch (action.type) {

        case 'REQUESTED_SUBJECTS_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'REQUESTED_SUBJECTS_SUCCESS':
            return {
                ...state,
                loading: false,
                requestedsubjects: action.payload
            }

        case 'REQUESTED_SUBJECTS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const requestedbyMaleReducer = (state = { requestedbymale: [] }, action) => {
    switch (action.type) {

        case 'REQUESTED_BY_MALE_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'REQUESTED_BY_MALE_SUCCESS':
            return {
                ...state,
                loading: false,
                requestedbymale: action.payload
            }

        case 'REQUESTED_BY_MALE_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const requestedbyFemaleReducer = (state = { requestedbyfemale: [] }, action) => {
    switch (action.type) {

        case 'REQUESTED_BY_FEMALE_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'REQUESTED_BY_FEMALE_SUCCESS':
            return {
                ...state,
                loading: false,
                requestedbyfemale: action.payload
            }

        case 'REQUESTED_BY_FEMALE_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const topSubjectsReducer = (state = { topsubjects: [] }, action) => {
    switch (action.type) {

        case 'TOP_SUBJECTS_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'TOP_SUBJECTS_SUCCESS':
            return {
                ...state,
                loading: false,
                topsubjects: action.payload
            }

        case 'TOP_SUBJECTS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}



export const topTutorsReducer = (state = { tutor: [] }, action) => {
    switch (action.type) {

        case 'TOP_TUTOR_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'TOP_TUTOR_SUCCESS':
            return {
                ...state,
                loading: false,
                tutor: action.payload
            }

        case 'TOP_TUTOR_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}



export const topYearLevelReducer = (state = { topYearLevel: [] }, action) => {
    switch (action.type) {

        case 'TOP_TUTEE_YEARLEVEL_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'TOP_TUTEE_YEARLEVEL_SUCCESS':
            return {
                ...state,
                loading: false,
                topYearLevel: action.payload
            }

        case 'TOP_TUTEE_YEARLEVEL_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const prefferedDaysReducer = (state = { preffereddays: [] }, action) => {
    switch (action.type) {

        case 'PREFFERED_DAYS_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'PREFFERED_DAYS_SUCCESS':
            return {
                ...state,
                loading: false,
                preffereddays: action.payload
            }

        case 'PREFFERED_DAYS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}



export const averageMonthRequestsReducer = (state = { averageMonth: [] }, action) => {
    switch (action.type) {

        case 'AVERAGE_MONTH_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'AVERAGE_MONTH_SUCCESS':
            return {
                ...state,
                loading: false,
                averageMonth: action.payload
            }

        case 'AVERAGE_MONTH_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}



export const getTuteeCountReducer = (state = { tuteeCount: [] }, action) => {
    switch (action.type) {

        case 'TUTEE_COUNT_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'TUTEE_COUNT_SUCCESS':
            return {
                ...state,
                loading: false,
                tuteeCount: action.payload
            }

        case 'TUTEE_COUNT_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}






