import React from 'react';
import PT from 'prop-types';
import NewsCard from './NewsCard'
// import Particles from 'react-particles-js';

class NewsFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        const {stories} = this.props;
        return (
            <div className = "uk-card-default uk-card-hover tile is-3" style={{marginRight: '50px'}}>
                <ul className = "uk-list">
                    {stories.map((story, i) => {
                        return <li key={i}>
                            <NewsCard 
                                story={story}
                                rank={i}
                            />
                        </li>
                    })}
                </ul>
            </div>
        )
    }

    static propTypes = {
        stories : PT.array.isRequired
        //passed down
    }
}


export default NewsFeed