import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {fetchQuizzesForAdmin} from '../../actions'

class QueryQuizzes extends React.Component {
    render () {
        return (
            <div className="box">
                <p className="subtitle">Inspect Quizzes</p>
                <div class="field">
                <label class="label">Show...</label>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="question" />
                        ...recently added
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" />
                        ...open
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" />
                        ...waiting
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" />
                        ...pending
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" />
                        ...closed
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" />
                        ...next to revisit
                    </label>
                </div>
                <label class="label">Select the top...</label>
                <div class="control">
                    <input class="input" type="number" placeholder="choose number"/>
                </div>
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizzesForAdmin: (query) => {
            dispatch(fetchQuizzesForAdmin(query));
        }
    }
}

export default connect(null, mapDispatchToProps)(QueryQuizzes)