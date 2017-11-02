import React from 'react';
import PT from 'prop-types';


class AdminRequests extends React.Component {
    render () {
        return (
            <div>
                AdminRequests
            </div>
        );
    }

    static propTypes = {
        requests : PT.array.isRequired
    }
}


export default AdminRequests;