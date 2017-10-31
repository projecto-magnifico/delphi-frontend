import React from 'react';
import QueryKeywords from './QueryKeywords';
import QueryThreads from './QueryThreads';
import QueryQuizzes from './QueryQuizzes';

class Queries extends React.Component {
    render () {
        return (
            <div className="box">
                <QueryThreads />
                <QueryKeywords />
                <QueryQuizzes />
            </div>
        );
    }

}


export default Queries;