import { expect } from 'chai';
import reducer, { getInitialState } from '../reducers';
import * as actions from '../actions';
const data = [{ 'article': 'BBC' }, { 'article': 'the guardian' }, { 'article': 'the times' }];

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
        it('data is added to the new state', () => {
            const prevState = getInitialState();
            prevState.data = data;
            const action = actions.fetchThreadsRequest();
            const newState = reducer(prevState, action);
            expect(newState.loading).to.equal(true);
            expect(newState.data).to.eql([]);
            expect(newState.error).to.equal(null);
        });
        it('does not mutate the previous state', () => {
            const prevState = getInitialState();
            prevState.data = data;
            const action = actions.fetchThreadsRequest();
            const newState = reducer(prevState, action);
            expect(newState).to.not.equal(prevState);
        });
    });
});