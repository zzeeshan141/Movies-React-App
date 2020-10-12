import {REQUEST_GET_MOVIE_DETAIL_PENDING,
    REQUEST_GET_MOVIE_DETAIL_SUCCESS,
    REQUEST_GET_MOVIE_DETAIL_FAILED,
    GET_MOVIE_DETAIL} from './../Pages/MovieDetail/MovieDetail.actionTypes';
import { fromJS } from 'immutable';
import _ from 'lodash';

let initialState = fromJS([]);
export default (state = initialState, action) => {
    switch(action.type){
        case GET_MOVIE_DETAIL:{
            return state;
        }

        case REQUEST_GET_MOVIE_DETAIL_PENDING:{
            return state = 
                fromJS({
                    error: false,
                    loading: true,
                    payload: {}
                }
              );
        }

        case REQUEST_GET_MOVIE_DETAIL_SUCCESS: {
            return fromJS({
                error: false,
                loading: false,
                payload: action.payload,
            });
        }

        case REQUEST_GET_MOVIE_DETAIL_FAILED: {
            return fromJS({
                error: true,
                loading: false,
                payload: {},
            });
        }

        default:
            return state;
    }
};