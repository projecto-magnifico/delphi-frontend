import * as types from '../actions/types';
import { expect } from 'chai';
import { fetchThreadsRequest, fetchThreadsSuccess, fetchThreadsFailure } from '../actions';


describe('action creators', () => {
    describe('FETCH_THREADS_REQUEST', () => {
        it('creates a new object', () => {
            const newThread = fetchThreadsRequest();
            expect(newThread).to.be.an('object');
        });
    });
    describe('FETCH_THREADS_SUCCESS', () => {
        it('creates a new object', () => {
            const data = [{}, {}, {}];
            const newThread = fetchThreadsSuccess(data);
            expect(newThread).to.be.an('object');
            expect(newThread.payload).to.eql([{}, {}, {}]);
            expect(newThread.type).to.equal(types.FETCH_THREADS_SUCCESS);
        });
    });
    describe('FETCH_THREADS_FAILURE', () => {
        it('creates a new object', () => {
            const newThread = fetchThreadsFailure();
            expect(newThread).to.be.an('object');
        });
    });
});