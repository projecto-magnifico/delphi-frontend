import React from 'react';
import { Box } from 'bloomer';
import PT from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import TimelineElement from './TimelineElement';
import LatestDevelopmentComponent from './LatestDevelopmentComponent.js'

class ThreadCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        this.changePage2 = this.changePage2.bind(this);
        this.changePage1 = this.changePage1.bind(this);
    }
    changePage2(event) {
        event.preventDefault();
        this.setState({
            index: 1
        })
    }

    changePage1(event) {
        event.preventDefault()
        this.setState({
            index: 0
        })
    }

    render() {
        const {story} = this.props;
        return (
            <Box id='threadCard' className="tile is-3 uk-card-default uk-card-hover">
                <div className='uk-card'>
                    {/* <i id='compress' onClick={this.props.renderAlternativeView} className="fa fa-compress" aria-hidden="true"></i>
                    <i id='right' onClick={this.changePage2} className="fa fa-angle-right" aria-hidden="true"></i>
                    <i id='left' onClick={this.changePage1} className="fa fa-angle-left" aria-hidden="true"></i> */}
                    <div className='uk-card-header'>
                        <h1>{story.name}</h1>
                    </div>
                        <div className="uk-card-body page1">
                            <img id='threadImg' src={story.imageUrl} />
                            <ul className='uk-list uk-list-divider'>
                                {story.summary.map((summaryItem, i) => {
                                    return <li key={i}>{summaryItem}</li>  
                                })}
                                <li><h3>Read more :</h3></li>
                                <li>
                                    <ul className='uk-list uk-list-bullet uk-list-divider'>
                                    {story.articles.slice(0, 3).map((article, i) => {
                                        return <li>
                                            <LatestDevelopmentComponent 
                                                key={i}
                                                article={article}
                                            />
                                        </li>
                                    })}
                                    </ul>
                                </li>
                            </ul>

                        </div>
                </div>
            </Box>

        )
    }

    static propTypes = {
        story: PT.object.isRequired
    }
}

export default ThreadCard