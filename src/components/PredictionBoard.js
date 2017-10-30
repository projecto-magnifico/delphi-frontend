import React from 'react'
import Prediction from './Prediction.js'
import AnswerGroups from './AnswerGroups.js'
import {Box} from 'bloomer';

class PredictionBoard extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div>
                <Box id="predictionBoard" className="tile uk-card-hover uk-card-default">
                    <Box id="predictionSection">
                <Box id="currentQuestion" className="tile uk-card-hover uk-card-default">
                    <h1>What will the outcome of the Spanish election be?</h1>
                </Box>
                <div className="predictionBody">
                    <Prediction />
                </div>
                    </Box>
                <div className="answerGroups">
                    <AnswerGroups />
                </div> 
                </Box>             
            </div>
        )
    }
}


export default PredictionBoard