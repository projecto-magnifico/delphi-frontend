import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {fetchThreadsForAdmin} from '../../actions'


class QueryThreads extends React.Component {
    	constructor (props) {
            super (props);
            this.state = ({
                unnamed : false,
                summary : 'any',
                count : 10,
                checkboxChecked : false
            })
            this.handleFocus = this.handleFocus.bind(this);
            this.handleCheck = this.handleCheck.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    render() {
        return (
            <form className="box" onSubmit={this.handleSubmit}>
                <p className="subtitle">Inspect Threads</p>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" checked={this.state.checkboxChecked} onChange={this.handleCheck}/>
                            Only select unnamed
                        </label>
                    </div>
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" value="null" onFocus={this.handleFocus} />
                            No summary
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" value="old" onFocus={this.handleFocus}/>
                            Summary > 3 days old
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" value="any" onFocus={this.handleFocus}/>
                            Any summary
                        </label>
                    </div>
                    <label class="label">Select the top...</label>
                    <div class="control">
                        <input class="input" type="number" value={this.state.count} placeholder="10" onChange={this.handleChange}/>
                    </div>
                    <div class="control">
                        <button class="button is-link" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        );
    }

    handleFocus (e) {
        e.preventDefault();
        this.setState({
            summary : e.target.value,
        })
    }

    handleCheck (e) {
        this.setState({
            unnamed : e.target.checked,
            checkboxChecked : !this.state.checkboxChecked       
        })
    }

    handleChange (e) {
        e.preventDefault()
        this.setState({
            count : +e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        const query = `unnamed=${this.state.unnamed}&summary=${this.state.summary}&count=${this.state.count}`
        this.props.fetchThreadsForAdmin(query);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchThreadsForAdmin: (query) => {
            dispatch(fetchThreadsForAdmin(query));
        }
    }
}
export default connect(null, mapDispatchToProps)(QueryThreads)