import React from 'react';
import PT from 'prop-types';


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


export default QueryThreads;