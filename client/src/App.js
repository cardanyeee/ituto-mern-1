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
import ForgotPassword from './components/views/auth/ForgotPassword';
import ResetPassword from './components/views/auth/ResetPassword';
import Profile from './components/views/Profile';

import Home from './components/views/Home';

import Dashboard from './components/views/admin/Dashboard';

library.add(fas);
library.add(far);
library.add(fab);

const App = () => {

	let path = window.location.pathname.split('/')[1];

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (

		<Router>
			<div className="App">
				<div className={path === "dashboard" ? "home-section" : "container-fluid p-0"}>
					<Route path="/" component={Home} exact />
					<Route path="/movies/search/:keyword" component={Home} />

					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/forgot/password" exact component={ForgotPassword} />
					<Route path="/reset/password/:accesstoken" exact component={ResetPassword} />
					<Route path="/user/activate/:activation_token" exact component={ActivationEmail} />
					<ProtectedRoute path="/me" component={Profile} exact />

					<ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
				</div>

			</div>
		</Router>
	);
}

export default App;
