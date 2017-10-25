import React from 'react'
import NewsCard from './NewsCard'

class NewsFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div className=" uk-card uk-card-hover uk-card-default">
                <ul className = "uk-list">
                {[1,2,3,4,5].map(card => {
                    return <li><NewsCard /></li>
                })}
                </ul>
            </div>
        )
    }
}


export default NewsFeed