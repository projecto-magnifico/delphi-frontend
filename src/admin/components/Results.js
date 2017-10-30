import React from 'react';
import PT from 'prop-types';
import ResultKeywords from './ResultKeywords';
import ResultQuizzes from './ResultQuizzes';
import ResultThreads from './ResultThreads';

class Results extends React.Component {
    
    render () {
        return (
            <div className="box">
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