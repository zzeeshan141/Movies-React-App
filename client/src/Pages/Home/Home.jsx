import React, { useEffect, useState} from 'react';
import MovieFilter from './../../Components/MovieFilters';
import MoviesGrid from './../../Components/MoviesGrid';
import styles from './Home.module.scss';
import {generateRatingDummyData} from './../../DummayData/rating';
import {generateSortByDummyData} from './../../DummayData/sortBy';
import {generateLanguageDummyData} from './../../DummayData/language';
import {generateReleaseYearDummyData} from './../../DummayData/releaseDate';
import {validateFilterValueChanges, usePrevious} from './Home.utility';
import PropTypes from 'prop-types';

const Home = (props) => {

    const [filters, setFilters] = useState({
        titleSearch: '',
        genre: 0,
        releaseDate: 0,
        rating: 0,
        sortBy: 1,
        language: ''
    });
    const [movies, setMovies] = useState([]);
    const [filtersRefData, setFiltersRefData] = useState({
        genres: [],
        year: generateReleaseYearDummyData(),
        ratings: generateRatingDummyData(),
        sortBy: generateSortByDummyData(),
        languages: generateLanguageDummyData(),
    });
    const prevFilters = usePrevious(filters);

    useEffect(() => {
        //loading genres from TMDB api
        props.getAllGenres();

        //loading popular movies from TMDB api
        props.searchMovies(filters);
    }, []);

    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies]);

    useEffect(() => {
        let tempFiltersRefData = filtersRefData;
        tempFiltersRefData.genres = props.genres;
        setFiltersRefData(tempFiltersRefData);
    }, [props.genres]);

    useEffect(() => {
        //loading popular movies from TMDB api
        if(validateFilterValueChanges(prevFilters, filters))
            props.searchMovies(filters);
    }, [filters]);

    //we can use isLoading here to show some splash/loading screen
    // but for that we also need to maintain filter state on UI.
    return(
        <div className={styles["home-container"]}>
            <p className={styles["label-movie-count"]}>All Movies: <span className={styles["movie-count-border"]}>{movies.length}</span></p>
            <MovieFilter filters={filters} filtersRefData={filtersRefData} filterCurrentState={filters} onFilterChange={(newFilters => setFilters(newFilters))}/>
            <MoviesGrid movies={movies}/>
        </div>
    );
};

Home.propTypes = {
    movies: PropTypes.array,
    genres: PropTypes.array,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
};
  
Home.defaultProps = {
    movies: [],
    genres: [],
    isLoading: true,
    isError: false,
};

export default Home;