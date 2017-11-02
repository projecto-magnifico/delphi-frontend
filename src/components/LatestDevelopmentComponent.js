import React from 'react';
import PT from 'prop-types';

class LatestDevelopmentComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        const {article} = this.props;
        return (
            <div>
                <a href={article.url}><p>{article.title}</p></a>
            </div>
        )
    }

    static propTypes = {
        article : PT.object.isRequired
    }
}

export default LatestDevelopmentComponent;