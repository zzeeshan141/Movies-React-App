import {createSelector} from 'reselect';
import { Map, List } from 'immutable';


const filterMoviesDetailResponse = () => {
    
    const moviesDetailResponse = state => {return state.getIn(['movieDetail']) || new Map();};
    const movieReviewsResponse = state => {return state.getIn(['movieReviews']) || new List();};

    const moviesDetailSelector = createSelector(
        moviesDetailResponse,
        filterData => filterData.get('payload') ||  new Map()
    );
    
    const getIsError = createSelector(
        moviesDetailResponse,
        filterData => filterData.get('error')
    );
    
    const getIsLoading = createSelector(
        moviesDetailResponse,
        filterData => filterData.get('loading')
    );

    const movieReviewsSelector = createSelector(
        movieReviewsResponse,
        filterData => filterData.get('payload') || new List()
    );

    return {
        moviesDetailSelector,
        movieReviewsSelector,
        getIsError,
        getIsLoading
    };
}

export default filterMoviesDetailResponse;