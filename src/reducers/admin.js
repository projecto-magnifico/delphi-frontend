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
        requests: []
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
        }
        break;
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
        }
        break;
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
        }
        break;
    case types.SELECT_ELEMENT:
        switch (action.target) {
        case targets.THREADS:
            return Object.assign({}, prevState, {
                threads: Object.assign({}, prevState.threads, {
                    focusIndex: action.payload.index
                })
            });
        case targets.KEYWORDS:
            return Object.assign({}, prevState, {
                keywords: Object.assign({}, prevState.keywords, {
                    focusIndex: action.payload.index
                })
            });
        case targets.ARTICLES:
            return Object.assign({}, prevState, {
                articles: Object.assign({}, prevState.articles, {
                    focusIndex: action.payload.index
                })
            });
        case targets.QUIZZES_ADMIN:
            return Object.assign({}, prevState, {
                quizzes: Object.assign({}, prevState.quizzes, {
                    focusIndex: action.payload.index
                })
            });
        }
        break;
    case types.DESELECT_ELEMENT:
        switch (action.target) {
        case targets.THREADS:
            return Object.assign({}, prevState, {
                threads: Object.assign({}, prevState.threads, {
                    focusIndex: -1
                })
            });
        case targets.KEYWORDS:
            return Object.assign({}, prevState, {
                keywords: Object.assign({}, prevState.keywords, {
                    focusIndex: -1
                })
            });
        case targets.ARTICLES:
            return Object.assign({}, prevState, {
                articles: Object.assign({}, prevState.articles, {
                    focusIndex: -1
                })
            });
        case targets.QUIZZES_ADMIN:
            return Object.assign({}, prevState, {
                quizzes: Object.assign({}, prevState.quizzes, {
                    focusIndex: -1
                })
            });
        }
        break;
    case types.DISMISS_ELEMENT:
        switch (action.target) {
        case targets.THREADS:
            return Object.assign({}, prevState, {
                threads: Object.assign({}, prevState.threads, {
                    data: prevState.threads.data.filter((x, i) => {
                        return i !== action.payload.index;
                    })
                })
            });
        case targets.KEYWORDS:
            return Object.assign({}, prevState, {
                keywords: Object.assign({}, prevState.keywords, {
                    data: prevState.keywords.data.filter((x, i) => {
                        return i !== action.payload.index;
                    })
                })
            });
        case targets.ARTICLES:
            return Object.assign({}, prevState, {
                articles: Object.assign({}, prevState.articles, {
                    data: prevState.articles.data.filter((x, i) => {
                        return i !== action.payload.index;
                    })
                })
            });
        case targets.QUIZZES_ADMIN:
            return Object.assign({}, prevState, {
                quizzes: Object.assign({}, prevState.quizzes, {
                    data: prevState.quizzes.data.filter((x, i) => {
                        return i !== action.payload.index;
                    })
                })
            });
        case targets.REQUESTS:
            return Object.assign({}, prevState, {
                writing: prevState.writing.filter((x, i) => {
                    return i !== action.payload.index;
                })
            });
        }
        break;
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