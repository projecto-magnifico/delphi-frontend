import React from 'react';
import PT from 'prop-types';
import QueryKeywords from './QueryKeywords';
import QueryThreads from './QueryThreads';
import QueryQuizzes from './QueryQuizzes';

class Queries extends React.Component {
    render () {
        return (
            <div className="uk-child-width-1-2 uk-grid-small uk-grid-match" uk-grid="true">
                <QueryThreads />
                <QueryKeywords />
                <QueryQuizzes />
            </div>
        );
    }


    static propTypes = {
    
    }
}


export default Queries;