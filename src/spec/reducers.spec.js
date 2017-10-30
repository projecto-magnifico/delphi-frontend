import { expect } from 'chai';
import reducer from '../reducers';
import adminReducer from '../reducers/admin';
import { getInitialAdminState } from '../reducers/admin';
import { getInitialMainState } from '../reducers/main';
import * as actions from '../actions';
import * as targets from '../actions/targets';
const storiesData = [{ 'article': 'BBC' }, { 'article': 'the guardian' }, { 'article': 'the times' }];
const quizzesData = [{ 'quiz': 'hi' }, { 'quiz': 'bye' }, { 'quiz': 'why?' }];

describe('reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed previous state if an unrecognised action is passed', () => {
            const prevState = getInitialMainState();
            const newState = reducer(prevState, undefined);
            expect(newState.main).to.eql(prevState);
        });
        it('returns the initial state if no state is passed', () => {
            const action = actions.fetchRequest(targets.QUIZZES);
            const newState = reducer(undefined, action);
            const prevState = getInitialMainState();
            prevState.quizzes.loading = true;
            expect(newState.main).to.eql(prevState);
        });
    });
    describe('actions::fetchRequest', () => {
        it('updates the relevant loading properties', () => {
            const prevState = getInitialMainState();
            prevState.stories.data = storiesData;
            prevState.stories.error = 'err!';
            const action = actions.fetchRequest(targets.STORIES);
            const newState = reducer(prevState, action);
            expect(newState.main.stories.loading).to.equal(true);    
            expect(newState.main.stories.data).to.eql([]);
            expect(newState.main.stories.error).to.equal(null);            
        });
    });
    describe('actions::fetchSuccess', () => {
        it('updates the relevant loading properties', () => {
            const prevState = getInitialMainState();
            prevState.quizzes.loading = true;
            prevState.quizzes.data = quizzesData;            
            const action = actions.fetchSuccess(quizzesData, targets.QUIZZES);
            const newState = reducer(prevState, action);
            expect(newState.main.quizzes.loading).to.equal(false);
            expect(newState.main.quizzes.data).to.eql(quizzesData);
            expect(newState.main.quizzes.error).to.equal(null);
        });
    });
    describe('actions::fetchFailure', () => {
        it('updates the relevant loading properties', () => {
            const prevState = getInitialMainState();
            prevState.quizzes.loading = true;
            const action = actions.fetchFailure({err: 'err'}, targets.QUIZZES);
            const newState = reducer(prevState, action);
            expect(newState.main.quizzes.loading).to.equal(false);
            expect(newState.main.quizzes.error).to.eql({err: 'err'});
        });
    });
    describe('actions::select&deselectElement', () => {
        it('updates the relevant focus indices', () => {
            const prevState = getInitialMainState();
            prevState.stories.focusIndex = 5;
            let action = actions.selectElement(2, targets.QUIZZES);
            let newState = reducer(prevState, action);
            expect(newState.main.quizzes.focusIndex).to.equal(2);
            action = actions.deselectElement(targets.STORIES);
            newState = reducer(newState, action);
            // expect(newState.main.stories.focusIndex).to.equal(-1);
        });
    });

    describe('actions::dismissElement', () => {
        it('removes an item from data', () => {
            const prevAdminState = getInitialAdminState();
            prevAdminState.threads.data = storiesData;
            let action = actions.dismissElement(0, targets.THREADS);
            let newState = adminReducer(prevAdminState, action);
            expect(newState.threads.data).to.eql([{ 'article': 'the guardian' }, { 'article': 'the times' }]);
        });
    });
});