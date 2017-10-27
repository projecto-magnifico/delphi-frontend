import * as types from '../actions/types';
import * as targets from '../actions/targets';

export const getInitialAdminState = () => {
    return {
        threads: {
            loading: false,
            error: null,
            data: [],
            focusIndex: -1
        },
        keywords: {
            loading: false,
            error: null,
            data: [],
            focusIndex: -1
        },
        articles: {
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
        }
    }
}

export default (prevState = getInitialAdminState(), action) => {
    if (!action) return prevState;

    switch (action.type) {
        case types.FETCH_REQUEST:
            switch (action.target) {
                case targets.THREADS:
                    return Object.assign({}, prevState, {
                        threads: Object.assign({}, prevState.threads, {
                            loading: true,
                            error: null,
                            data: []
                        })
                    })
                case targets.KEYWORDS:
                    return Object.assign({}, prevState, {
                        keywords: Object.assign({}, prevState.keywords, {
                            loading: true,
                            error: null,
                            data: []
                        })
                    })
                case targets.ARTICLES:
                    return Object.assign({}, prevState, {
                        articles: Object.assign({}, prevState.articles, {
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
                case targets.THREADS:
                    return Object.assign({}, prevState, {
                        threads: Object.assign({}, prevState.threads, {
                            loading: false,
                            error: null,
                            data: action.payload
                        })
                    })
                case targets.KEYWORDS:
                    return Object.assign({}, prevState, {
                        keywords: Object.assign({}, prevState.keywords, {
                            loading: false,
                            error: null,
                            data: action.payload
                        })
                    })
                case targets.ARTICLES:
                    return Object.assign({}, prevState, {
                        articles: Object.assign({}, prevState.articles, {
                            loading: false,
                            error: null,
                            data: action.payload
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
        case types.FETCH_FAILURE:
            switch (action.target) {
                case targets.THREADS:
                    return Object.assign({}, prevState, {
                        threads: Object.assign({}, prevState.threads, {
                            loading: false,
                            error: action.payload,
                            data: null
                        })
                    })
                case targets.KEYWORDS:
                    return Object.assign({}, prevState, {
                        keywords: Object.assign({}, prevState.keywords, {
                            loading: false,
                            error: action.payload,
                            data: null
                        })
                    })
                case targets.ARTICLES:
                    return Object.assign({}, prevState, {
                        articles: Object.assign({}, prevState.articles, {
                            loading: false,
                            error: action.payload,
                            data: null
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
            };
        case types.SELECT_ELEMENT:
            switch (action.target) {
                case targets.THREADS:
                    return Object.assign({}, prevState, {
                        threads: Object.assign({}, prevState.threads, {
                            focusIndex: action.payload.id
                        })
                    })
                case targets.KEYWORDS:
                    return Object.assign({}, prevState, {
                        keywords: Object.assign({}, prevState.keywords, {
                            focusIndex: action.payload.id
                        })
                    })
                case targets.ARTICLES:
                    return Object.assign({}, prevState, {
                        articles: Object.assign({}, prevState.articles, {
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
                case targets.THREADS:
                    return Object.assign({}, prevState, {
                        threads: Object.assign({}, prevState.threads, {
                            focusIndex: -1
                        })
                    })
                case targets.KEYWORDS:
                    return Object.assign({}, prevState, {
                        keywords: Object.assign({}, prevState.keywords, {
                            focusIndex: -1
                        })
                    })
                case targets.ARTICLES:
                    return Object.assign({}, prevState, {
                        articles: Object.assign({}, prevState.articles, {
                            focusIndex: -1
                        })
                    })
                case targets.QUIZZES:
                    return Object.assign({}, prevState, {
                        quizzes: Object.assign({}, prevState.quizzes, {
                            focusIndex: action.payload.id
                        })
                    })
            };
        default:
            return prevState;
    }
}