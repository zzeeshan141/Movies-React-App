import axios from 'axios';
import {BaseUrl, ApiKey} from './APIConfig';
import {getMoviesParametersString} from './MoviesAPI.utility';

const MoviesAPI = {
    searchMovies: criteria => {
        //there are two endpoints. if you want to search by movie title then use '/search/movie'
        // if you want to search by any other criteria then use /discover/movie
        let url = criteria.titleSearch.length > 0
            ? BaseUrl + '/search/movie?api_key=' + ApiKey + `&language=en-US&query=${criteria.titleSearch.replace(' ', '%20')}&page=1&include_adult=false`
            : BaseUrl + '/discover/movie?api_key=' + ApiKey + getMoviesParametersString(criteria);

        return axios.get(url)
        .then(res => {
            return res.data.results;
        });
    },

    getAllGenres: () => {
        return axios.get(BaseUrl + '/genre/movie/list?api_key=' + ApiKey)
        .then(res => {
            return res.data.genres.map(genre => {
                return {id: genre.id, value: genre.name}
            });
        });
    },

    getMovieDetailById: (id) => {
        return axios.get(BaseUrl + '/movie/' + id + '?api_key=' + ApiKey)
        .then(res => {
            return res.data;
        });
    },

    getMovieReviewsById: (id) => {
        return axios.get(BaseUrl + '/movie/' + id + '/reviews?api_key=' + ApiKey)
        .then(res => {
            return res.data.results; 
        });
    }
};

export default MoviesAPI;