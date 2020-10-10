import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MovieDetail.module.scss';
import MovieDetailRow from './../../Components/MovieAttributeRow';
import MovieReviews from './../../Components/MovieReviews';

import { BaseUrl, ApiKey, ImageUrlPrefix } from './../../API/APIConfig';


function extractPropertiedForRowOne(movie){
    return {'Runtime (min.)': movie.runtime, 'Release Date': movie.release_date};
}

function extractPropertiedForRowTwo(movie){
    return {'Genre': movie.genres.map(genre => {return genre.name})};
}

function extractPropertiedForRowThree(movie){
    return {'Spoken Langauge': movie.spoken_languages.map(language => {return language.name})};
}

function extractPropertiedForRowFour(movie){
    return {'Production Companies': movie.production_companies.map(company => {return company.name})};
}

const MovieDetail = ({match}) => {

    const [movie, setMovie] = useState(undefined);
    const [reviews, setReviews] = useState([]);
    const [showReviews, setShowReviews] = useState(false);

    useEffect(() => {
        axios.get(BaseUrl + '/movie/' + match.params.id + '?api_key=' + ApiKey)
        .then(res => {
            setMovie(res.data);
        });

        axios.get(BaseUrl + '/movie/' + match.params.id + '/reviews?api_key=' + ApiKey)
        .then(res => {
            setReviews(res.data.results); 
        });
    }, []);


    if(movie != undefined){
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

export default MovieDetail;