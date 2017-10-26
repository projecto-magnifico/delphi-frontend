import * as types from '../actions/types';
import * as targets from '../actions/targets';

export const getInitialState = () => ({
    storiesLoading: false,
    storiesLoadingError: null,
    storiesData: [],
    storyFocusIndex : -1,
    quizzesLoading : false,
    quizzesLoadingError : null,
    quizzesData : [],
    quizzesFocusIndex : -1,
    user : '',
    tags : [],
    snapshotLast : [],
    snapshotOneDay : [],
    snapshotOneWeek : [],
    adminThreadsLoading : false,
    adminThreadsLoadingError : null,
    adminThreadsData : [],
    adminThreadsFocusIndex: -1,
    adminKeywordsLoading : false,
    adminKeywordsLoadingError : null,
    adminKeywordsData : [],
    adminKeywordsFocusIndex: -1,
    adminArticlesLoading : false,
    adminArticlesLoadingError : null,
    adminArticlesData : [],
    adminArticlesFocusIndex : -1
});

export default (prevState = getInitialState(), action) => {
    if (!action) return prevState;

    switch (action.type) {
    case types.FETCH_REQUEST:
        switch (action.target) {
        case targets.STORIES:
            return Object.assign({}, prevState, {
                storiesLoading: true,
                storiesLoadingError: null,
                storiesData: []
            });
        case targets.QUIZZES:
            return Object.assign({}, prevState, {
                quizzesLoading: true,
                quizzesLoadingError: null,
                quizzesData: []
            });
        case targets.THREADS:
            return Object.assign({}, prevState, {
                adminThreadsLoading: true,
                adminThreadsLoadingError: null,
                adminThreadsData: []
            });
        case targets.KEYWORDS:
            return Object.assign({}, prevState, {
                adminKeywordsLoading: true,
                adminKeywordsLoadingError: null,
                adminKeywordsData: []
            });
        case targets.ARTICLES:
            return Object.assign({}, prevState, {
                adminArticlesLoading: true,
                adminArticlesLoadingError: null,
                adminArticlesData: []
            });
        };        
    case types.FETCH_SUCCESS:
        switch (action.target) {
        case targets.STORIES:            
            return Object.assign({}, prevState, {
                storiesLoading: false,
                storiesLoadingError: null,
                storiesData: action.payload
            });     
        case targets.QUIZZES:            
            return Object.assign({}, prevState, {
                quizzesLoading: false,
                quizzesLoadingError: null,
                quizzesData: action.payload
            });
        case targets.THREADS:            
            return Object.assign({}, prevState, {
                adminThreadsLoading: false,
                adminThreadsLoadingError: null,
                adminThreadsData: action.payload
            });
        case targets.KEYWORDS:            
            return Object.assign({}, prevState, {
                adminKeywordsLoading: false,
                adminKeywordsLoadingError: null,
                adminKeywordsData: action.payload
            });
        case targets.ARTICLES:            
            return Object.assign({}, prevState, {
                adminArticlesLoading: false,
                adminArticlesLoadingError: null,
                adminArticlesData: action.payload
            });
        };
    case types.FETCH_FAILURE:
        switch (action.target) {
        case targets.STORIES:   
            return Object.assign({}, prevState, {
                storiesLoading: false,
                storiesLoadingError: action.payload,
                storiesData: []
            });
        case targets.QUIZZES:   
            return Object.assign({}, prevState, {
                quizzesLoading: false,
                quizzesLoadingError: action.payload,
                quizzesData: []
            });
        case targets.THREADS:   
            return Object.assign({}, prevState, {
                adminThreadsLoading: false,
                adminThreadsLoadingError: action.payload,
                adminThreadsData: []
            });
        case targets.KEYWORDS:   
            return Object.assign({}, prevState, {
                adminKeywordsLoading: false,
                adminKeywordsLoadingError: action.payload,
                adminKeywordsData: []
            });
        case targets.ARTICLES:   
            return Object.assign({}, prevState, {
                adminArticlesLoading: false,
                adminArticlesLoadingError: action.payload,
                adminArticlesData: []
            });
        };
    case types.SELECT_ELEMENT:
        switch (action.target) {
        case targets.STORIES:   
            return Object.assign({}, prevState, {
                storyFocusIndex : action.payload.id
            });
        case targets.QUIZZES:   
            return Object.assign({}, prevState, {
                quizzesFocusIndex : action.payload.id
            });
        case targets.THREADS:   
            return Object.assign({}, prevState, {
                adminThreadsFocusIndex : action.payload.id
            });
        case targets.KEYWORDS:   
            return Object.assign({}, prevState, {
                adminKeywordsFocusIndex : action.payload.id
            });
        case targets.ARTICLES:   
            return Object.assign({}, prevState, {
                adminArticlesFocusIndex : action.payload.id
            });
        };
    case types.DESELECT_ELEMENT:
        switch (action.target) {
        case targets.STORIES:   
            return Object.assign({}, prevState, {
                storyFocusIndex : -1
            });
        case targets.QUIZZES:   
            return Object.assign({}, prevState, {
                quizzesFocusIndex : -1
            });
        case targets.THREADS:   
            return Object.assign({}, prevState, {
                adminThreadsFocusIndex : -1
            });
        case targets.KEYWORDS:   
            return Object.assign({}, prevState, {
                adminKeywordsFocusIndex : -1
            });
        case targets.ARTICLES:   
            return Object.assign({}, prevState, {
                adminArticlesFocusIndex : -1
            });
        };
    default:
        return prevState;
    };
};