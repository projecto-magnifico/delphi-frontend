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
                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" checked={this.state.checkboxChecked} onChange={this.handleCheck}/>
                            {` Only select unnamed`}
                        </label>
                    </div>
                    <ul className="control">
                        <li>
                            <label className="radio">
                                <input type="radio" name="question" value="null" onFocus={this.handleFocus} />
                                {` No summary`}
                            </label>
                        </li>
                        <li>
                            <label className="radio">
                                <input type="radio" name="question" value="due" onFocus={this.handleFocus}/>
                                {` Summary due`}
                            </label>
                        </li>
                        <li>
                            <label className="radio">
                                <input type="radio" name="question" value="any" onFocus={this.handleFocus}/>
                                {` Any summary`}
                            </label>
                        </li>
                    </ul>
                    <label className="label">Select the top...</label>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={this.state.count} placeholder="10" onChange={this.handleChange}/>
                        </div>
                        <div className="control">
                            <button className="button is-link" type="submit">Load</button>
                        </div>
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