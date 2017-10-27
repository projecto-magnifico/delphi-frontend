import React from 'react';
import PT from 'prop-types';
import ResultKeywords from './ResultKeywords';
import ResultQuizzes from './ResultQuizzes';
import ResultThreads from './ResultThreads';

class Results extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                <ResultThreads />
                <ResultKeywords />
                <ResultQuizzes />
            </div>
        );
    }

    static propTypes = {
    }
}


export default Results;