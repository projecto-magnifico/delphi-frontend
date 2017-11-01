import React from 'react';
import PT from 'prop-types';


class ResultQuizzes extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                ResultQuizzes
            </div>
        );
    }


    static propTypes = {
        quizzes : PT.arrayOf(PT.object).isRequired
        
    }
}


export default ResultQuizzes;