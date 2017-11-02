import React from 'react'
import Prediction from './Prediction.js'
import AnswerGroups from './AnswerGroups.js'
import {Box, Button} from 'bloomer';
import PredictionCarousel from './PredictionCarousel.js';
import UserPrediction from './UserPrediction.js'
import stringSimilarity from 'string-similarity';
import {postNewAnswer, patchAnswer} from '../actions'

class IntegratedPredictionBoard extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            checking: false,
            submitted: false,
            suggestions : [],
            prediction : ''
        }
        this.showAnswerOptions = this.showAnswerOptions.bind(this); 
        this.submitPrediction = this.submitPrediction.bind(this);
    }

    showAnswerOptions (prediction) {
        const quiz = this.props.story.quizzes[0];        
        const suggestions = findSuggestions(quiz.answers, prediction);
        this.setState({
            checking: true,
            suggestions : suggestions,
            prediction : prediction
        })
    }
    
    findSuggestions (answers, prediction) {
        return answers.filter(answer => {
            return stringSimilarity.compareTwoStrings(answer.proto, prediction) > 0.3;
        })
    }
    
    submitPrediction (prediction) {
        const quiz = this.props.story.quizzes[0];
        if (prediction.flagNew) {
            postNewAnswer(quiz.quiz_id, prediction.proto);
        } else {
            patchAnswer(prediction.answer_id, {votes : true});
        }
        
        this.setState({
            submitted: true,
            checking : false,
            prediction : prediction.proto
        })
    }

    render () {
        const quiz = this.props.story.quizzes[0];
        return (
            <div>
                {this.state.submitted ? 
                    <div id="submittedView" className="level"> 
                        <div id="submittedPrediction">
                            <UserPrediction
                                prediction={this.state.prediction} 
                            />
                        </div>
                        <div className="level-item">
                            <PredictionCarousel 
                                answers={quiz.answers}
                            />
                        </div>
                    </div> 
                :            
                    <Box id="predictionBoard" className="tile uk-card-hover uk-card-default">
                        <Box id="predictionSection">
                            <Box id="currentQuestion" className="tile uk-card-hover uk-card-default">
                                <h1>{quiz.question}</h1>
                                <h6>This quiz will expire in 48 hours</h6>
                            </Box>
                        <div className="predictionBody">
                            <Prediction showAnswerOptions={this.showAnswerOptions} />
                        </div>
                        </Box>
                        {this.state.checking &&
                            <div className="answerGroups">
                                <AnswerGroups 
                                    suggestions={this.state.suggestions}
                                    submitPrediction={this.submitPrediction} 
                                    prediction={this.state.prediction}
                                />
                            </div>
                        }
                    </Box>
                }
            </div>
        )
    }

    static propTypes = {
        story : PT.object.isRequired
    }
}

const mapDispatchToProps = dispatch => ({
    postNewAnswer : (quiz_id, answer) => {
        dispatch(postNewAnswer(quiz_id, answer))
    },
    patchAnswer : (answer_id, newData) => {
        dispatch(patchAnswer(answer_id, newData))
    }
})

export default connect(null, mapDispatchToProps)(IntegratedPredictionBoard);