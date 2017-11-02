import React from 'react'
import Prediction from './Prediction.js'
import AnswerGroups from './AnswerGroups.js'
import {Box, Button} from 'bloomer';
import findSuggestions from '../logic/suggestionLogic.js';
import PredictionCarousel from './PredictionCarousel.js';
import _ from 'underscore';
import UserPrediction from './UserPrediction.js'

const quiz = {

    answerOptions: ["",""]
}

const quizAdmin = {

   answerOptions : ["Mariano Rajoy will resign as prime-minister","Spanish government will block Catalonian independence","Catalonia and Spain will enter a civil war",
                    "Catalonia will join together with Spain","Catalonia will become independent from Spain","The EU will prevent Catalonian independence",
                    "Catalonian leaders will be prosecuted in Brussels"]
}

class PredictionBoard extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            checking: true,
            submitted: false
        }
        this.showAnswerOptions = this.showAnswerOptions.bind(this); 
        this.submitQuiz = this.submitQuiz.bind(this);
    }

    showAnswerOptions () {

        const userPrediction = document.getElementById("userPrediction").value;
        const newSuggestions = _.pluck(findSuggestions(quizAdmin.answerOptions,userPrediction),"target");
        quiz.answerOptions = newSuggestions
        const newChecking = !this.state.checking;
        this.setState({
            checking: newChecking
        })
    }

    submitQuiz () {

        const newSubmission = !this.state.submitted
        this.setState({
            submitted: newSubmission
        })
    }

    render () {
        return (
            <div className='predictionBoard'>
                {this.state.submitted ? 
                <div id="submittedView" className="level"> 
                            <div id="submittedPrediction"  >
                                <UserPrediction name={this.props.currentUser} prediction={document.getElementById("userPrediction").value}></UserPrediction>                        
                            </div>
                            <div className="carousel">
                                <PredictionCarousel></PredictionCarousel>
                            </div>
                    </div> 
                : 
                
                <div>
                    {this.state.checking ?
                    <Box id="predictionBoard" className='uk-card uk-card-default'>
                        <Box id="currentQuestion" className="uk-card-default">
                            <h1>How will the Spanish election impact the Catalonian referendum?</h1>
                            <h6><i className="fa fa-clock-o" aria-hidden="true"></i> 48 Hours</h6>
                        </Box>
                        <div className="predictionBody">
                            <Prediction showAnswerOptions = {this.showAnswerOptions} />
                        </div>
                        </Box>
                    :
                    <Box id='predictionBoard' className='uk-card uk-card-default' style={{display: 'block'}}>
                        <div id='innerdiv' style={{display: 'inline-flex'}}>
                            <Box id="currentQuestion" className="tile uk-card-default">
                                <h1>How will the Spanish election impact the Catalonian referendum?</h1>
                                <h6>This quiz will expire in 48 hours</h6>
                            </Box>
                        <div className="predictionBody">
                            <Prediction showAnswerOptions = {this.showAnswerOptions} />
                        </div>
                        </div>
                        <div className="answerGroups">
                            <AnswerGroups answerOptions={quiz.answerOptions} submitQuiz={this.submitQuiz} />
                        </div>
                    </Box>
                    }
                    </div>
                }
            </div>

        )
    }
}

export default PredictionBoard