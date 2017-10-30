import React from 'react'
import './css/NewsCard.css'

class Prediction extends React.Component {
    constructor(props) {
        super(props)
        
    }

    
    
    render() {
       
        return (
            <div id="particles">
                <div>
                    <div id="card">
                        <div className="uk-card uk-card-body" id="newsBody">
                        <div id="PredictionBody" className="tile">
                    <label class="label"></label>
                    <div class="control">
                        <textarea class="textarea" placeholder="What happens next..."></textarea>
                        <div class="control">
                        <button class="button is-link" style={{display: "none"}}>Submit</button>
                        </div>
                    </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prediction