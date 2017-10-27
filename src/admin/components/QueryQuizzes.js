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
                <div class="field">
                <label class="label">Show...</label>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="question" value="recent" onFocus={this.handleFocus} />
                        ...recently added
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" value="open" onFocus={this.handleFocus} />
                        ...open
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" value="waiting" onFocus={this.handleFocus} />
                        ...waiting
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" value="pending" onFocus={this.handleFocus} />
                        ...pending
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" value="closed" onFocus={this.handleFocus} />
                        ...closed
                    </label>
                    <label class="radio">
                        <input type="radio" name="question" value="revisit" onFocus={this.handleFocus} />
                        ...next to revisit
                    </label>
                </div>
                <label class="label">Select the top...</label>
                <div class="control">
                    <input class="input" type="number" placeholder="choose number" onChange={this.handleChange}/>
                </div>
                <div class="control">
                <button class="button is-link" type="submit">Submit</button>
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