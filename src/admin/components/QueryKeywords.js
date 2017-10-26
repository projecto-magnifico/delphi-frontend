import React from 'react';
import PT from 'prop-types';


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
        keywords : PT.arrayOf(PT.object).isRequired
    }
}


export default QueryKeywords;