import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {fetchThreadsForAdmin} from '../../actions'


class QueryThreads extends React.Component {
    render() {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                <button class="uk-button uk-button-default uk-button-large">
                    Find Top Threads
                </button>
            </div>
        );
    }


    static propTypes = {
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