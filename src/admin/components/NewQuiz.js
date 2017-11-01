import React from 'react';
import PT from 'prop-types';
import AdminButton from './AdminButton';

class NewQuiz extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            question : '',
            closingInterval : 7,
            state : '',
            answers : []
        }

        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleRemoveAnswerClick = this.handleRemoveAnswerClick.bind(this);
        this.handleRevisitFocus = this.handleRevisitFocus.bind(this);
        this.handleSubmissionClick = this.handleSubmissionClick.bind(this);
        this.handleNewAnswerClick = this.handleNewAnswerClick.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
    }
    render() {
        const {question, closingInterval, state, answers} = this.state;
        const {thread} = this.props;
        return (
            <form>
                <div className="field">
                    <label className="label">Question</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder={`What will happen in the next ${closingInterval} days?`}
                            value={question} 
                            onChange={this.handleQuestionChange}
                            onKeyDown={this.handleKeyDown}
                        />
                    </div>

                    <label className="label">Revisit in...</label>
                    <div className="control">
                        {[7, 14, 21, 28].map((number, i) => {
                            return <div key={i}>
                                <label className="radio">
                                    <input 
                                        type="radio"
                                        name="question"
                                        value={number}
                                        onFocus={this.handleRevisitFocus}
                                    />
                                    ...{number} days
                                </label>
                            </div>
                        })}
                    </div>
                    <table className="table">
                        <tbody>
                            {answers.map((answer, i) => {
                                return <tr key={i}>
                                    <td>
                                        <input
                                            key={i}
                                            className="input"
                                            value={answer}
                                            onChange={this.handleAnswerChange}
                                            data-index={i}
                                        />
                                    </td>
                                    <td>
                                        <a className="control">
                                            <button 
                                                className="button is-small"
                                                onClick={this.handleRemoveAnswerClick}
                                                data-index={i}
                                            >
                                                <span className="icon is-large">
                                                    <i 
                                                        className="fa fa-trash-o" 
                                                        aria-hidden="true"
                                                        data-index={i}
                                                    />
                                                </span>
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            })}
                            <tr>
                                <td>
                                    <a className="control">
                                        <button
                                            className="button is-full-width"
                                            onClick={this.handleNewAnswerClick}
                                        >
                                            Add new answer
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="control">
                        <label className="label">Release state:</label>
                        {['open', 'waiting'].map((state, i) => {
                            return <div key={i}>
                                <label className="radio">
                                    <input 
                                        type="radio"
                                        name="question"
                                        value={state}
                                        onFocus={this.handleRevisitFocus}
                                        onKeyDown={this.handleKeyPress}
                                    />
                                    {state}
                                </label>
                            </div>
                        })}
                    </div>
                    <button
                        className="button is-primary is-fullwidth"
                        onClick={this.handleSubmissionClick}
                    >
                        Post new quiz
                    </button>
                </div>
            </form>
        );
    }

    handleSubmissionClick (e) {
        const {question, closingInterval, state, answers} = this.state;
        const {addQuizToLocalState, thread} = this.props;
        const date = 0;
        //TODO - SORT OUT DATE! ALEX!
        // date = new Date();
        // date = date.getUTCFullYear() + '-' +
        //         ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        //         ('00' + date.getUTCDate()).slice(-2);
        const revisitDate = state === 'waiting' ? (date + 1) : (date + closingInterval)
        const quiz = {
            question : question,
            threadId : thread ? thread.threadId : 0,
            state : state,
            revisitDate : date,
            dateCreated : new Date().getDate(),
            answers : answers.map(answer => ({
                proto: answer,
                votes : 0
            }))
        }
        addQuizToLocalState(quiz);
    }

    handleAnswerChange (e) {
        const {answers} = this.state;
        this.setState({
            answers : answers.map((answer, i) => {
                return i === +e.target.dataset.index ? e.target.value : answers[i]
            })
        })
    }
    handleNewAnswerClick (e) {
        e.preventDefault();
        this.setState({
            answers : this.state.answers.concat('')
        })
    }

    handleRemoveAnswerClick (e) {
        e.preventDefault();
        this.setState({
            answers : this.state.answers.filter((answer, i) => {
                return i !== +e.target.dataset.index
            })
        })
    }

    handleRevisitFocus (e) {
        this.setState({
            closingInterval : e.target.value
        })
    }

    handleKeyDown (e) {
        if (e.which === 13) {
            e.preventDefault()
        }
    }

    handleQuestionChange (e) {
        this.setState({
            question : e.target.value
        })
    }

    static propTypes = {
        thread : PT.object.isRequired,
        addQuizToLocalState : PT.func.isRequired
    }
}


export default NewQuiz;