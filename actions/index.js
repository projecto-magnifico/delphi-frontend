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
        return axios.get(`${API_URL}/threads?count=${count}`)
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