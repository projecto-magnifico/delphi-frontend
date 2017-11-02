import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import './css/NewsCard.css';
import {Box} from 'bloomer';
import {selectElement} from '../actions';

class NewsCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        const {story, rank} = this.props;
        return (
            <div id="particles">
                <Box id ='newsCard'className= "uk-card-default uk-card-hover ">
                    <div id="card">
                        <div id="newsHeader" className="uk-card-header">
                            <h3 className="uk-card-title">{rank + 1}. {story.name ? story.name : "Top Story..."}</h3>
                        </div>
                        {rank === 0 &&
                            <span>
                                <img id="sourceIcon" src={story.imageUrl} />
                            </span>
                        }
                        <button 
                            className="uk-button uk-button-primary uk-button-small"
                            onClick={this.handleClick}
                        >
                            Track
                        </button>
                    </div>
                </Box>
            </div>
        )
    }

    handleClick (e) {
        e.preventDefault();
        this.props.selectElement(this.props.rank);
    }

    static propTypes = {
        story : PT.object.isRequired,
        rank : PT.number.isRequired
    }
}

const mapDispatchToProps = dispatch => ({
    selectElement : index => {
        dispatch(selectElement(index));
    }
})

export default connect(null, mapDispatchToProps)(NewsCard)