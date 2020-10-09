import React, { Component} from 'react';
import MovieCard from './../MovieCard';
import styles from './MoviesGrid.module.scss';
import {generateMovieDummyData} from './../../DummayData/movie';

const renderMovies = (movies) => {
    return movies.map((movie, index) => {
        return (<MovieCard key={movie.id} movie={movie}/>);
    });
}

const MoviesGrid = ({movies}) => {
    return (
        <div className={styles["movielist-container"]}>
            {renderMovies(movies)}
        </div>
    )
}

export default MoviesGrid;