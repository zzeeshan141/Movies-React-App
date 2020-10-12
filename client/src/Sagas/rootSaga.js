import { all, fork, spawn } from 'redux-saga/effects';
import HomeSaga from './../Pages/Home/Home.root.saga';
import MovieDetailSaga from './../Pages/MovieDetail/MovieDetail.root.saga';

export default function* root() {
    yield all([
        fork(HomeSaga),
        fork(MovieDetailSaga),
    ]);
}