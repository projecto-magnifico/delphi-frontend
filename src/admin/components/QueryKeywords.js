import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {fetchKeywordsForAdmin} from '../../actions'


class QueryKeywords extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                <button class="uk-button uk-button-default uk-button-large">
                    Find Top Keywords
                </button>
            </div>
        );
    }


    static propTypes = {
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