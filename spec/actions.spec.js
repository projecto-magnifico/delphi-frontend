import * as types from '../actions/types';
import * as targets from '../actions/targets';
import { expect } from 'chai';
import { 
    fetchRequest, fetchFailure, fetchSuccess,
    selectElement, deselectElement
} from '../actions';


describe('action creators', () => {
    describe('fetchRequest', () => {
        it('creates a new story fetch', () => {
            const newFetchStories = fetchRequest(targets.STORIES);
            expect(newFetchStories).to.be.an('object');
            expect(newFetchStories.target).to.equal(targets.STORIES);
        });
        it('creates a new quiz fetch', () => {
            const newFetchQuizzes = fetchRequest(targets.QUIZZES);
            expect(newFetchQuizzes).to.be.an('object');
            expect(newFetchQuizzes.target).to.equal(targets.QUIZZES);
        });
    });
    describe('fetchSuccess', () => {
        it('creates a new story fetch', () => {
            const data = {data: 'data'};
            const successFetchStories = fetchSuccess(data, targets.STORIES);
            expect(successFetchStories).to.be.an('object');
            expect(successFetchStories.payload).to.eql(data);
            expect(successFetchStories.target).to.equal(targets.STORIES);
        });
        it('creates a new quiz fetch', () => {
            const data = {data: 'data'};
            const successFetchQuizzes = fetchSuccess(data, targets.QUIZZES);
            expect(successFetchQuizzes).to.be.an('object');
            expect(successFetchQuizzes.payload).to.eql(data);            
            expect(successFetchQuizzes.target).to.equal(targets.QUIZZES);
        });
    });
    describe('fetchFailure', () => {
        it('creates a new story fetch', () => {
            const err = {err: 'err'};
            const failureFetchStories = fetchSuccess(err, targets.STORIES);
            expect(failureFetchStories).to.be.an('object');
            expect(failureFetchStories.payload).to.eql(err);
            expect(failureFetchStories.target).to.equal(targets.STORIES);
        });
        it('creates a new quiz fetch', () => {
            const err = {err: 'err'};            
            const failureFetchQuizzes = fetchSuccess(err, targets.QUIZZES);
            expect(failureFetchQuizzes).to.be.an('object');
            expect(failureFetchQuizzes.payload).to.eql(err);            
            expect(failureFetchQuizzes.target).to.equal(targets.QUIZZES);
        });
    });
    describe('selectElement', () => {
        it('creates a story selector', () => {
            const selectStory = selectElement(3, targets.STORIES);
            expect(selectStory).to.be.an('object');
            expect(selectStory.target).to.equal(targets.STORIES);
            expect(selectStory.payload.id).to.equal(3);
        });
        it('creates a quiz selector', () => {
            const selectQuiz = selectElement(33, targets.QUIZZES);
            expect(selectQuiz).to.be.an('object');
            expect(selectQuiz.target).to.equal(targets.QUIZZES);
            expect(selectQuiz.payload.id).to.equal(33);            
        });
    });
    describe('deselectElement', () => {
        it('creates a story selector', () => {
            const deselectStory = deselectElement(targets.STORIES);
            expect(deselectStory).to.be.an('object');
            expect(deselectStory.target).to.equal(targets.STORIES);
            expect(deselectStory.payload.id).to.equal(-1);
        });
        it('creates a quiz selector', () => {
            const deselectQuiz = deselectElement(targets.QUIZZES);
            expect(deselectQuiz).to.be.an('object');
            expect(deselectQuiz.target).to.equal(targets.QUIZZES);
            expect(deselectQuiz.payload.id).to.equal(-1);            
        });
    });
});