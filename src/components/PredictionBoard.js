import React from 'react'
import Prediction from './Prediction.js'
import AnswerGroups from './AnswerGroups.js'
import {Box, Button} from 'bloomer';
import findSuggestions from '../logic/suggestionLogic.js'

const quiz = {

    answerOptions: ["Mariano Rajoy will regisn as prime-minister","Spanish government will block Catalonian independence"]
}

class PredictionBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            checking: false
        }
        this.showAnswerOptions = this.showAnswerOptions.bind(this);
    }

    showAnswerOptions () {

        const newChecking = !this.state.checking;
        this.setState({
            checking: newChecking
        })
    }

    render () {
        return (
            <div>
                <Box id="predictionBoard" className="tile uk-card-hover uk-card-default">
                    <Box id="predictionSection">
                <Box id="currentQuestion" className="tile uk-card-hover uk-card-default">
                    <h1>How will the Spanish election impact the Catalonian referendum?</h1>
                </Box>
                <div className="predictionBody">
                    <Prediction showAnswerOptions = {this.showAnswerOptions} />
                </div>
                    </Box>
                {this.state.checking ? <div></div> :
                    <div className="answerGroups">
                        <AnswerGroups answerOptions={quiz.answerOptions} />
                    </div>}
                </Box>             
            </div>
        )
    }
}


export default PredictionBoard