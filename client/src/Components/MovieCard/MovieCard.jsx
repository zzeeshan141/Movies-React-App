import React, { useState, useContext } from 'react';
import styles from './MovieCard.module.scss';
import default_poser from './../../assets/images/default_poser.jpg';
import calendarIcon from './../../assets/icons/calendar.png';
import starIcon from './../../assets/icons/star.png';
import { Link } from "react-router-dom";
import {ImageUrlPrefix} from './../../API/APIConfig';
import {FavouriteMoviesContext} from './../../App';

function isMovieMarkedFavourite(favouriteMovies, movie){
    console.log('inside isMovieMarkedFavourite');
    console.log(favouriteMovies);
    return favouriteMovies != undefined 
        ? favouriteMovies.some((movieItem) => movieItem.id === movie.id)
        : false;
}

const MovieCard = ({ movie }) => {
    const favouriteMoviesContext = useContext(FavouriteMoviesContext);

    const [favouriteButtonDisabled, setFavouriteButtonDisabled] = useState(false);

    return(
        <div className={styles["movie-card-container"]}>
            <div className={styles["movie-image"]}>
                <Link to={`/movie/${movie.id}`} ><img src={movie.poster_path != null ? ImageUrlPrefix + movie.poster_path : default_poser} alt='' /></Link>
            </div>
            <div className={styles["movie-title"]}>
                <Link to={`/movie/${movie.id}`}><p><b>{movie.title}</b></p></Link>
            </div>
            <div className={styles["movie-row"]}>
                <a href="#"><img src={calendarIcon} alt=""/></a>
                <p>{movie.release_date}</p>
            </div>
            <div className={styles["movie-row"]}>
                <a href="#"><img src={starIcon} alt=""/></a>
                <p>{movie.vote_average}</p>
            </div>
            <button disabled={isMovieMarkedFavourite(favouriteMoviesContext.movies, movie)} 
            onClick={() => {
                favouriteMoviesContext.AddFavouriteMovies(movie);
                setFavouriteButtonDisabled(true);
            }}>Add to Facourites</button>
        </div>
    );
};

export default MovieCard;