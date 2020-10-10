import React, { useEffect, useState, useRef} from 'react';
import axios from 'axios';
import MovieFilter from './../../Components/MovieFilters';
import MoviesGrid from './../../Components/MoviesGrid';
import {getParametersString} from './Home.container.js';
import { BaseUrl, ApiKey } from './../../API/APIConfig'
import styles from './Home.module.scss';
import {generateRatingDummyData} from './../../DummayData/rating';
import {generateSortByDummyData} from './../../DummayData/sortBy';
import {generateLanguageDummyData} from './../../DummayData/language';
import {generateReleaseYearDummyData} from './../../DummayData/releaseDate';


function validateFilterValueChanges(prevFilters, newFilters){
    if(prevFilters != undefined){
        if(prevFilters.titleSearch != newFilters.titleSearch)
            return true;
        if(prevFilters.genre != newFilters.genre)
            return true;
        if(prevFilters.releaseDate != newFilters.releaseDate)
            return true;
        if(prevFilters.rating != newFilters.rating)
            return true;
        if(prevFilters.language != newFilters.language)
            return true;
        if(prevFilters.sortBy != newFilters.sortBy)
            return true;
    }
    
    return false;
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}


const Home = () => {

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
        axios.get(BaseUrl + '/genre/movie/list?api_key=' + ApiKey)
        .then(res => {
            let tempFiltersRefData = filtersRefData;
            let tempGenres = res.data.genres.map(genre => {
                return {id: genre.id, value: genre.name}
            });
            tempFiltersRefData.genres = tempGenres;
            setFiltersRefData(tempFiltersRefData);
        });

        axios.get(BaseUrl + '/discover/movie?api_key=' + ApiKey + getParametersString(filters))
        .then(res => {
            setMovies(res.data.results);
        });
    }, []);

    useEffect(() => {
        if(filters.titleSearch && filters.titleSearch != filters.titleSearch){
            axios.get(BaseUrl + '/search/movie?api_key=' + ApiKey + `&language=en-US&query=${filters.titleSearch.replace(' ', '%20')}&page=1&include_adult=false`)
            .then(res => {
                setMovies(res.data.results);
            });
        }
        else if(validateFilterValueChanges(prevFilters, filters)){
            axios.get(BaseUrl + '/discover/movie?api_key=' + ApiKey + getParametersString(filters))
            .then(res => {
                setMovies(res.data.results);
            });
        }
    }, [filters]);

    return(
        <div className={styles["home-container"]}>
            <p className={styles["label-movie-count"]}>All Movies: <span className={styles["movie-count-border"]}>{movies.length}</span></p>
            <MovieFilter filters={filters} filtersRefData={filtersRefData} onFilterChange={(newFilters => setFilters(newFilters))}/>
            <MoviesGrid movies={movies}/>
        </div>
    );
};

export default Home;