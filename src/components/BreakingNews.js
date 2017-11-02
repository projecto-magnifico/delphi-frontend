import React from 'react'
import NewsCard from './NewsCard'
import Particles from 'react-particles-js';

class NewsFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div className = "uk-card-default uk-card-hover tile is-3" style={{marginRight: '50px'}}>
                <ul className = "uk-list">
                {[1,2,3,4,5].map((card, index) => {
                    return <li key={index}><NewsCard /></li>
                })}
                </ul>
            </div>
        )
    }
}


export default NewsFeed