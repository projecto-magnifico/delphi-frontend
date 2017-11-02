import React from 'react';
import Queries from './Queries';
import Results from './Results';

class AdminHome extends React.Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-one-fifth">
                    <Queries />
                </div>
                <div className="column is-three-fifths">
                    <Results />
                </div>
            </div>
        );
    }
}

export default AdminHome;