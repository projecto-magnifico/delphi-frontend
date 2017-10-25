import * as types from '../actions/types';
import { expect } from 'chai';
import { fetchThreadsRequest, fetchThreadsSuccess, fetchThreadsFailure } from '../actions/threads.js';
import { fetchArticlesRequest, fetchArticlesSuccess, fetchArticlesFailure } from '../actions/articles.js';
import { fetchKeywordsRequest, fetchKeywordsSuccess, fetchKeywordsFailure } from '../actions/keywords.js';


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
    describe('FETCH_ARTICLES_REQUEST', () => {
        it('creates a new object', () => {
            const newArticles = fetchArticlesRequest();
            expect(newArticles).to.be.an('object');
        });
    });
    describe('FETCH_ARTICLES_SUCCESS', () => {
        it('creates a new object', () => {
            const data = [{}, {}, {}];
            const newArticles = fetchArticlesSuccess(data);
            expect(newArticles).to.be.an('object');
            expect(newArticles.payload).to.eql([{}, {}, {}]);
            expect(newArticles.type).to.equal(types.FETCH_ARTICLES_SUCCESS);
        });
    });
    describe('FETCH_ARTICLES_FAILURE', () => {
        it('creates a new object', () => {
            const newArticles = fetchArticlesFailure();
            expect(newArticles).to.be.an('object');
        });
    });
    describe('FETCH_KEYWORDS_REQUEST', () => {
        it('creates a new object', () => {
            const newKeywords = fetchKeywordsRequest();
            expect(newKeywords).to.be.an('object');
        });
    });
    describe('FETCH_KEYWORDS_SUCCESS', () => {
        it('creates a new object', () => {
            const data = [{}, {}, {}];
            const newKeywords = fetchKeywordsSuccess(data);
            expect(newKeywords).to.be.an('object');
            expect(newKeywords.payload).to.eql([{}, {}, {}]);
            expect(newKeywords.type).to.equal(types.FETCH_KEYWORDS_SUCCESS);
        });
    });
    describe('FETCH_KEYWORDS_FAILURE', () => {
        it('creates a new object', () => {
            const newKeywords = fetchKeywordsFailure();
            expect(newKeywords).to.be.an('object');
        });
    });
});