import React from 'react';
import PT from 'prop-types';


class ResultThreads extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                ResultThreads
            </div>
        );
    }


    static propTypes = {
        threads: PT.arrayOf(PT.object).isRequired
        
    }
}


export default ResultThreads;