import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuizzesByThreadId } from '../../actions';
import Quiz from './Quiz';

class ThreadQuizzesContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            quizzes: [],            
        }
        this.updateQuizzes = this.updateQuizzes.bind(this);
    }

    componentDidMount () {
        fetchQuizzesByThreadId(this.props.threadId);
    }

    componentWillReceiveProps (newProps) {
        this.updateQuizzes(newProps.threadQuizzes);
    }

    updateQuizzes (newQuizzes) {
        this.setState({
            quizzes : newQuizzes
        })
    }

    render () {
        const {quizzes} = this.props;
        return (
            <div>
                {quizzes.map((quiz, i) => {
                    return <Quiz
                        key={i}
                        quiz={quiz}
                    />
                })}
            </div>
        );
    }

    static propTypes = {
        quizzes : PT.array.isRequired,
        threadId : PT.number.isRequired
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizzesByThreadId: (threadId) => {
            dispatch(fetchQuizzesByThreadId(threadId));
        }
    }
}

export default connect(mapDispatchToProps)(ThreadQuizzesContainer);