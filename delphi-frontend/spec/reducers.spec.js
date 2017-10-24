import {expect} from 'chai';
import reducer, {getInitialState} from '../reducers/threads';
import * as actionCreators from '../actions/threads.js';

describe('reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const prevState = getInitialState();
      const action = {type: 'whatever'};
      const newState = reducer(prevState, action);
      expect(newState).to.equal(prevState);
    });
  });
});