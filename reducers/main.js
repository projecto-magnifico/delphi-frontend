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
        quizzes: {
            loading: false,
            error: null,
            data: [],
            focusIndex: -1
        },

        user: '',
        tags: [],
        snapshotLast: [],
        snapshotOneDay: [],
        snapshotOneWeek: [],
    }
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
                    })
                case targets.QUIZZES:
                    return Object.assign({}, prevState, {
                        quizzes: Object.assign({}, prevState.quizzes, {
                            loading: true,
                            error: null,
                            data: []
                        })
                    })
            }
        case types.FETCH_SUCCESS:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            loading: false,
                            error: null,
                            data: action.payload
                        })
                    })
                case targets.QUIZZES:
                    return Object.assign({}, prevState, {
                        quizzes: Object.assign({}, prevState.quizzes, {
                            loading: false,
                            error: null,
                            data: action.payload
                        })
                    })
            }
        case types.FETCH_FAILURE:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            loading: false,
                            error: action.payload,
                            data: null
                        })
                    })
                case targets.QUIZZES:
                    return Object.assign({}, prevState, {
                        quizzes: Object.assign({}, prevState.quizzes, {
                            loading: false,
                            error: action.payload,
                            data: null
                        })
                    })
            }
        case types.SELECT_ELEMENT:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            focusIndex: action.payload.id
                        })
                    })
                case targets.QUIZZES:
                    return Object.assign({}, prevState, {
                        quizzes: Object.assign({}, prevState.quizzes, {
                            focusIndex: action.payload.id
                        })
                    })
            }
        case types.DESELECT_ELEMENT:
            switch (action.target) {
                case targets.STORIES:
                    return Object.assign({}, prevState, {
                        stories: Object.assign({}, prevState.stories, {
                            focusIndex: -1
                        })
                    })
                case targets.QUIZZES:
                    return Object.assign({}, prevState, {
                        quizzes: Object.assign({}, prevState.quizzes, {
                            focusIndex: -1
                        })
                    })
            }
        default:
            return prevState;
    }
}