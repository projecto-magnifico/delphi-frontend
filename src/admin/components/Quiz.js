import React from 'react';
import PT from 'prop-types';
import {patchQuiz} from '../../actions'
import {connect} from 'react-redux';

class Quiz extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            editingQuestion : false,
            question : '',
            editingAnswerIndex : -1,
            answers : []
        }

        this.handleAddAnswerDoubleClick = this.handleAddAnswerDoubleClick.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleAnswerDoubleClick = this.handleAnswerDoubleClick.bind(this);
        this.handleAnswerKeyDown = this.handleAnswerKeyDown.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleQuestionDoubleClick = this.handleQuestionDoubleClick.bind(this);
        this.handleQuestionKeyDown = this.handleQuestionKeyDown.bind(this);
        this.handleSubmissionClick = this.handleSubmissionClick.bind(this);
    }

    render () {
        const {quiz, thread} = this.props;
        const {question, editingQuestion, answers, editingAnswerIndex} = this.state;
        const useQuestion = question ? question : quiz.question;
        const useAnswers = answers.map((answer, i) => answer ? answer : quiz.answers[i].proto)
        return (
            <form>
                {!editingQuestion && 
                    <h2 
                        className="title"
                        onDoubleClick={this.handleQuestionDoubleClick}
                    >
                        {quiz.question}
                    </h2>
                }
                {editingQuestion &&
                    <input
                        className="input"
                        type="text"
                        placeholder={useQuestion}
                        value={question}
                        onChange={this.handleQuestionChange}
                        onKeyDown={this.handleQuestionKeyDown}
                        autoFocus="true"
                    />
                }

                <h3 className="subtitle"></h3>

                <p>Currently <strong>{quiz.state}</strong>. Due to be revisited on <strong>{quiz.revisitDate}</strong></p>

                <table className="table">
                    <tbody>
                        {useAnswers.map((answer, i) => {
                            return editingAnswerIndex === i ?
                                <tr key={i}>
                                    <td>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder={useAnswers[i]}
                                            value={answers[i]}
                                            onChange={this.handleAnswerChange}
                                            onKeyDown={this.handleAnswerKeyDown}
                                            autoFocus="true"
                                            data-index={i}
                                        />
                                    </td>
                                </tr>
                            :
                                <tr key={i}>
                                    <td>
                                        <p
                                            onDoubleClick={this.handleAnswerDoubleClick}
                                            data-index={i}
                                        >
                                            {useAnswers[i]}
                                        </p>
                                    </td>
                                    <td>
                                        {quiz.answers[i].votes}
                                    </td>
                                </tr>
                            ;
                        })}
                        <tr>
                            <td
                                onDoubleClick={this.handleAddAnswerDoubleClick}
                            >
                                <p>Add new answer</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button 
                    className="button is-primary is-fullwidth"
                    onClick={this.handleSubmissionClick}
                >
                    Update details
                </button>

                <p>Created on <strong>{quiz.createdDate}</strong></p>
            </form>
        );
    }

    handleQuestionDoubleClick (e) {
        e.preventDefault();
        this.setState({
            editingQuestion : true
        })
    }

    handleQuestionChange (e) {
        e.preventDefault();
        this.setState({
            question : e.target.value
        })
    }

    handleQuestionKeyDown (e) {
        if (e.which === 13) {
            this.setState({
                editingQuestion : false
            })
        }
    }

    handleAnswerDoubleClick (e) {
        e.preventDefault();
        const {quiz} = this.props;
        if (!quiz.flagNew) {
            this.setState({
                editingAnswerIndex : e.target.dataset.index
            })
        }
    }

    handleAnswerChange (e) {
        const {answers} = this.state;
        const index = +e.target.dataset.index;
        const newAnswer = e.target.value;
        this.setState({
            answers : answers.map((answer, i) => {
                return i === index ? newAnswer : answers[i]
            })
        })
    }

    handleAnswerKeyDown (e) {
        if (e.which === 13) {
            const {editingAnswerIndex, answers} = this.state;
            const index = +e.target.dataset.index;
            this.setState({
                editingAnswerIndex : !answers[editingAnswerIndex + 1] ? editingAnswerIndex + 1 : -1,
            })
        }
    }

    handleAddAnswerDoubleClick (e) {
        e.preventDefault();
        const {quiz} = this.props;
        if (!quiz.flagNew) {
            const {answers} = this.state;
            const newIndex = answers.length;
            this.setState({
                answers : answers.concat(''),
                editingAnswerIndex : newIndex
            })
        }
    }

    handleSubmissionClick (e) {
        const {question, answers} = this.state;
        const {quiz} = this.props;
        e.preventDefault();
        const patchQuizData = {};
        if (question !== quiz.question) patchQuizData.question = question;
        patchQuizData.answers = answers;
        patchQuiz(this.props.quiz.quizId, patchQuizData)
    }

    static propTypes = {
        quiz : PT.object.isRequired,
        thread : PT.object.isRequired
    }
}

const mapDispatchToProps = dispatch => ({
    patchQuiz : (id, newData) => {
        dispatch(patchQuiz(id, newData));
    }
})


export default connect(null, mapDispatchToProps)(Quiz);