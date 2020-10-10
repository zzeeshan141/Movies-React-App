import React, { useContext } from 'react';
import { FavouriteMoviesContext } from './../../App';
import MoviesGrid from './../../Components/MoviesGrid';
import styles from './FavouriteMovies.module.scss';

const FavouriteMovies = () => {
    const favouriteMoviesContext = useContext(FavouriteMoviesContext);
    return(
        <div className={styles["fovurite-container"]}>
            <p className={styles["label-movie-count"]}>All Movies: <span className={styles["movie-count-border"]}>{favouriteMoviesContext.length}</span></p>
            <MoviesGrid movies={favouriteMoviesContext.movies}/>
        </div>
    );
};

export default FavouriteMovies;