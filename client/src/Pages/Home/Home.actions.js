import {REQUEST_GET_ALL_GENRES_PENDING,
    REQUEST_GET_ALL_GENRES_SUCCESS,
    REQUEST_GET_ALL_GENRES_FAILED,
    GET_ALL_GENRES} from './Home.actionTypes.js';
import {REQUEST_SEARCH_MOVIES_PENDING,
    REQUEST_SEARCH_MOVIES_SUCCESS,
    REQUEST_SEARCH_MOVIES_FAILED,
    SEARCH_MOVIES} from './Home.actionTypes.js';


//Genres Actions
export function getAllGenres(criteria) {
    return { type: GET_ALL_GENRES, criteria } 
};

export function requestGetAllGenresPending() {
    return { type: REQUEST_GET_ALL_GENRES_PENDING }
};
  
export function requestGetAllGenresSuccess({payload}) {
    return { type: REQUEST_GET_ALL_GENRES_SUCCESS, payload }
};
  
export function requestGetAllGenresFailed() {
    return { type: REQUEST_GET_ALL_GENRES_FAILED }
};


//Movies Action
export function searchMovies(criteria) {
    return { type: SEARCH_MOVIES, criteria } 
};

export function requestSearchMoviesPending() {
    return { type: REQUEST_SEARCH_MOVIES_PENDING }
};
  
export function requestSearchMoviesSuccess({payload}) {
    return { type: REQUEST_SEARCH_MOVIES_SUCCESS, payload }
};
  
export function requestSearchMoviesFailed() {
    return { type: REQUEST_SEARCH_MOVIES_FAILED }
};