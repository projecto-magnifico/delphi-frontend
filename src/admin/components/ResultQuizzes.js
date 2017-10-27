import React from 'react';
import PT from 'prop-types';
import { connect} from 'react-redux';

class ResultQuizzes extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                ResultQuizzes
            </div>
        );
    }


    static propTypes = {
        loading: PT.bool.isRequired,
        error: PT.any,
        quizzes: PT.arrayOf(PT.object).isRequired        
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.main.quizzes.loading,
        error: state.main.quizzes.error,
        quizzes: state.main.quizzes.data
    }
}

export default connect(mapStateToProps)(ResultQuizzes)