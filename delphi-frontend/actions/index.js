import * as types from './types.js';
import axios from 'axios';

const API_URL = 'localhost:3000/api';

export const fetchThreadsRequest = () => ({
    type: types.FETCH_THREADS_REQUEST
});

export const fetchThreadsSuccess = (data) => ({
    type: types.FETCH_THREADS_SUCCESS,
    payload: data
});

export const fetchThreadsFailure = (error) => ({
    type: types.FETCH_THREADS_FAILURE,
    payload: error
});

export const fetchArticlesAndKeywordsByThreads = (count = 10) => {
    return (dispatch) => {
        dispatch(fetchThreadsRequest());
        return axios.get(`${API_URL}/threads?count=${count}`)
            .then(res => {  
                dispatch(fetchThreadsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchThreadsFailure(error.message));
            });
    };
};

export const fetchArticlesAndKeywordsByThreadId = (id) => {
    return (dispatch) => {
        dispatch(fetchThreadsRequest());
        return axios.get(`${API_URL}/threads/${id}`)
            .then(res => {

                dispatch(fetchThreadsSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchThreadsFailure(error.message));
            });
    };
};




