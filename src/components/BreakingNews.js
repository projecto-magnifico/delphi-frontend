import React from 'react'
import NewsCard from './NewsCard'
import Particles from 'react-particles-js';

const threads = [
    {title: 'Trump and Russia', thread_id: 1},
    {title: 'Catalonian Independence', thread_id: 2},
    {title: 'New York City Attck', thread_id: 3},
    {title: 'Michael Fallon Resigns', thread_id: 4},
    {title: 'Sexual Harrassment Scandals in Hollywood', thread_id: 5}
]

class NewsFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div className = "uk-card" id="breakingNews">
                <ul className = "uk-list" id='newsList'>
                {threads.map((card, index) => {
                    return <li key={index}><NewsCard changeThread={this.props.changeThread} title={card.title} thread_id={card.thread_id} /></li>
                })}
                </ul>
            </div>
        )
    }
}


export default NewsFeed