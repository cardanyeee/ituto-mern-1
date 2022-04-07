import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AllDatas } from './reducers/all_redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { requestedSubjectsReducer, requestedbyMaleReducer, requestedbyFemaleReducer,  topSubjectsReducer, topTutorsReducer, topYearLevelReducer, prefferedDaysReducer, averageMonthRequestsReducer, getTuteeCountReducer } from './reducers/reportReducer';
import { authReducer, allUsersReducer, allUsersDetailsReducer, allUsersUpdateReducer } from './reducers/authReducers';
import { coursesC, newCReducer, CDetailsReducer, CReducer } from './reducers/courseReducers';
import { subjectsReducer, newsubjectReducer, subjectDetailsReducer, subjectReducer } from './reducers/subjectReducers';
const reducer = combineReducers({

    //ANALYTICSSS///
    requestedSubjects: requestedSubjectsReducer, 
    requestedbyMales: requestedbyMaleReducer,
    requestedbyFemales: requestedbyFemaleReducer,
    topSubjects: topSubjectsReducer, //offered
    topTutors: topTutorsReducer,
    topYearLevel: topYearLevelReducer,
    prefferedDays: prefferedDaysReducer,    
    averageMonths: averageMonthRequestsReducer,
    getTuteeCounts: getTuteeCountReducer,
    



    auth: authReducer,
    allUsers: allUsersReducer,
    allUsersDetails: allUsersDetailsReducer,
    allUsersUpdate: allUsersUpdateReducer,

    subjects: subjectsReducer,
    newsubject: newsubjectReducer,

    subject: subjectReducer,
    subject_details: subjectDetailsReducer,


    courses: coursesC,
    newcourse: newCReducer,
    course: CReducer,
    course_details: CDetailsReducer,


    datas: AllDatas
});

let initialState = {};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;