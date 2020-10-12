import React, { useState, useEffect } from 'react';
import styles from './MovieDetail.module.scss';
import MovieDetailRow from './../../Components/MovieAttributeRow';
import MovieReviews from './../../Components/MovieReviews';
import { ImageUrlPrefix } from './../../API/APIConfig';
import PropTypes from 'prop-types';
import {extractPropertiedForRowOne, 
    extractPropertiedForRowTwo, 
    extractPropertiedForRowThree, 
    extractPropertiedForRowFour} from './MovieDetail.utility'

const MovieDetail = (props) => {
    const [movie, setMovie] = useState(undefined);
    const [reviews, setReviews] = useState([]);
    const [showReviews, setShowReviews] = useState(false);

    useEffect(() => {
        //fetch movie detail by id
        props.getMovieDetail(props.match.params.id);

        //fetch movie reviews by movie is
        props.getMovieReviews(props.match.params.id);
    }, []);

    useEffect(() => {
        if(props.movie != undefined)
            setMovie(props.movie);
    }, [props.movie]);

    useEffect(() => {
        setReviews(props.movieReview);
    }, [props.movieReview]);

    if(movie != undefined && Object.keys(movie).length > 0){
        return(
            <div className={styles["movie-detail-main-container"]}>
                <div className={styles["movie-detail-container"]}>
                    <div className={styles["left-main"]}>
                        <img src={ImageUrlPrefix + movie.poster_path} alt="" />
                    </div>
                    <div className={styles["right-main"]}>
                        <p className={styles["movie-title"]}>{movie.title}</p>
                        <p className={styles["movie-overview-heading"]}>Overview</p>
                        <p>{movie.overview}</p>
                        <MovieDetailRow movieAttributes={extractPropertiedForRowOne(movie)}/>
                        <MovieDetailRow movieAttributes={extractPropertiedForRowTwo(movie)}/>
                        <MovieDetailRow movieAttributes={extractPropertiedForRowThree(movie)}/>
                        <MovieDetailRow movieAttributes={extractPropertiedForRowFour(movie)}/>
                    </div>
                </div>
                <button onClick={(e) => setShowReviews(!showReviews)}>{showReviews ? 'Hide Review' : 'Show Reviews (Extracts)'}</button>
                {showReviews && (<MovieReviews reviews={reviews}/>)}
            </div>
        );
    }
    return(
        <div className={styles["movie-detail-main-container"]}>
            <h2>Loading...</h2>
        </div>
    );
};

MovieDetail.propTypes = {
    movie: PropTypes.object,
    movieReview: PropTypes.array,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
};
  
MovieDetail.defaultProps = {
    movie: {},
    movieReview: [],
    isLoading: true,
    isError: false,
};

export default MovieDetail;