import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import { useAlert } from 'react-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';

import MovieCards from '../movie/MovieCards';
import { getMovies } from '../../actions/movieActions';

import './home.css';

const Home = ({ match }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [rating, setRating] = useState(0);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, movies, error, moviesCount, resPerPage, filteredMoviesCount } = useSelector(state => state.movies);
    console.log(movies);
    const keyword = match.params.keyword;

    useEffect(() => {

        if (error) {
            return alert.error(error);
        }

        dispatch(getMovies(keyword, currentPage, startDate, endDate, rating));

    }, [dispatch, alert, error, keyword, currentPage, startDate, endDate, rating]);

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber);
    }

    const showRating = (rating) => {
        var rows = [];
        for (var i = 0; i < rating; i++) {
            rows.push(<FontAwesomeIcon className="text-warning" icon="star" key={i} />);
        }

        for (var a = 5; a > rating; a--) {
            rows.push(<FontAwesomeIcon className="text-warning" icon={["far", "star"]} key={a} />);
        }
        return rows;
    }

    let count = moviesCount;
    if (keyword) {
        count = filteredMoviesCount
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
