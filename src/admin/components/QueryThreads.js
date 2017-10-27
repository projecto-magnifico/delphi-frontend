import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {fetchThreadsForAdmin} from '../../actions'


class QueryThreads extends React.Component {
    render() {
        return (
            <div className="box">
                <p className="subtitle">Inspect Threads</p>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" />
                            Only select unnamed
                        </label>
                    </div>
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" />
                            No summary
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" />
                            Summary > 3 days old
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" />
                            Any summary
                        </label>
                    </div>
                    <label class="label">Select the top...</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="10"/>
                    </div>
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                </div>
            </div>
        );
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