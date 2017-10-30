import React from 'react';
import PT from 'prop-types';
import Queries from './Queries';
import Results from './Results';
import Calendar from './Calendar';

class AdminHome extends React.Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-two-fifths">
                    <Queries />
                </div>
                <div className="column is-three-fifths">
                    <Results />
                    <Calendar />
                </div>
            </div>
        );
    }


    static propTypes = {

    }
}

export default AdminHome;