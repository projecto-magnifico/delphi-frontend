import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {fetchQuizzesForAdmin} from '../../actions'

class QueryQuizzes extends React.Component {
    	constructor (props) {
            super (props);
            this.state = {
                restriction : 'pending',
                count : 10
            }
            this.handleFocus = this.handleFocus.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleChange.bind(this);
        }
    render () {
        return (
            <div className="box">
                <p className="subtitle">Inspect Quizzes</p>
                <div className="field">
                <label className="label">Show...</label>
                <div className="control">
                    <label className="radio">
                        <input type="radio" name="question" value="open" onFocus={this.handleFocus} />
                        ...open
                    </label>
                    <label className="radio">
                        <input type="radio" name="question" value="waiting" onFocus={this.handleFocus} />
                        ...waiting
                    </label>
                    <label className="radio">
                        <input type="radio" name="question" value="pending" onFocus={this.handleFocus} />
                        ...pending
                    </label>
                    <label className="radio">
                        <input type="radio" name="question" value="closed" onFocus={this.handleFocus} />
                        ...closed
                    </label>
                    <label className="radio">
                        <input type="radio" name="question" value="revisit" onFocus={this.handleFocus} />
                        ...next to revisit
                    </label>
                </div>
                <label className="label">Select the top...</label>
                <div className="control">
                    <input className="input" type="number" placeholder="choose number" onChange={this.handleChange}/>
                </div>
                <div className="control">
                <button className="button is-link" type="submit">Submit</button>
                </div>
            </div>
            </div>
        );
    }
    handleFocus (e) {
        e.preventDefault();
        this.setState({
            restriction : e.target.value,
        })
    }

    handleChange (e) {
        e.preventDefault();
        this.setState({
            count : +e.target.value            
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        const query = `restriction=${this.state.restriction}&count=${this.state.count}`
        this.props.fetchQuizzesForAdmin(query);
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