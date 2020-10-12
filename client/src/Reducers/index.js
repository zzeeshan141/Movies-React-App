import {combineReducers} from 'redux-immutable';
import moviesReducer from './Movie.reducer';
import genreReducer from './Genre.reducer';
import movieDetailReducer from './MovieDetail.reducer';
import movieReviewsReducer from './MovieReviews.reducer';


export default combineReducers({
    movies: moviesReducer,
    genres: genreReducer,
    movieDetail: movieDetailReducer,
    movieReviews: movieReviewsReducer
});