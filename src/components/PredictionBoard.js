import React from 'react'
import Prediction from './Prediction.js'
import AnswerGroups from './AnswerGroups.js'

class PredictionBoard extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div className="uk-container">
                <div id='predictionCard' className="uk-card-default thing">
                    <div id="CurrentQuestion" className="tile">
                        <h1>What will the outcome of the Spanish election be?</h1>
                        <a href="" uk-icon="icon: info"></a>
                    </div>
                    <div className="uk-container thing">
                        <Prediction />
                        <AnswerGroups />
                    </div>
                </div>
            </div>
        )
    }
}


export default PredictionBoard