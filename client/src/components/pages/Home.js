import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';
import './home.css';

const Home = ({ match }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error } = useSelector(state => state.movies);

    const keyword = match.params.keyword;

    useEffect(() => {

        if (error) {
            return alert.error(error);
        }

    }, [dispatch, alert, error, keyword]);



    if (keyword) {
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Home'} />

                </Fragment>
            )}
        </Fragment>
    )
}

export default Home
