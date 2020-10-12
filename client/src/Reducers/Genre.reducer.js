import {REQUEST_GET_ALL_GENRES_PENDING,
    REQUEST_GET_ALL_GENRES_SUCCESS,
    REQUEST_GET_ALL_GENRES_FAILED,
    GET_ALL_GENRES} from './../Pages/Home/Home.actionTypes.js';
import { fromJS } from 'immutable';

let initialState = fromJS([]);
export default (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_GENRES:{
            return state;
        }

        case REQUEST_GET_ALL_GENRES_PENDING:{
            return state = 
                fromJS({
                    error: false,
                    loading: true,
                    payload: [],
                }
              );
        }

        case REQUEST_GET_ALL_GENRES_SUCCESS: {
            return fromJS({
                error: false,
                loading: false,
                payload: action.payload,
            });
        }

        case REQUEST_GET_ALL_GENRES_FAILED: {
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