import React from 'react'
import Prediction from './Prediction.js'
import AnswerGroups from './AnswerGroups.js'
import {Box, Button} from 'bloomer';
import PredictionCarousel from './PredictionCarousel.js';
import UserPrediction from './UserPrediction.js'
import stringSimilarity from 'string-similarity';
// import {postNewAnswer, patchAnswer} from '../actions';
import PT from 'prop-types';
import {connect} from 'react-redux';

const quiz = {
    question: 'What will happen to Paul Manafort?',
    answers: [{
        proto: 'He will go to jail',
        votes: 19,
        answer_id: 1
    },
    {
        proto: 'He will flee to Russia',
        votes: 19,
        answer_id: 1
    },
    {
        proto: 'He will be protected by Donald Trump',
        votes: 19,
        answer_id: 1
    },
    {
        proto: 'He will cooperate with the FBI and get immunity',
        votes: 19,
        answer_id: 1
    }]
};


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
        // const quiz = this.props.story.quizzes[0];        
        const suggestions = this.findSuggestions(quiz.answers, prediction);
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
        // const quiz = this.props.story.quizzes[0];
        // if (prediction.flagNew) {
        //     postNewAnswer(quiz.quiz_id, prediction.proto);
        // } else {
        //     patchAnswer(prediction.answer_id, {votes : true});
        // }
        
        this.setState({
            submitted: true,
            checking : false,
            prediction : prediction.proto
        })
    }

    render () {
        // const quiz = this.props.story.quizzes[0];

        return (
            <div className='columns'>
                
                <div className='column'>
                            <Box id="currentQuestion" className="uk-card">
                                    <h1>{quiz.question}</h1>
                                    

                                    {!this.state.submitted ? 
                                    <div className="predictionBody">
                                        <Prediction showAnswerOptions={this.showAnswerOptions} />
                                    </div>
                                    
                                    :
                                    <div id="submittedPrediction">
                                        <UserPrediction
                                            prediction={this.state.prediction} 
                                        />
                                    </div>
                                    }
                                   
                            </Box>
                     
                </div>

                <div id='carouselColumn' className='column'>
                    {this.state.checking && 
                    
                    <div className="answerGroups">
                                    <AnswerGroups 
                                        suggestions={this.state.suggestions}
                                        submitPrediction={this.submitPrediction} 
                                        prediction={this.state.prediction}
                                    />
                    </div>
                    }

                    {this.state.submitted && 
                       
                            <PredictionCarousel 
                                answers={quiz.answers}
                            />
                       
                    }
                </div>
            </div>
        )
    }

    static propTypes = {
        story : PT.object.isRequired
    }
}

// const mapDispatchToProps = dispatch => ({
//     postNewAnswer : (quiz_id, answer) => {
//         dispatch(postNewAnswer(quiz_id, answer))
//     },
//     patchAnswer : (answer_id, newData) => {
//         dispatch(patchAnswer(answer_id, newData))
//     }
// })

// export default connect(null, mapDispatchToProps)(IntegratedPredictionBoard);

export default IntegratedPredictionBoard