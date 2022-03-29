import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import StarRateIcon from '@mui/icons-material/StarRate';

import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from '@mui/icons-material/School';
import { logout } from '../../../actions/authActions';


const Sidebar = (props) => {

    const { user } = useSelector(state => state.auth);


    const toggleDropdown = (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    }


    const alert = useAlert();
    const dispatch = useDispatch();

    const logoutHandler = () => {

        dispatch(logout());
        alert.success('Logged out successfully.')
    }


    return (
        <div className={"sidebar h-100 shadow-sm " + (props.sidebarToggle === true ? "open" : "close")}>
            <Link to="/" className="text-decoration-none">
                <div className="logo-details shadow-sm">
                    <SchoolIcon className="side-logo" />
                    {/* <img src="/images/applogo.png" width="50"/> */}
                    <span className="logo_name fw-bold text-nowrap logo-brand text-white">iTuto</span>
                </div>
            </Link>

            <ul className="nav-links px-0 pt-3">
                <p className="title-sub">MAIN</p>
                <li>

                    <div className="iocn-link" >
                        <Link to="/dashboard">
                            <DashboardIcon className="main-side-nav-icon" />
                            <span className="link_name fs-6 text-white">Dashboard</span>
                        </Link>
                        {/* <FontAwesomeIcon icon="chevron-down" className="arrow" onClick={toggleDropdown} /> */}
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard" className="link_name">Dashboard</Link></li>
                    </ul>
                </li>
                <p className="title-table">TABLES</p>
                <li>
                    <div className="iocn-link" id="courseMove">
                        <Link to="/dashboard/courses">
                            <FontAwesomeIcon icon="award" className="main-side-nav-icon" />

                            <span className="link_name fs-6 text-white">Course</span>
                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/courses" className="link_name">Course</Link></li>
                        <li><Link to="/dashboard/course/add"><FontAwesomeIcon icon="plus" className="submenu-side-nav-icon" />New Course</Link></li>
                    </ul>
                </li>

                <li>
                    <div className="iocn-link" id="subjectMove">
                        <Link to="/dashboard/subjects">
                            <MenuBookIcon fontSize='small' className="main-side-nav-icon" />
                            <span className="link_name fs-6 text-white">Subject</span>
                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/subjects" className="link_name">Subject</Link></li>
                        <li><Link to="/dashboard/subject/add"><FontAwesomeIcon icon="plus" className="submenu-side-nav-icon" />Add New Subject</Link></li>
                    </ul>
                </li>

                <p className="title-table"> CHARTS</p>
                <li>
                    <div className="iocn-link" id="courseMove">
                        <Link to="/dashboard/reports">
                            <b>
                                <InsertChartIcon fontSize='small' className="main-side-nav-icon" />
                            </b>

                            <span className="link_name fs-6 text-white">
                               Reports
                            </span>

                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />

                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/reports" className="link_name">Reports</Link></li>
                        <li><Link to="/dashboard/reports/#"><StarRateIcon className="submenu-side-nav-icon" />Top 10</Link></li>
                        <li><Link to="/dashboard/reports/#"><StarRateIcon className="submenu-side-nav-icon"/>Top Offered</Link></li>
                        <li><Link to="/dashboard/reports/#"><StarRateIcon className="submenu-side-nav-icon"/>Top Requested</Link></li>
                    </ul>

                </li>


                <p className="title-table">PROFILE</p>
                <li>
                    <div className="iocn-link" id="courseMove">
                        <Link to="/" onClick={logoutHandler}>
                            <b><ExitToAppIcon className="main-side-nav-icon"/></b>

                            <span className="link_name fs-6 text-white">Logout</span>

                        </Link>

                    </div>

                </li>


                <li>
                    <div className="profile-details">
                        <div className="profile-content">
                            <img src={user.avatar.url} alt=" " />
                        </div>
                        <div className="name-job">
                            <div className="profile_name">{user.username}</div>
                            <div className="job">{user.email}</div>
                        </div>
                        <i className='bx bx-log-out' ></i>
                    </div>
                </li>
            </ul>










        </div>
    )
}

export default Sidebar
