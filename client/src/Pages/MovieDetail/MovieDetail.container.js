
import {connect} from 'react-redux';
import {getMovieReviews, getMovieDetail} from './MovieDetail.actions';
import filterMoviesDetailResponse from './MovieDetail.selector';
import MovieDetail from './MovieDetail';


const mapStateToProps = (state) => {
    const {moviesDetailSelector, getIsError, getIsLoading, movieReviewsSelector} = filterMoviesDetailResponse();
    return {
        movie: moviesDetailSelector(state).toJS(),
        movieReview: movieReviewsSelector(state).toJS(),
        isLoading: getIsLoading(state),
        isError: getIsError(state)
    };
};

export default connect(mapStateToProps, {getMovieReviews, getMovieDetail})(MovieDetail);