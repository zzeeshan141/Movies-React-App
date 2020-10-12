import {call, put, takeLatest} from 'redux-saga/effects';
import { requestGetMovieDetailPending,
    requestGetMovieDetailSuccess,
    requestGetMovieDetailFailed } from './MovieDetail.actions';
import { requestGetMovieReviewsPending,
    requestGetMovieReviewsSuccess,
    requestGetMovieReviewsFailed } from './MovieDetail.actions';

import { GET_MOVIE_DETAIL} from './MovieDetail.actionTypes';
import { GET_MOVIE_REVIEWS} from './MovieDetail.actionTypes';
import MoviesAPI from './../../API/MoviesAPI';

function* fetchMoviesDetailAsync(action) {
    try {
        yield put(requestGetMovieDetailPending());
        let payload = yield call(MoviesAPI.getMovieDetailById, action.id);
        yield put(requestGetMovieDetailSuccess({payload}));
    } catch (error) {
        yield put(requestGetMovieDetailFailed());
    }
}

function* fetchMoviesReviewAsync(action) {
    try {
        yield put(requestGetMovieReviewsPending());
        let payload = yield call(MoviesAPI.getMovieReviewsById, action.id);
        yield put(requestGetMovieReviewsSuccess({payload}));
    } catch (error) {
        yield put(requestGetMovieReviewsFailed());
    }
}

// Sagas
export function* watchFetchMovieDetail() {
    yield takeLatest(GET_MOVIE_DETAIL, fetchMoviesDetailAsync);
}

export function* watchFetchMovieReview() {
    yield takeLatest(GET_MOVIE_REVIEWS, fetchMoviesReviewAsync);
}