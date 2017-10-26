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
        it('updates the relevant loading property', () => {
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
        it('updates the relevant loading property', () => {
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
});