import * as types from './types.js';
import * as targets from './targets.js';
import axios from 'axios';

const API_URL = 'localhost:3000/api';

export const fetchRequest = (target) => ({
    type: types.FETCH_REQUEST,
    target: target
});

export const fetchSuccess = (data, target) => ({
    type: types.FETCH_SUCCESS,
    payload: { data },
    target: target
});

export const fetchFailure = (error, target) => ({
    type: types.FETCH_FAILURE,
    payload: { error },
    target: target
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
                dispatch(fetchFailure(error, targets.STORIES));
            });
    };
};

export const fetchQuizById = (id) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.QUIZZES));
        return axios.get(`${API_URL}/quizzes/${id}`)
            .then(res => {
                dispatch(fetchSuccess({
                    data: res.data,
                }, targets.QUIZZES));
            })
            .catch(error => {
                dispatch(fetchFailure(error, targets.QUIZZES));
            });
    };
};

export const fetchQuizzesForAdmin = (query) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.QUIZZES_ADMIN));
        return axios.get(`${API_URL}/quizzes?${query}`)
            .then(res => {
                dispatch(fetchSuccess({
                    data: res.data,
                }, targets.QUIZZES_ADMIN));
            })
            .catch(error => {
                dispatch(fetchFailure(error, targets.QUIZZES_ADMIN));
            });
    };
};

export const fetchQuizzesByThreadId = id => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.THREAD_QUIZZES));
        return axios.get(`${API_URL}/threads/${id}/quizzes`)
            .then(res => {
                dispatch(fetchSuccess({
                    data: res.data,
                }, targets.THREAD_QUIZZES))
            })
            .catch(error => {
                dispatch(fetchFailure(error, targets.THREAD_QUIZZES));
            });
    }
}

export const fetchThreadsForAdmin = (query) => {
    return (dispatch) => {
        console.log(query)
        dispatch(fetchRequest(targets.THREADS));
        return axios.get(`${API_URL}/threads?${query}`)
            .then(res => {
                dispatch(fetchSuccess({
                    data: res.data,
                }, targets.THREADS));
            })
            .catch(error => {
                dispatch(fetchFailure(error, targets.THREADS));
            });
    };
};

export const fetchKeywordsByThreadId = (id) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.THREAD_KEYWORDS));
        return axios.get(`${API_URL}/threads/${id}/keywords`)
            .then(res => {
                dispatch(fetchSuccess({
                    data: res.data,
                }, targets.THREAD_KEYWORDS));
            })
            .catch(error => {
                dispatch(fetchFailure(error, targets.THREAD_KEYWORDS));
            });
    }
}

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
                dispatch(fetchFailure(error, targets.KEYWORDS));
            });
    };
};

export const fetchArticlesForAdmin = (id) => {
    return (dispatch) => {
        dispatch(fetchRequest(targets.ARTICLES));
        return axios.get(`${API_URL}/threads/${id}/articles`)
            .then(res => {  
                dispatch(fetchSuccess({
                    data: res.data,
                }, targets.ARTICLES));
            })
            .catch(error => {
                dispatch(fetchFailure(error, targets.ARTICLES));
            });
    };
};

export const selectElement = (index, target) => ({
    type: types.SELECT_ELEMENT,
    payload: { index },
    target: target
});

export const deselectElement = (target) => ({
    type: types.DESELECT_ELEMENT,
    target: target
});

export const dismissElement = (index, target) => ({
    type: types.DISMISS_ELEMENT,
    payload: { index },
    target: target
});

export const patchRequest = (url, target, index) => ({
    type: types.PATCH_REQUEST,
    payload: { url, index },
    target: target
});

export const patchSuccess = (data, url, target, index) => ({
    type: types.PATCH_SUCCESS,
    payload: { data, url },
    target: target
});

export const patchFailure = (error, url, message, target, index) => ({
    type: types.PATCH_FAILURE,
    payload: { error, url, index, message },
    target: target
});

export const patchResend = (url, message, target, index) => {
    return (dispatch) => {
        dispatch(patchRequest(url, target));
        return axios.patch(url, message)
            .then(res => {
                dispatch(patchSuccess({
                    data: res.data,
                }, url, target, index));
            })
            .catch(error => {
                dispatch(patchFailure(error, url, message, target, index));
            });
    };
};

export const patchToThread = (thread_id, newData, index) => {
    return (dispatch) => {
        const url = `${API_URL}/threads/${thread_id}`;
        dispatch(patchRequest(url, targets.THREADS, index));
        return axios.patch(url, { newData })
            .then(res => {
                dispatch(patchSuccess({
                    data: res.data,
                }, url, targets.THREADS, index));
            })
            .catch(error => {
                dispatch(patchFailure(error, url, newData, targets.THREADS, index));
            });
    };
};


export const patchTagToKeyword = (keyword_id, tag_id, index) => {
    return (dispatch) => {
        const url = `${API_URL}/keywords/${keyword_id}`;
        dispatch(patchRequest(url, targets.KEYWORDS, index));
        return axios.patch(url, { tag_id })
            .then(res => {
                dispatch(patchSuccess({
                    data: res.data,
                }, url, targets.KEYWORDS, index));
            })
            .catch(error => {
                dispatch(patchFailure(error, url, tag_id, targets.KEYWORDS, index));
            });
    };
};


export const postRequest = (url, target) => ({
    type: types.POST_REQUEST,
    payload: { url },
    target: target
});

export const postSuccess = (data, url, target) => ({
    type: types.POST_SUCCESS,
    payload: { data, url },
    target: target
});

export const postFailure = (error, url, message, target) => ({
    type: types.POST_FAILURE,
    payload: { error, url, message },
    target: target
});

export const postResend = (url, message, target) => {
    return (dispatch) => {
        dispatch(postRequest(url, target));
        return axios.post(url, message)
            .then(res => {
                dispatch(postSuccess({
                    data: res.data,
                }, url, target));
            })
            .catch(error => {
                dispatch(postFailure(error, url, message, target));
            });
    };
};

export const postNewTag = tag => {
    return (dispatch) => {
        const url = `${API_URL}/tags`;
        dispatch(postRequest(url));
        return axios.post(url, { tag })
            .then(res => {
                dispatch(postSuccess({
                    data: res.data,
                }, url));
            })
            .catch(error => {
                dispatch(postFailure(error, url, tag));
            });
    };
};

export const postNewArticle = (thread_id, article) => {
    return (dispatch) => {
        const url = `${API_URL}/threads/${thread_id}/articles`;
        dispatch(postRequest(url));
        return axios.post(url, { article })
            .then(res => {
                dispatch(postSuccess({
                    data: res.data,
                }, url));
            })
            .catch(error => {
                dispatch(postFailure(error, url, article));
            });
    };
};