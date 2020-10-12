import {REQUEST_GET_MOVIE_REVIEWS_PENDING,
    REQUEST_GET_MOVIE_REVIEWS_SUCCESS,
    REQUEST_GET_MOVIE_REVIEWS_FAILED,
    GET_MOVIE_REVIEWS} from './../Pages/MovieDetail/MovieDetail.actionTypes';
import { fromJS } from 'immutable';
import _ from 'lodash';

let initialState = fromJS([]);
export default (state = initialState, action) => {

    switch(action.type){
        case GET_MOVIE_REVIEWS:{
            return state;
        }

        case REQUEST_GET_MOVIE_REVIEWS_PENDING:{
            return state = 
                fromJS({
                    error: false,
                    loading: true,
                    payload: [],
                }
              );
        }

        case REQUEST_GET_MOVIE_REVIEWS_SUCCESS: {
            return fromJS({
                error: false,
                loading: false,
                payload: action.payload,
            });
        }

        case REQUEST_GET_MOVIE_REVIEWS_FAILED: {
            return fromJS({
                error: true,
                loading: false,
                payload: [],
            });
        }

        default:
            return state;
    }
};