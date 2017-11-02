import React from 'react';
import {Box} from 'bloomer';
import PT from 'prop-types';

class AnswerGroups extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }
 
    render() {
        const {suggestions} = this.props;
        return (
            <div>
                <div id="answerGroups" className="tile is-parent tile uk-card-hover uk-card-default">
                    {suggestions.map((suggestion, i) => {
                        return (
                            <Box 
                                onClick={this.handleClick}
                                key={i}
                                className="tile answerGroup uk-card-default"
                                data-prediction={suggestion}
                            >
                                <h2>Did you mean...</h2>
                                <h3>{suggestion.proto}</h3>
                            </Box>
                        )
                    })}
                    <Box 
                        className="tile answerGroup uk-card-default"
                        onClick={this.handleClick}
                        data-prediction={{proto: this.props.prediction,
                            flagNew : true
                        }}
                    >
                        <h4>Stick with {this.props.prediction}.</h4>
                    </Box>
                </div>    
            </div>
        )
    }

    handleClick (e) {
        e.preventDefault();
        const myPrediction = e.target.dataset.suggestion;
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