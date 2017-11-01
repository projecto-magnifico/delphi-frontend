import React from 'react'
import './css/NewsCard.css'
import {Box} from 'bloomer';

class NewsCard extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    render() {
       
        return (
            <div id="particles">
                <Box id ='newsCard'className= "uk-card-default uk-card-hover ">
                    <div id="card">
                        <div id="newsHeader" className="uk-card-header">
                            <span> <h3 className="uk-card-title"> <img id="sourceIcon" src="http://icons.veryicon.com/ico/System/Circle/bbc%20news.ico" /> Heading</h3></span>
                        </div>
                        <div className="uk-card uk-card-body" id="newsBody">
                            <p id="newsDescription" className="uk-card-body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        </div>
                        <div className="uk-card-footer">
                        <button className="uk-button uk-button-primary uk-button-small">Follow</button>
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}

export default NewsCard