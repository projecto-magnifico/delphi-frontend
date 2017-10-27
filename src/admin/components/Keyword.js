import React from 'react';
import PT from 'prop-types';


class Keyword extends React.Component {
    render () {
        return (
            <div>
                Keyword
            </div>
        );
    }


    static propTypes = {
        keyword : PT.object.isRequired
    }
}


export default Keyword;