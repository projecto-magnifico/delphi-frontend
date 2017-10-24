
import * as types from "./types.js"
// const types = require("./types.js")
// const API_URL = "delphi URL here ...";

const API_URL = ''

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

export const fetchThreads = () => {
    return (dispatch) => {
        dispatch(fetchThreadsRequest());
        return getThreads()
            .then(res => {
                if (id) {
                    dispatch(fetchThreadsSuccess(res.data))
                } else {
                    dispatch(fetchThreadsSuccess(res.data.threads))
                }
            })
            .catch(error => {
                dispatch(fetchArticlesFailure(error.message));
            });
    };
}

export const fetchThreadsById = (id) => {
    return (dispatch) => {
        const PATH = `/threads/${id}` 
        dispatch(fetchThreadsRequest());
        return getThreadsById(PATH)
            .then(res => {
                if (id) {
                    dispatch(fetchThreadsSuccess(res.data))
                } else {
                    dispatch(fetchThreadsSuccess(res.data.threads))
                }
            })
            .catch(error => {
                dispatch(fetchThreadsFailure(error.message));
            });
    };
}



// module.exports = {fetchThreads,fetchThreadSuccess,fetchThreadFailure}


// export default (route) => {

//     let searchString = `${API_URL}/threads/${route}`

//     return (dispatch) => {
//         dispatch(fetchArticleRequest());
//         return axios.get(`${searchString}`)
//             .then(res => {
//                 dispatch(fetchArticleSuccess(res.data));
//             })
//             .catch(err => {
//                 dispatch(fetchArticleFailure(err.message));
//             });
//     }
// };


