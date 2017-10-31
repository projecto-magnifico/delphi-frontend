/*eslint no-fallthrough: "error"*/

import * as types from '../actions/types';
import * as targets from '../actions/targets';

const request = {
    posting: true,
    error: null,
    response: null,
    url: '',
    target: '',
    index: -1
};

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
        threadKeywords: {
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
        },
        threadQuizzes: {
            loading: false,
            error: null,
            data: [],
            focusIndex: -1
        },
        tags: {
            loading: false,
            error: null,
            data: [],
            focusIndex: -1
        },
        requests: [],
    };
};

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
            });
        case targets.THREAD_KEYWORDS:
            return Object.assign({}, prevState, {
                threadKeywords: Object.assign({}, prevState.threadKeywords, {
                    loading: true,
                    error: null,
                    data: []
                })
            });
        case targets.THREAD_QUIZZES:
            return Object.assign({}, prevState, {
                threadKeywords: Object.assign({}, prevState.threadQuizzes, {
                    loading: true,
                    error: null,
                    data: []
                })
            });
        case targets.KEYWORDS:
            return Object.assign({}, prevState, {
                keywords: Object.assign({}, prevState.keywords, {
                    loading: true,
                    error: null,
                    data: []
                })
            });
        case targets.ARTICLES:
            return Object.assign({}, prevState, {
                articles: Object.assign({}, prevState.articles, {
                    loading: true,
                    error: null,
                    data: []
                })
            });
        case targets.QUIZZES_ADMIN:
            return Object.assign({}, prevState, {
                quizzes: Object.assign({}, prevState.quizzes, {
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
        case targets.THREADS:
            return Object.assign({}, prevState, {
                threads: Object.assign({}, prevState.threads, {
                    loading: false,
                    error: null,
                    data: action.payload.data
                })
            });
        case targets.THREAD_KEYWORDS:
            return Object.assign({}, prevState, {
                threadKeywords: Object.assign({}, prevState.threadKeywords, {
                    loading: false,
                    error: null,
                    data: action.payload.data
                })
            });
        case targets.THREAD_QUIZZES:
            return Object.assign({}, prevState, {
                threadKeywords: Object.assign({}, prevState.threadQuizzes, {
                    loading: false,
                    error: null,
                    data: action.payload.data
                })
            });
        case targets.KEYWORDS:
            return Object.assign({}, prevState, {
                keywords: Object.assign({}, prevState.keywords, {
                    loading: false,
                    error: null,
                    data: action.payload.data
                })
            });
        case targets.ARTICLES:
            return Object.assign({}, prevState, {
                articles: Object.assign({}, prevState.articles, {
                    loading: false,
                    error: null,
                    data: action.payload.data
                })
            });
        case targets.QUIZZES_ADMIN:
            return Object.assign({}, prevState, {
                quizzes: Object.assign({}, prevState.quizzes, {
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
        case targets.THREADS:
            return Object.assign({}, prevState, {
                threads: Object.assign({}, prevState.threads, {
                    loading: false,
                    error: action.payload.error,
                    data: []
                })
            });
        case targets.THREAD_KEYWORDS:
            return Object.assign({}, prevState, {
                threadKeywords: Object.assign({}, prevState.threadKeywords, {
                    loading: false,
                    error: action.payload.error,
                    data: []
                })
            });
        case targets.THREAD_QUIZZES:
            return Object.assign({}, prevState, {
                threadKeywords: Object.assign({}, prevState.threadQuizzes, {
                    loading: false,
                    error: action.payload.error,
                    data: []
                })
            });
        case targets.KEYWORDS:
            return Object.assign({}, prevState, {
                keywords: Object.assign({}, prevState.keywords, {
                    loading: false,
                    error: action.payload.error,
                    data: []
                })
            });
        case targets.ARTICLES:
            return Object.assign({}, prevState, {
                articles: Object.assign({}, prevState.articles, {
                    loading: false,
                    error: action.payload.error,
                    data: []
                })
            });
        case targets.QUIZZES_ADMIN:
            return Object.assign({}, prevState, {
                quizzes: Object.assign({}, prevState.quizzes, {
                    loading: false,
                    error: action.payload.error,
                    data: []
                })
            });
        default:
            return prevState;
    }
    case types.PATCH_SUCCESS:
        return Object.assign({}, prevState, {
            requests: prevState.requests.map(patch => {
                if (patch.url === action.payload.url) {
                    return Object.assign({}, patch, {
                        posting: false,
                        response: action.payload.data
                    });
                } else return patch;
            }),
        }); 
    case types.PATCH_FAILURE:
        return Object.assign({}, prevState, {
            requests: prevState.requests.map(patch => {
                if (patch.url === action.payload.url) {
                    return Object.assign({}, patch, {
                        posting: false,
                        error: action.payload.error
                    });
                } else return patch;
            })
        });
    case types.PATCH_REQUEST:
        console.log(action);
        return Object.assign({}, prevState, {
            requests: prevState.requests.concat(
                Object.assign({}, request, {
                    url: action.payload.url,
                    index: action.payload.index,
                    target: action.target
                })
            )
        });
    case types.PATCH_RESEND:
        return Object.assign({}, prevState, {
            requests: prevState.requests.map(patch => {
                if (patch.target === action.target && patch.index === action.payload.index) {
                    return Object.assign({}, patch, {
                        posting: true,
                        error: null
                    });
                } else return patch;
            })
        });
    default:
        return prevState;
    }
};