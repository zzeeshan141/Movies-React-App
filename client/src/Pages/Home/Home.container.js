import {connect} from 'react-redux';
import Home from './Home';
import { searchMovies, getAllGenres } from './Home.actions';
import filterMoviesResponse from './Home.selectors';


const mapStateToProps = (state) => {
    const {getMovies, getIsError, getIsLoading, getAllGenresSelector} = filterMoviesResponse();
    
    return {
        movies: getMovies(state).toJS(),
        genres: getAllGenresSelector(state).toJS(),
        isLoading: getIsLoading(state),
        isError: getIsError(state)
    };
};

export default connect(mapStateToProps, {searchMovies, getAllGenres})(Home);