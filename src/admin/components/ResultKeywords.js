import React from 'react';
import PT from 'prop-types';


class ResultKeywords extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                ResultKeywords
            </div>
        );
    }


    static propTypes = {
        keywords : PT.arrayOf(PT.object).isRequired
        
    }
}


export default ResultKeywords;