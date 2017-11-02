import React from 'react';
import {Box} from 'bloomer';
import PT from 'prop-types';

class AnswerGroups extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }
 
    render() {
        const {suggestions} = this.props;
        return (
            <Box>
                <div id="answerGroups" className="tile is-parent tile">
                    <ul>
                    {suggestions.map((suggestion, i) => {
                        return (
                            <li>
                                <Box 
                                onClick={this.handleEvent}
                                key={i}
                                className="tile is-12 button answerGroup"
                                data-prediction={suggestion}
                            >
                                <h2>Did you mean...</h2>
                                <h3>{suggestion.proto}</h3>
                            </Box>
                            </li>
                        )
                    })}
                    <li>
                    <Box 
                        className="tile is-12 answerGroup button"
                        onClick={this.handleClick}
                        
                    >
                        <h4>Stick with {this.props.prediction}.</h4>
                    </Box>
                    </li>

                        </ul>
                </div>    
            </Box>
        )
    }

    handleClick (e) {
        const obj = {proto: this.props.prediction,
            flagNew : true
        }
        e.preventDefault();
        console.dir(e.target);
        const {submitPrediction} = this.props;
        submitPrediction(obj);
    }

    handleEvent (e) {
        e.preventDefault()
        console.dir(e.target);
       const myPrediction = e.target.dataset.prediction;
        const {submitPrediction} = this.props;
        submitPrediction(myPrediction);
    }

    static propTypes = {
        prediction : PT.string.isRequired,
        suggestions : PT.array.isRequired,
        submitPrediction : PT.func.isRequired

    }

}

export default AnswerGroups
