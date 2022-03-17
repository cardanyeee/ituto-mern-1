import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = (props) => {

    const toggleDropdown = (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    }

    return (
        <div className={"sidebar h-100 shadow-sm " + (props.sidebarToggle === true ? "close" : "")}>
            <Link to="/" className="text-decoration-none">
                <div className="logo-details shadow-sm">
                    <FontAwesomeIcon icon="ticket-alt" className="text-white" />
                    {/* <img src="/images/applogo.png" width="50"/> */}
                    <span className="logo_name fw-bold text-nowrap logo-brand text-white">iTuto</span>
                </div>
            </Link>

            <ul className="nav-links px-0 pt-3">
                <p className="title-sub">MAIN</p>
                <li>

                    <div className="iocn-link" >
                        <Link to="/dashboard">
                            <DashboardIcon className="main-side-nav-icon text-white" />
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
                            <FontAwesomeIcon icon="award" className="main-side-nav-icon text-white" />

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
                            <FontAwesomeIcon icon="book" className="main-side-nav-icon text-white" />
                            <span className="link_name fs-6 text-white">Subject</span>
                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/subjects" className="link_name">Subject</Link></li>
                        <li><Link to="/dashboard/subject/add"><FontAwesomeIcon icon="plus" className="submenu-side-nav-icon" />Add New Subject</Link></li>
                    </ul>
                </li>


                {/* <li>
                    <div className="iocn-link">
                        <Link to="/dashboard/testing">
                            <FontAwesomeIcon icon="fork" className="main-side-nav-icon text-white" />
                            <span className="link_name fs-6 text-white">Subject</span>
                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/subjects" className="link_name">Subject</Link></li>
                        <li><Link to="/dashboard/subject/add"><FontAwesomeIcon icon="plus" className="submenu-side-nav-icon" />Add New Subject</Link></li>
                    </ul>
                </li> */}




                {/* <li>
                <div className="profile-details">
                    <div className="profile-content">
                        <img src={empty_profile} alt=" " />
                    </div>
                    <div className="name-job">
                        <div className="profile_name">Prem Shahi</div>
                        <div className="job">Web Desginer</div>
                    </div>
                    <i className='bx bx-log-out' ></i>
                </div>
            </li> */}
            </ul>










        </div>
    )
}

export default Sidebar
