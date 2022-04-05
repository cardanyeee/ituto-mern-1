import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { loadUser } from './actions/authActions';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import ProtectedRoute from './components/route/ProtectedRoute';

import Login from './components/views/auth/Login';
import Register from './components/views/auth/Register';
import ActivationEmail from './components/views/auth/ActivationEmail';
import TutorActivationEmail from './components/views/auth/TutorActivationEmail';
import ForgotPassword from './components/views/auth/ForgotPassword';
import ResetPassword from './components/views/auth/ResetPassword';
// import Profile from './components/views/Profile';

import Home from './components/views/Home';
import TermsConditions from './components/views/TermsConditions';

import Dashboard from './components/views/admin/Dashboard';


import TopTutor from './components/views/admin/report/TopTutor';
import MostOfferedSubject from './components/views/admin/report/MostOfferedSubjects';
import MostPreferredDays from './components/views/admin/report/MostPreferredDays';
import MostRequestedByFemale from './components/views/admin/report/MostRequestedByFemale';
import MostRequestedByMale from './components/views/admin/report/MostRequestedByMale';
import MostRequestedSubject from './components/views/admin/report/MostRequestedSubjects';
import MostTuteeYearLevel from './components/views/admin/report/MostTuteeYearLevel';



import CourseList from './components/views/admin/course/CourseList';
import SubjectList from './components/views/admin/subject/SubjectList';



import NewCourse from './components/views/admin/course/NewCourse';
import NewSubject from './components/views/admin/subject/NewSubject';


import UpdateUser from './components/views/admin/user/UpdateUser';
import UpdateCourse from './components/views/admin/course/UpdateCourse';
import UpdateSubject from './components/views/admin/subject/UpdateSubject';


library.add(fas);
library.add(far);
library.add(fab);

const App = () => {

	// let path = window.location.pathname.split('/')[1];

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (

		<Router>
			<div className="App">
				<div className="container-fluid p-0">
					<Route path="/" component={Home} exact />
					<Route path="/movies/search/:keyword" component={Home} />


					<Route path="/terms-and-conditions" component={TermsConditions} exact />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/forgot/password" exact component={ForgotPassword} />
					<Route path="/reset/password/:accesstoken" exact component={ResetPassword} />
					<Route path="/user/activate/:activation_token" exact component={ActivationEmail} />
					<Route path="/tutor/activate/:activation_token" exact component={TutorActivationEmail} />
					{/* <ProtectedRoute path="/me" component={Profile} exact /> */}

					<ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />


					{/* SIDEBARRRR  REPORT LINKSSS */}
					
					<ProtectedRoute path="/dashboard/reports/top-tutor" isAdmin={true} component={TopTutor} exact />
					
					<ProtectedRoute path="/dashboard/reports/most-requested-subjects" isAdmin={true} component={MostRequestedSubject} exact />
					<ProtectedRoute path="/dashboard/reports/most-requested-by-male" isAdmin={true} component={MostRequestedByMale} exact />
					<ProtectedRoute path="/dashboard/reports/most-requested-by-female" isAdmin={true} component={MostRequestedByFemale} exact />
					
					
					<ProtectedRoute path="/dashboard/reports/most-offered-subjects" isAdmin={true} component={MostOfferedSubject} exact />
					<ProtectedRoute path="/dashboard/reports/most-tutee-year-level" isAdmin={true} component={MostTuteeYearLevel} exact />
					<ProtectedRoute path="/dashboard/reports/most-preferred-days" isAdmin={true} component={MostPreferredDays} exact />
				




					<ProtectedRoute path="/dashboard/courses" isAdmin={true} component={CourseList} exact />
					<ProtectedRoute path="/dashboard/subjects" isAdmin={true} component={SubjectList} exact />


				



					<ProtectedRoute path="/dashboard/course/add" isAdmin={true} component={NewCourse} exact />
					<ProtectedRoute path="/dashboard/subject/add" isAdmin={true} component={NewSubject} exact />



					<ProtectedRoute path="/dashboard/user/update/:id" isAdmin={true} component={UpdateUser} exact />
					<ProtectedRoute path="/dashboard/course/update/:id" isAdmin={true} component={UpdateCourse} exact />
					<ProtectedRoute path="/dashboard/subject/update/:id" isAdmin={true} component={UpdateSubject} exact />



				</div>

			</div>
		</Router>
	);
}

export default App;
