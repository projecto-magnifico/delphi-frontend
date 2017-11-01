import React from 'react';
import PT from 'prop-types';


class Quiz extends React.Component {
    render () {
        return (
            <div>
                Quiz
            </div>
        );
    }


    static propTypes = {
        quiz : PT.object.isRequired
    }
}


export default Quiz;