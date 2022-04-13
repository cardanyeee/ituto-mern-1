import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from '../../layout/main/Loader';
import Sidebar from './Sidebar';

import '../../layout/admin/Sidebar.css';



const AdminHeader = () => {

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }

    const { loading } = useSelector(state => state.auth);

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <Sidebar sidebarToggle={sidebar} />
                    <nav className="home-section navbar navbar-expand-lg navbar-light bg-white topbar sticky-top shadow-sm">
                        <div className="container-fluid">
                            <FontAwesomeIcon icon="bars" className="sidebar-toggler" size="2x" onClick={toggleSidebar} />
                            <div >
                            <img className="logo-close" src="/images/footerLogo.PNG" alt="GROUP-NAME" width="50"/>
                            </div>
                            {/* <a className="navbar-brand fw-bold" href="/#">Movies</a> */}
                        </div>
                    </nav>
                </Fragment>
            )}
        </Fragment>

    )
}

export default AdminHeader
