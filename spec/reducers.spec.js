import { expect } from 'chai';
import reducer, { getInitialState } from '../reducers';
import * as actions from '../actions';
const threadsData = [{ 'article': 'BBC' }, { 'article': 'the guardian' }, { 'article': 'the times' }];

describe.only('reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed previous state if an unrecognised action is passed', () => {
            const prevState = getInitialState();
            const action = { type: 'whatever' };
            const newState = reducer(prevState, action);
            expect(newState).to.equal(prevState);
        });
    });
    describe('FETCH_THREAD_REQUEST', () => {
        it('threadsData is added to the new state', () => {
            const prevState = getInitialState();
            prevState.threadsData = threadsData;
            const action = actions.fetchThreadsRequest();
            const newState = reducer(prevState, action);
            expect(newState.threadsLoading).to.equal(true);
            expect(newState.threadsData).to.eql([]);
            expect(newState.threadsLoadingError).to.equal(null);
        });
        it('does not mutate the previous state', () => {
            const prevState = getInitialState();
            prevState.threadsData = threadsData;
            const action = actions.fetchThreadsRequest();
            const newState = reducer(prevState, action);
            expect(newState).to.not.equal(prevState);
        });
    });
});