import * as types from '../actions/types';
import * as targets from '../actions/targets';
import { expect } from 'chai';
import * as actions from '../actions';


describe('action creators', () => {
    describe('fetchRequest', () => {
        it('creates a new story fetch', () => {
            const newFetchStories = actions.fetchRequest(targets.STORIES);
            expect(newFetchStories).to.be.an('object');
            expect(newFetchStories.target).to.equal(targets.STORIES);
        });
        it('creates a new quiz fetch', () => {
            const newFetchQuizzes = actions.fetchRequest(targets.QUIZZES);
            expect(newFetchQuizzes).to.be.an('object');
            expect(newFetchQuizzes.target).to.equal(targets.QUIZZES);
        });
    });
    describe('fetchSuccess', () => {
        it('creates a new story fetch', () => {
            const data = {data: 'data'};
            const successFetchStories = actions.fetchSuccess(data, targets.STORIES);
            expect(successFetchStories).to.be.an('object');
            expect(successFetchStories.payload.data).to.eql(data);
            expect(successFetchStories.target).to.equal(targets.STORIES);
        });
        it('creates a new quiz fetch', () => {
            const data = {data: 'data'};
            const successFetchQuizzes = actions.fetchSuccess(data, targets.QUIZZES);
            expect(successFetchQuizzes).to.be.an('object');
            expect(successFetchQuizzes.payload.data).to.eql(data);            
            expect(successFetchQuizzes.target).to.equal(targets.QUIZZES);
        });
    });
    describe('fetchFailure', () => {
        it('creates a new story fetch', () => {
            const err = 'err';
            const failureFetchStories = actions.fetchFailure(err, targets.STORIES);
            expect(failureFetchStories).to.be.an('object');
            expect(failureFetchStories.payload.error).to.eql(err);
            expect(failureFetchStories.target).to.equal(targets.STORIES);
        });
        it('creates a new quiz fetch', () => {
            const err = 'err';
            const failureFetchQuizzes = actions.fetchFailure(err, targets.QUIZZES);
            expect(failureFetchQuizzes).to.be.an('object');
            expect(failureFetchQuizzes.payload.error).to.eql(err);            
            expect(failureFetchQuizzes.target).to.equal(targets.QUIZZES);
        });
    });
    describe('selectElement', () => {
        it('creates a story selector', () => {
            const selectStory = actions.selectElement(3, targets.STORIES);
            expect(selectStory).to.be.an('object');
            expect(selectStory.target).to.equal(targets.STORIES);
            expect(selectStory.payload.index).to.equal(3);
        });
        it('creates a quiz selector', () => {
            const selectQuiz = actions.selectElement(33, targets.QUIZZES);
            expect(selectQuiz).to.be.an('object');
            expect(selectQuiz.target).to.equal(targets.QUIZZES);
            expect(selectQuiz.payload.index).to.equal(33);            
        });
    });
    describe('deselectElement', () => {
        it('creates a story selector', () => {
            const deselectStory = actions.deselectElement(targets.STORIES);
            expect(deselectStory).to.be.an('object');
            expect(deselectStory.target).to.equal(targets.STORIES);
        });
        it('creates a quiz selector', () => {
            const deselectQuiz = actions.deselectElement(targets.QUIZZES);
            expect(deselectQuiz).to.be.an('object');
            expect(deselectQuiz.target).to.equal(targets.QUIZZES);
        });
    });
    describe('dismissElement', () => {
        it('dismisses a quiz admin element', () => {
            const deselectQuiz = actions.dismissElement(1, targets.QUIZZES_ADMIN);
            expect(deselectQuiz).to.be.an('object');
            expect(deselectQuiz.target).to.equal(targets.QUIZZES_ADMIN);
            expect(deselectQuiz.payload.index).to.equal(1);            
        });
        it('dismisses a message element', () => {
            const deselectMessage = actions.dismissElement(2, targets.MESSAGES);
            expect(deselectMessage).to.be.an('object');
            expect(deselectMessage.target).to.equal(targets.MESSAGES);
            expect(deselectMessage.payload.index).to.equal(2);            
        });
    });
    describe('patchRequest', () => {
        it('creates a new patch', () => {
            const url = '/doIt';
            const patchThreadReq = actions.patchRequest(url, targets.THREADS);
            expect(patchThreadReq).to.be.an('object');
            expect(patchThreadReq.payload.url).to.equal(url);
            expect(patchThreadReq.target).to.equal(targets.THREADS);
        });
    });
    describe('patchSuccess', () => {
        it('creates a new patch success', () => {
            const data = {data: 'data'};
            const url = '/doIt';
            const patchKwSuccess = actions.patchSuccess(data, url, targets.KEYWORDS);
            expect(patchKwSuccess).to.be.an('object');
            expect(patchKwSuccess.payload.url).to.equal(url);
            expect(patchKwSuccess.payload.data).to.equal(data);            
            expect(patchKwSuccess.target).to.equal(targets.KEYWORDS);
        });
    });
    describe('patchFailure', () => {
        it('creates a new patch fail msg', () => {
            const message = {message: 'message'};
            const url = '/doIt';
            const error = 'oops!';
            const patchKwFail = actions.patchFailure(error, url, message, targets.KEYWORDS);
            expect(patchKwFail).to.be.an('object');
            expect(patchKwFail.payload.url).to.equal(url);
            expect(patchKwFail.payload.message).to.equal(message);
            expect(patchKwFail.payload.error).to.equal(error);
            expect(patchKwFail.target).to.equal(targets.KEYWORDS);
        });
    });
    describe('postRequest', () => {
        it('creates a new post req', () => {
            const url = '/doIt';
            const postThreadReq = actions.postRequest(url, targets.THREADS);
            expect(postThreadReq).to.be.an('object');
            expect(postThreadReq.payload.url).to.equal(url);
            expect(postThreadReq.target).to.equal(targets.THREADS);
        });
    });
    describe('postSuccess', () => {
        it('creates a new post success res', () => {
            const data = {data: 'data'};
            const url = '/doIt';
            const postKwSuccess = actions.postSuccess(data, url, targets.KEYWORDS);
            expect(postKwSuccess).to.be.an('object');
            expect(postKwSuccess.payload.url).to.equal(url);
            expect(postKwSuccess.payload.data).to.equal(data);            
            expect(postKwSuccess.target).to.equal(targets.KEYWORDS);
        });
    });
    describe('postFailure', () => {
        it('creates a new post failure msg', () => {
            const message = {message: 'message'};
            const url = '/doIt';
            const error = 'oops!';
            const postKwFail = actions.postFailure(error, url, message, targets.KEYWORDS);
            expect(postKwFail).to.be.an('object');
            expect(postKwFail.payload.url).to.equal(url);
            expect(postKwFail.payload.message).to.equal(message);
            expect(postKwFail.payload.error).to.equal(error);
            expect(postKwFail.target).to.equal(targets.KEYWORDS);
        });
    });
});