import { spawn, all } from 'redux-saga/effects';
import {watchFetchMovies, watchFetchGenres} from './Home.sagas';

export default function* rootSaga() {
  yield all([spawn(watchFetchMovies)]);
  yield all([spawn(watchFetchGenres)]);
}
