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
    adminKeywordsLoading : false,
    adminKeywordsLoadingError : null,
    adminKeywordsData : [],
    adminArticlesLoading : false,
    adminArticlesLoadingError : null,
    adminArticlesData : []
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
        };
    default:
        return prevState;
    };
};