import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import MetaData from '../layout/main/MetaData';
import Loader from '../layout/main/Loader';

import Header from '../layout/main/Header';
import TermsConditionContent from './TermsConditonContent';
import Footer from '../layout/main/Footer';

import './home.css';

const TermsConditions = ({ match }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error } = useSelector(state => state.auth);

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
                     <Header/>
                    
                    <MetaData title={'Home'} />
                    <TermsConditionContent/>

                    <Footer/>

                </Fragment>
            )}
        </Fragment>
    )
}

export default TermsConditions
