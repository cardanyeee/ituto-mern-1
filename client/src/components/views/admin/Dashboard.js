import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { MDBDataTableV5 } from 'mdbreact';

import {
    Chart as ChartJS,
    registerables
} from "chart.js";

import './dashboard.scss'

import AdminHeader from '../../layout/admin/AdminHeader';
import MetaData from '../../layout/main/MetaData';
import Loader from '../../layout/main/Loader';
import Widget from '../../widget/widget';

import { allUsers } from '../../../actions/authActions';
import { getTuteeCount } from '../../../actions/reportActions';
import { getData } from '../../../actions/all_actions';

ChartJS.register(
    ...registerables
);

const Dashboard = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { users } = useSelector(state => state.allUsers);
    const { loading } = useSelector(state => state.datas);

    useEffect(() => {
        dispatch(getData());
        dispatch(allUsers());
        dispatch(getTuteeCount());
    }, [dispatch]);

    function convertIsTutor(status) {
        if (status === true) {
            return "Tutor";
        } else if (status === false) {
            return "Tutee";
        }
        return "";
    }

    const setUsers = () => {

        const data = {
            columns: [
                { label: 'Firstname', field: 'Firstname', width: 210 },
                { label: 'Lastname', field: 'Lastname', width: 150 },
                { label: 'Username', field: 'Username', width: 230 },
                { label: 'Gender', field: 'Gender', width: 230 },
                { label: 'Email', field: 'Email', width: 230 },
                { label: 'Role', field: 'Role', width: 230 },
                { label: 'Account', field: 'Type', width: 230 },
                { label: 'Phone', field: 'Phone', width: 230 },
                { label: 'Time', field: 'Time', width: 240 },
                { label: 'Status', field: 'Status', width: 100 },
                { label: 'Actions', field: 'actions', width: 100 }
            ],
            rows: []
        }

        users.forEach(allUsers => {
            data.rows.push({
                Firstname: allUsers.firstname,
                Lastname: allUsers.lastname,
                Username: allUsers.username,
                Gender: allUsers.gender,
                Email: allUsers.email,
                Type: convertIsTutor(allUsers.isTutor),
                Role: allUsers.role,
                Phone: allUsers.phone,
                Time: allUsers.createdAt,
                Status: allUsers.active ? "Active" : "Inactive",
                actions:
                    <Fragment>
                        <Link to={`/dashboard/user/update/${allUsers._id}`} className="btn btn-primary py-1 px-2 me-3">
                            <EditIcon />
                        </Link>

                    </Fragment>
            })
        })

        return data;

    }

    return (
        <Fragment>
            <Fragment>
                <AdminHeader />
                <MetaData title={'Admin Dashboard'} styles={'footer p {color: #000000 !important;}'} />
                {loading ? <Loader /> : (
                    <Fragment>

                        <div className="home-section table-responsive">
                            <div className="container-fluid">
                                <div className="row pr-4 pt-4">
                                    <div className="col-xl-4 pb-3" >
                                        <div className="greeting-font card shadow">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div className="color1 card-header py-3">
                                                <h5 className="greeting-font m-0 font-weight-bold" id="Username">Welcome <b>{user.username}!</b></h5>
                                            </div>
                                            {/* <!-- Card Body --> */}

                                            <div className="no-card col-sm-4 col-md-2 col-12 align-items-center text-center" id="tryspan">
                                                <div className="elevation-0 transparent v-card v-sheet theme--light">
                                                    <div className="v-card__text text-center" id="adminPicturePad">
                                                        <div className="v-avatar">
                                                            <img style={{ height: "250px", width: "250px", minHeight: "100%", maxWidth: "100%" }}
                                                                src={user.avatar.url} alt={user.avatar.public_id} className="g-image" />
                                                        </div>
                                                    </div>
                                                    <div primary-title="" className="v-card__title layout justify-center" >
                                                        <div className="color1 headline text-center" target="_blank" rel="noreferrer" >
                                                            {user.username}
                                                        </div>
                                                    </div>

                                                    <div primary-title="" className="v-card__title layout justify-center" >

                                                        <h6><b>{user.email}</b></h6>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* WWWIDGETSSSSSSSSS */}
                                    <div className="col-xl-8" >
                                        <div className="row pr-4">
                                            <div className="col-xl-4 mb-3">
                                                <div className="widgets">
                                                    <Widget type="subject" />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 mb-3">
                                                <div className="widgets">
                                                    <Widget type="male" />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 mb-3">
                                                <div className="widgets">
                                                    <Widget type="female" />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 mb-3">
                                                <div className="widgets" >
                                                    <Widget type="user" />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 mb-3">
                                                <div className="widgets">
                                                    <Widget type="tutor" />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 mb-3">
                                                <div className="widgets">
                                                    <Widget type="other" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* USERS TABLES */}
                            <div className="container-fluid">
                                <div className="row pr-4 pt-2">
                                    <div className="col col-lg-12">
                                        <div className="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div className="card-header py-3">
                                                <h6 className="color1 m-0 font-weight-bold">REGISTERED USERS</h6>
                                            </div>
                                            {/* <!-- Card Body --> */}

                                            {/* USER DATA SECTION */}
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <Fragment>
                                                        {loading ? <Loader /> : (
                                                            <MDBDataTableV5 className="adjust-table"
                                                                data={setUsers()}
                                                                striped
                                                                hover
                                                                searchTop
                                                                searchBottom={false}
                                                                barReverse
                                                            />
                                                        )}
                                                    </Fragment>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* DONUTTTT SECTIONNNNN*/}
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </Fragment>
        </Fragment >
    )
}

export default Dashboard



