import * as types from './types.js';
import axios from 'axios';

const API_URL = 'localhost:3000/api';

export const fetchArticlesRequest = () => ({
    type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (data) => ({
    type: types.FETCH_ARTICLES_SUCCESS,
    payload: data
});

export const fetchArticlesFailure = (error) => ({
    type: types.FETCH_ARTICLES_FAILURE,
    payload: error
});

export const fetchArticlesById = (id) => {
    return (dispatch) => {
        dispatch(fetchArticlesRequest());
        return axios.get(`${API_URL}/articles/${id}`)
            .then(res => {

                dispatch(fetchArticlesSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchArticlesFailure(error.message));
            });
    };
};


