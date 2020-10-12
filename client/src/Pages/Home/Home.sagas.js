import {call, put, takeLatest} from 'redux-saga/effects';

import { SEARCH_MOVIES } from './Home.actionTypes.js';

import { GET_ALL_GENRES} from './Home.actionTypes.js';

import { requestSearchMoviesPending,
    requestSearchMoviesSuccess,
    requestSearchMoviesFailed,
    requestGetAllGenresPending,
    requestGetAllGenresSuccess,
    requestGetAllGenresFailed  } from './Home.actions';
import MoviesAPI from './../../API/MoviesAPI';

function* fetchMoviesAsync(action) {
    try {
        yield put(requestSearchMoviesPending());
        //let payload = [];
        let payload = yield call(MoviesAPI.searchMovies, action.criteria);
        yield put(requestSearchMoviesSuccess({payload}));
    } catch (error) {
        yield put(requestSearchMoviesFailed());
    }
}

function* fetchGenresAsync(action) {
    try {
        yield put(requestGetAllGenresPending());
        let payload = yield call(MoviesAPI.getAllGenres);
        yield put(requestGetAllGenresSuccess({payload}));
    } catch (error) {
        yield put(requestGetAllGenresFailed());
    }
}

// Sagas
export function* watchFetchMovies() {
    yield takeLatest(SEARCH_MOVIES, fetchMoviesAsync);
}

export function* watchFetchGenres() {
    yield takeLatest(GET_ALL_GENRES, fetchGenresAsync);
}