export const coursesC = (state = { courses: [] }, action) => {
    switch (action.type) {
        case 'ALL_COURSES_REQUEST':
            return {
                loading: true,
                courses: []
            }
        case 'ALL_COURSES_SUCCESS':
            return {
                loading: false,
                courses: action.payload.courses,
            }
        
        case 'ALL_COURSES_FAIL':
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

export const newCReducer = (state = { course: {} }, action) => {
    switch (action.type) {

        case 'NEW_COURSE_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'NEW_COURSE_SUCCESS':
            return {
                loading: false,
                success: action.payload.success,
                course: action.payload.course
            }

        case 'NEW_COURSE_FAIL':
            return {
                ...state,
                error: action.payload
            }
        
        case 'NEW_COURSE_RESET':
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

export const CDetailsReducer = (state = { course: {} }, action) => {
    switch (action.type) {

        case 'COURSE_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'COURSE_DETAILS_SUCCESS':
            return {
                loading: false,
                course: action.payload
            }

        case 'COURSE_DETAILS_FAIL':
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

export const CReducer = (state = {}, action) => {
    switch (action.type) {

        case 'DELETE_COURSE_REQUEST':
        case 'UPDATE_COURSE_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'DELETE_COURSE_SUCCESS':
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case 'UPDATE_COURSE_SUCCESS':
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case 'DELETE_COURSE_FAIL':
        case 'UPDATE_COURSE_FAIL':
            return {
                ...state,
                error: action.payload
            }

        case 'DELETE_COURSE_RESET':
            return {
                ...state,
                isDeleted: false
            }

        case 'UPDATE_COURSE_RESET':
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



