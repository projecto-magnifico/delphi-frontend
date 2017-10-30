import React from 'react';
import PT from 'prop-types';

class Thread extends React.Component {
    render () {
        return (
            <div className="box">
                Thread
            </div>
        );
    }

    static propTypes = {
        thread : PT.object.isRequired
    }
}


export default Thread;