import React from 'react'
import './css/NewsCard.css'
import {Box} from 'bloomer';

class NewsCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(event) {
      
        console.log(event.target.value)
        event.preventDefault();
        this.props.changeThread(event.target.value)
    }
    render() {
       
        return (
            
                <Box id ='newsCard'className= "uk-card uk-card-hover ">
                    {console.log('props-->',this.props)}
                    <div id="card">
                        <div id="newsHeader" className="uk-card-header">
                            <span> <h3 className="uk-card-title">{this.props.title}</h3></span>
                        </div>
                        <div className="uk-card uk-card-body" id="newsBody">
                        <button onClick={this.handleClick} value={this.props.thread_id}className="uk-button uk-button-primary uk-button-small">Display</button>
                        </div>
                        
                    </div>
                </Box>
          
        )
    }
}

export default NewsCard