import React from 'react'
import Prediction from './Prediction.js'

class PredictionBoard extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div id ='predictionCard' className="uk-card-default">
                <div id="CurrentQuestion" className="tile">
                    <h1>What will the outcome of the Spanish election be?</h1>
                    <a href="" uk-icon="icon: info"></a>
                </div>
                <Prediction/>
            </div>
        )
    }
}


export default PredictionBoard