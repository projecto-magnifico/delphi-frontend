import * as types from '../actions/types';

export const getInitialState = () => ({
    threadsLoading: false,
    threadsLoadingError: null,
    threadsData: []
});

export default (prevState = getInitialState(), action) => {
    switch (action.type) {
    case types.FETCH_THREADS_REQUEST:
        return Object.assign({}, prevState, {
            threadsLoading: !prevState.threadsLoading,
            threadsLoadingError: null,
            threadsData: []
        });
    case types.FETCH_THREADS_SUCCESS:
        return Object.assign({}, prevState, {
            threadsLoading: false,
            threadsLoadingError: null,
            threadsData: action.payload
        });
    case types.FETCH_THREADS_FAILURE:
        return Object.assign({}, prevState, {
            threadsLoading: false,
            threadsLoadingError: action.payload,
            threadsData: []
        });
    default:
        return prevState;
    }
};