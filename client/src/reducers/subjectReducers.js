export const subjectsReducer = (state = { subjects: [] }, action) => {
    switch (action.type) {
        case 'ALL_SUBJECTS_REQUEST':
            return {
                loading: true,
                subjects: []
            }
        case 'ALL_SUBJECTS_SUCCESS':
            return {
                loading: false,
                subjects: action.payload.subjects
            }
            
        case 'ALL_SUBJECTS_FAIL':
            return {
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

export const newsubjectReducer = (state = { subject: {} }, action) => {
    switch (action.type) {

        case 'NEW_SUBJECT_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'NEW_SUBJECT_SUCCESS':
            return {
                loading: false,
                success: action.payload.success,
                subject: action.payload.subject
            }

        case 'NEW_SUBJECT_FAIL':
            return {
                ...state,
                error: action.payload
            }
        
        case 'NEW_SUBJECT_RESET':
            return {
                ...state,
                success: false
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const subjectDetailsReducer = (state = { subject: {} }, action) => {
    switch (action.type) {

        case 'SUBJECT_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'SUBJECT_DETAILS_SUCCESS':
            return {
                loading: false,
                subject: action.payload
            }

        case 'SUBJECT_DETAILS_FAIL':
            return {
                ...state,
                error: action.payload
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const subjectReducer = (state = {}, action) => {
    switch (action.type) {

        case 'DELETE_SUBJECT_REQUEST':
        case 'UPDATE_SUBJECT_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'DELETE_SUBJECT_SUCCESS':
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case 'UPDATE_SUBJECT_SUCCESS':
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case 'DELETE_SUBJECT_FAIL':
        case 'UPDATE_SUBJECT_FAIL':
            return {
                ...state,
                error: action.payload
            }

        case 'DELETE_SUBJECT_RESET':
            return {
                ...state,
                isDeleted: false
            }

        case 'UPDATE_SUBJECT_RESET':
            return {
                ...state,
                isUpdated: false
            }

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


    