import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { fetchKeywordsForAdmin } from '../../actions'


class QueryKeywords extends React.Component {
    render() {
        return (
            <div className="box">
                <p className="subtitle">Inspect Keywords</p>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" />
                            Only select untagged
                        </label>
                    </div>
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" />
                            Show the top...
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" />
                            Show with relevance over...
                        </label>
                    </div>
                    <div class="control">
                        <input class="input" type="number" placeholder="choose number"/>
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
        fetchKeywordsForAdmin: (query) => {
            dispatch(fetchKeywordsForAdmin(query));
        }
    }
}

export default connect(null, mapDispatchToProps)(QueryKeywords)