import { spawn, all } from 'redux-saga/effects';
import {watchFetchMovieDetail, watchFetchMovieReview} from './MovieDetail.sagas';

export default function* rootSaga() {
  yield all([spawn(watchFetchMovieDetail)]);
  yield all([spawn(watchFetchMovieReview)]);
}
