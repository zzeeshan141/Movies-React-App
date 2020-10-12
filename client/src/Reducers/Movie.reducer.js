import {REQUEST_SEARCH_MOVIES_PENDING,
    REQUEST_SEARCH_MOVIES_SUCCESS,
    REQUEST_SEARCH_MOVIES_FAILED,
    SEARCH_MOVIES} from './../Pages/Home/Home.actionTypes.js';
import { fromJS } from 'immutable';
import _ from 'lodash';

let initialState = fromJS([]);
export default (state = initialState, action) => {
    
    switch(action.type){
        case SEARCH_MOVIES:{
            return state;
        }

        case REQUEST_SEARCH_MOVIES_PENDING:{
            return state = 
                fromJS({
                    error: false,
                    loading: true,
                    payload: [],
                }
              );
        }

        case REQUEST_SEARCH_MOVIES_SUCCESS: {
            return fromJS({
                error: false,
                loading: false,
                payload: action.payload,
            });
        }

        case REQUEST_SEARCH_MOVIES_FAILED: {
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