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
                    <ul>
                        {['open', 'waiting', 'pending', 'closed', 'revisit'].map((state, i) => {
                            return <li key={i}>
                                <label className="radio">
                                <input type="radio" name="answer" value={state} onFocus={this.handleFocus} />
                                {` ${state}`}
                            </label>

                            </li>
                        })}
                    </ul>
                    <label className="label">Select the most recent</label>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" onChange={this.handleChange}/>
                        </div>
                        <div className="control">
                            <button className="button is-link" type="submit">Load</button>
                        </div>
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
        const {count, restriction} = this.state;
        const {fetchQuizzesForAdmin} = this.props;
        e.preventDefault();
        const query = `restriction=${restriction}&count=${count}`;
        fetchQuizzesForAdmin(query);
    }
}

const mapDispatchToProps = dispatch => ({
    fetchQuizzesForAdmin: query => {
        dispatch(fetchQuizzesForAdmin(query));
    }
})


export default connect(null, mapDispatchToProps)(QueryQuizzes)