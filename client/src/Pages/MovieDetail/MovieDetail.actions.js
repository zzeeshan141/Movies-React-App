import {REQUEST_GET_MOVIE_DETAIL_PENDING,
    REQUEST_GET_MOVIE_DETAIL_SUCCESS,
    REQUEST_GET_MOVIE_DETAIL_FAILED,
    GET_MOVIE_DETAIL} from './MovieDetail.actionTypes';

import {REQUEST_GET_MOVIE_REVIEWS_PENDING,
    REQUEST_GET_MOVIE_REVIEWS_SUCCESS,
    REQUEST_GET_MOVIE_REVIEWS_FAILED,
    GET_MOVIE_REVIEWS} from './MovieDetail.actionTypes';

//Movie Detail Actions
export function getMovieDetail(id) {
    return { type: GET_MOVIE_DETAIL, id } 
};

export function requestGetMovieDetailPending() {
    return { type: REQUEST_GET_MOVIE_DETAIL_PENDING }
};
  
export function requestGetMovieDetailSuccess({payload}) {
    return { type: REQUEST_GET_MOVIE_DETAIL_SUCCESS, payload }
};
  
export function requestGetMovieDetailFailed() {
    return { type: REQUEST_GET_MOVIE_DETAIL_FAILED }
};


//Movie Review Actions
export function getMovieReviews(id) {
    return { type: GET_MOVIE_REVIEWS, id } 
};

export function requestGetMovieReviewsPending() {
    return { type: REQUEST_GET_MOVIE_REVIEWS_PENDING }
};
  
export function requestGetMovieReviewsSuccess({payload}) {
    return { type: REQUEST_GET_MOVIE_REVIEWS_SUCCESS, payload }
};
  
export function requestGetMovieReviewsFailed() {
    return { type: REQUEST_GET_MOVIE_REVIEWS_FAILED }
};