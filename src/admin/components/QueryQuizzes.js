import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {fetchQuizzesForAdmin} from '../../actions'

class QueryQuizzes extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                <button class="uk-button uk-button-default uk-button-large">
                    Find Upcoming Quizzes
                </button>
            </div>
        );
    }

    static propTypes = {
        
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