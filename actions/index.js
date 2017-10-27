import * as types from './types.js';
import * as targets from './targets.js';
import axios from 'axios';

const API_URL = 'localhost:3000/api';

export const fetchRequest = (target) => ({
    type : types.FETCH_REQUEST,
    target : target
});

export const fetchSuccess = (data, target) => ({
    type : types.FETCH_SUCCESS,
    payload : data,
    target : target
});

export const fetchFailure = (error, target) => ({
    type : types.FETCH_FAILURE,
    payload : error,
    target : target
});

export const fetchTopStories = (count = 10) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.STORIES));
        return axios.get(`${API_URL}/stories?count=${count}`)
            .then(res => {  
                dispatch(fetchSuccess({
                    data: res.data,
                }, targets.STORIES));
            })
            .catch(error => {
                dispatch(fetchFailure({
                    error: error,
                }, targets.STORIES));
            });
    };
};

export const fetchQuizzes = (id) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.QUIZZES));
        return axios.get(`${API_URL}/quizzes?id=${id}`)
        .then(res => {  
            dispatch(fetchSuccess({
                data: res.data,
            }, targets.QUIZZES));
        })
        .catch(error => {
            dispatch(fetchFailure({
                error: error,
            }, targets.QUIZZES));
        });
    };
};

export const fetchThreadsForAdmin = (query) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.THREADS));
        return axios.get(`${API_URL}/threads?${query}`)
        .then(res => {  
            dispatch(fetchSuccess({
                data: res.data,
            }, targets.THREADS));
        })
        .catch(error => {
            dispatch(fetchFailure({
                error: error,
            }, targets.THREADS));
        });
    };
};

export const fetchKeywordsForAdmin = (query) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.KEYWORDS));
        return axios.get(`${API_URL}/keywords?${query}`)
        .then(res => {  
            dispatch(fetchSuccess({
                data: res.data,
            }, targets.KEYWORDS));
        })
        .catch(error => {
            dispatch(fetchFailure({
                error: error,
            }, targets.KEYWORDS));
        });
    };
};

export const fetchArticlesForAdmin = (query) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.ARTICLES));
        return axios.get(`${API_URL}/articles?${query}`)
        .then(res => {  
            dispatch(fetchSuccess({
                data: res.data,
            }, targets.ARTICLES));
        })
        .catch(error => {
            dispatch(fetchFailure({
                error: error,
            }, targets.ARTICLES));
        });
    };
};

export const selectElement = (id, target) => ({
    type : types.SELECT_ELEMENT,
    payload : {id},
    target : target
});

export const deselectElement = (target) => ({
    type : types.DESELECT_ELEMENT,
    payload : {id : -1},
    target : target
});