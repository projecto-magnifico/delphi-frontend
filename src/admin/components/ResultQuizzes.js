import React from 'react';
import PT from 'prop-types';
import { connect} from 'react-redux';
import Quiz from './Quiz';
class ResultQuizzes extends React.Component {
    render () {
        return (
            <div className="box">
                {this.props.quizzes.map(quiz => {
                    <Quiz>
                        quiz={quiz}
                    </Quiz>
                })}
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
    console.log(state.main)
    return {
        loading: state.admin.quizzes.loading,
        error: state.admin.quizzes.error,
        quizzes: state.admin.quizzes.data
    }
}

export default connect(mapStateToProps)(ResultQuizzes)