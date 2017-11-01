import { expect } from 'chai';
import reducer, { getInitialState } from '../reducers';
import * as actions from '../actions';
import * as targets from '../actions/targets';
const storiesData = [{ 'article': 'BBC' }, { 'article': 'the guardian' }, { 'article': 'the times' }];
const quizzesData = [{ 'quiz': 'hi' }, { 'quiz': 'bye' }, { 'quiz': 'why?' }];

describe('reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed previous state if an unrecognised action is passed', () => {
            const prevState = getInitialState();
            const newState = reducer(prevState, undefined);
            expect(newState).to.equal(prevState);
        });
        it('returns the initial state no state is passed is passed', () => {
            const action = actions.fetchRequest(targets.QUIZZES)
            const newState = reducer(undefined, action);
            const prevState = getInitialState();            
            prevState.quizzesLoading = true;
            expect(newState).to.eql(prevState);
        });
    });
    describe('actions::fetchRequest', () => {
        it('updates the relevant loading properties', () => {
            const prevState = getInitialState();
            prevState.storiesData = storiesData;
            prevState.storiesLoadingError = 'err!';            
            const action = actions.fetchRequest(targets.STORIES)
            const newState = reducer(prevState, action);
            expect(newState.storiesLoading).to.equal(true);    
            expect(newState.storiesData).to.eql([]);
            expect(newState.storiesLoadingError).to.equal(null);            
        })
    });
    describe('actions::fetchSuccess', () => {
        it('updates the relevant loading properties', () => {
            const prevState = getInitialState();
            prevState.quizzesLoading = true;
            prevState.quizzesData = quizzesData;            
            const action = actions.fetchSuccess(quizzesData, targets.QUIZZES)
            const newState = reducer(prevState, action);
            expect(newState.quizzesLoading).to.equal(false);
            expect(newState.quizzesData).to.eql(quizzesData);
            expect(newState.quizzesLoadingError).to.equal(null);
        })
    });
    describe('actions::fetchFailure', () => {
        it('updates the relevant loading properties', () => {
            const prevState = getInitialState();
            prevState.quizzesLoading = true;
            const action = actions.fetchFailure({err: 'err'}, targets.QUIZZES)
            const newState = reducer(prevState, action);
            expect(newState.quizzesLoading).to.equal(false);
            expect(newState.quizzesLoadingError).to.eql({err: 'err'});
        })
    });
    describe('actions::select&deselectElement', () => {
        it('updates the relevant focus indices', () => {
            const prevState = getInitialState();
            prevState.storyFocusIndex = 5;
            prevState.adminKeywordsFocusIndex = 55;            
            let action = actions.selectElement(2, targets.QUIZZES)
            let newState = reducer(prevState, action);
            expect(newState.quizzesFocusIndex).to.equal(2);
            action = actions.deselectElement(targets.STORIES)
            newState = reducer(newState, action);
            expect(newState.storyFocusIndex).to.equal(-1);
            action = actions.selectElement(14, targets.THREADS)
            newState = reducer(newState, action);
            expect(newState.adminThreadsFocusIndex).to.equal(14);
            action = actions.deselectElement(targets.KEYWORDS)
            newState = reducer(newState, action);
            expect(newState.adminKeywordsFocusIndex).to.equal(-1);
            action = actions.selectElement(444, targets.ARTICLES)
            newState = reducer(newState, action);
            expect(newState.adminArticlesFocusIndex).to.equal(444);
        })
    });
});