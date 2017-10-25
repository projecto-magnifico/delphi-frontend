import * as types from './types.js';
import axios from 'axios';

const API_URL = 'localhost:3000/api';

export const fetchKeywordsRequest = () => ({
    type: types.FETCH_KEYWORDS_REQUEST
});

export const fetchKeywordsSuccess = (data) => ({
    type: types.FETCH_KEYWORDS_SUCCESS,
    payload: data
});

export const fetchKeywordsFailure = (error) => ({
    type: types.FETCH_KEYWORDS_FAILURE,
    payload: error
});

export const fetchKeywordsById = (id) => {
    return (dispatch) => {
        dispatch(fetchKeywordsRequest());
        return axios.get(`${API_URL}/keywords/${id}`)
            .then(res => {

                dispatch(fetchKeywordsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchKeywordsFailure(error.message));
            });
    };
};