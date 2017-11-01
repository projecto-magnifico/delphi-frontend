import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuizzesByThreadId } from '../../actions';
import Quiz from './Quiz';
import NewQuiz from './NewQuiz';
import AdminButton from './AdminButton';

class ThreadQuizzesContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            quizzes: [],
            addingQuiz : false
        }
        this.updateQuizzes = this.updateQuizzes.bind(this);
        this.handleQuizToggle = this.handleQuizToggle.bind(this);
        this.informQuizPosted = this.informQuizPosted.bind(this);
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
        const {quizzes, addingQuiz} = this.state;
        const {thread} = this.props;
        const useQuizzes = quizzes ? quizzes : this.props.quizzes;
        return (
            <div>
                {addingQuiz &&
                <div>
                    <AdminButton 
                        classText="button is-primary is-fullwidth"
                        btnFunction={this.handleQuizToggle}
                        btnText="Cancel quiz creation"
                    />
                    <NewQuiz 
                        informQuizPosted={this.informQuizPosted}
                        thread={thread ? thread : {threadId : null}}
                    />
                </div>
                }
                {!addingQuiz &&
                    <AdminButton 
                        classText="button is-primary is-fullwidth"
                        btnFunction={this.handleQuizToggle}
                        btnText="Create new quiz"
                    />
                }
                <div>
                    {quizzes.map((quiz, i) => {
                        return <Quiz
                            key={i}
                            quiz={quiz}
                            thread={thread}
                        />
                    })}
                </div>
            </div>
        );
    }

    handleQuizToggle (e) {
        e.preventDefault()
        this.setState({
            addingQuiz : !this.state.addingQuiz
        })
    }

    informQuizPosted (quiz) {
        console.log(quiz);
        this.setState({
            quizzes : this.state.quizzes.concat(quiz),
            addingQuiz : false
        })
    }

    static propTypes = {
        quizzes : PT.array.isRequired,
        loading : PT.bool.isRequired,
        error : PT.any,
        thread : PT.object
    }
}

const mapStateToProps = state => ({
    quizzes : state.admin.threadQuizzes.data,
    loading : state.admin.threadQuizzes.loading,
    error : state.admin.threadQuizzes.error
})

const mapDispatchToProps = dispatch => ({
    fetchQuizzesByThreadId: threadId => {
        dispatch(fetchQuizzesByThreadId(threadId));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreadQuizzesContainer);