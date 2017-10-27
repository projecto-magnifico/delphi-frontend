import React from 'react';
import PT from 'prop-types';
import Event from './Event';

class Calendar extends React.Component {
    	constructor (props) {
            super (props);
            this.state = {
                events : {}
            }
        }
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                <Event />
            </div>
        );
    }


    static propTypes = {
        events : PT.arrayOf(PT.object).isRequired
    }
}


export default Calendar;