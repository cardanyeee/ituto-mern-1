import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <span className="logo_name fw-bold text-nowrap logo-brand text-white">iTuto</span>
                </div>
            </Link>
            <ul className="nav-links px-0 pt-3">
                <li>
                    <div className="iocn-link">
                        <Link to="/dashboard">
                            <FontAwesomeIcon icon="tachometer-alt" className="main-side-nav-icon text-white" />
                            <span className="link_name fs-6 text-white">Dashboard</span>
                        </Link>
                        {/* <FontAwesomeIcon icon="chevron-down" className="arrow" onClick={toggleDropdown} /> */}
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard" className="link_name">Dashboard</Link></li>
                    </ul>
                </li>

                <li>
                    <div className="iocn-link">
                        <Link to="/dashboard/movies">
                            <FontAwesomeIcon icon="film" className="main-side-nav-icon text-white" />
                            <span className="link_name fs-6 text-white">Movies</span>
                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/movies" className="link_name">Movies</Link></li>
                        <li><Link to="/dashboard/movie/add"><FontAwesomeIcon icon="plus" className="submenu-side-nav-icon" />Add Movie</Link></li>
                    </ul>
                </li>

                <li>
                    <div className="iocn-link">
                        <Link to="/dashboard/actors">
                            <FontAwesomeIcon icon="theater-masks" className="main-side-nav-icon text-white" />
                            <span className="link_name fs-6 text-white">Actors</span>
                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/actors" className="link_name">Actor</Link></li>
                        <li><Link to="/dashboard/actor/add"><FontAwesomeIcon icon="plus" className="submenu-side-nav-icon" />Add Actor</Link></li>
                    </ul>
                </li>

                <li>
                    <div className="iocn-link">
                        <Link to="/dashboard/producers">
                            <FontAwesomeIcon icon="bullhorn" className="main-side-nav-icon text-white" />
                            <span className="link_name fs-6 text-white">Producers</span>
                        </Link>
                        <FontAwesomeIcon icon="chevron-down" className="arrow text-white" onClick={toggleDropdown} />
                    </div>
                    <ul className="sub-menu">
                        <li><Link to="/dashboard/producers" className="link_name text-white">Producers</Link></li>
                        <li><Link to="/dashboard/producer/add"><FontAwesomeIcon icon="plus" className="submenu-side-nav-icon text-white" />Add Producer</Link></li>
                    </ul>
                </li>


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
