import {createSelector} from 'reselect';
import { List } from 'immutable';


const filterMoviesResponse = () => {
    
    const moviesResponse = state => {return state.getIn(['movies']) || new Map();};
    const genresResponse = state => {return state.getIn(['genres']) || new Map();};

    const getMovies = createSelector(
        moviesResponse,
        filterData => filterData.get('payload') || new List()
    );
    
    const getIsError = createSelector(
        moviesResponse,
        filterData => filterData.get('error')
    );
    
    const getIsLoading = createSelector(
        moviesResponse,
        filterData => filterData.get('loading')
    );

    const getAllGenresSelector = createSelector(
        genresResponse,
        filterData => filterData.get('payload') || new List()
    );

    return {
        getMovies,
        getAllGenresSelector,
        getIsError,
        getIsLoading
    };
}

export default filterMoviesResponse;