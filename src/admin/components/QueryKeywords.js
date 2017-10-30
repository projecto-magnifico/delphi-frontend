import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { fetchKeywordsForAdmin } from '../../actions'

class QueryKeywords extends React.Component {
    constructor (props) {
        super (props);
        this.state = ({
            untagged : false,
            argument : 'top',
            value : 10,
            checkboxChecked : false
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="box">
                <p className="subtitle">Inspect Keywords</p>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                        <input type="checkbox" checked={this.state.checkboxChecked} onChange={this.handleCheck}/>
                        Only select untagged
                        </label>
                    </div>
                    <div class="control">
                        <input type="radio" name="question" value="top" onFocus={this.handleFocus} />
                        <label class="radio">
                        Show the top...
                        </label>
                        <input type="radio" name="question" value="important" onFocus={this.handleFocus} />
                        <label class="radio">
                        Show from threads ranked 1 to...
                        </label>
                    </div>
                    <div class="control">
                    <input class="input" type="number" value={this.state.value} placeholder="10" onChange={this.handleChange}/>
                    </div>
                    <div class="control">
                    <button class="button is-link" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        );
    }

    handleCheck (e) {
        this.setState({
            untagged : e.target.checked,
            checkboxChecked : !this.state.checkboxChecked            
        })
    }

    handleFocus (e) {
        e.preventDefault();        
        this.setState({
            argument : e.target.value,
        })
    }

    handleChange (e) {
        this.setState({
            value : +e.target.value
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
        fetchKeywordsForAdmin: (query) => {
            dispatch(fetchKeywordsForAdmin(query));
        }
    }
}

export default connect(null, mapDispatchToProps)(QueryKeywords)