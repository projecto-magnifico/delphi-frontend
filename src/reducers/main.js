/*eslint no-fallthrough: "error"*/

import * as types from '../actions/types';
import * as targets from '../actions/targets';

export const getInitialMainState = () => {
    return {
        stories: {
            loading: false,
            error: null,
            data: [],
            focusIndex: -1
        },

        answerPostError : null,

        user: '',
        tags: [],
        snapshotLast: [],
        snapshotOneDay: [],
        snapshotOneWeek: [],
    };
};

export default (prevState = getInitialMainState(), action) => {


    if (!action) return prevState;
    switch (action.type) {
        case types.FETCH_REQUEST:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            loading: true,
                            error: null,
                            data: []
                        })
                    });
                default:
                    return prevState;
            }
        case types.FETCH_SUCCESS:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            loading: false,
                            error: null,
                            data: action.payload.data
                        })
                    });
                default:
                    return prevState;
            }
        case types.FETCH_FAILURE:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            loading: false,
                            error: action.payload.error,
                            data: []
                        })
                    });
                default:
                    return prevState;
            }

        case types.SELECT_ELEMENT:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            focusIndex: action.payload.index
                        })
                    });
                default:
                    return prevState;
            }
        case types.DESELECT_ELEMENT:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            focusIndex: -1
                        })
                    });
                default:
                    return prevState;
            }
        case types.POST_REQUEST:
            switch (action.target) {
                case targets.ANSWERS:
                    return Object.assign({}, prevState, {
                        answerPostError : null
                    });
                default:
                    return prevState;
            }
        case types.POST_FAILURE:
            switch (action.target) {
                case targets.ANSWERS:
                    return Object.assign({}, prevState, {
                        answerPostError : action.payload.error
                    });
                default:
                    return prevState;
            }
        case types.PATCH_REQUEST:
            switch (action.target) {
                case targets.ANSWERS:
                    return Object.assign({}, prevState, {
                        answerPostError : null
                    });
                default:
                    return prevState;
            }
        case types.PATCH_FAILURE:
            switch (action.target) {
                case targets.ANSWERS:
                    return Object.assign({}, prevState, {
                        answerPostError : action.payload.error
                    });
                default:
                    return prevState;
            }
        default:
            return prevState;
    }
};