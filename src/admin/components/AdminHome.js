import React from 'react';
import PT from 'prop-types';
import Queries from './Queries';
import Results from './Results';
import Calendar from './Calendar';

class AdminHome extends React.Component {
    render() {
        return (
            <div className="uk-child-width-1-2 uk-grid-small uk-grid-match" uk-grid="true">
                <div className="uk-card uk-card-default uk-card-body">
                    <Queries />
                </div>
                <div className="uk-card uk-card-default uk-card-body">
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