import React from 'react';
import {Box} from 'bloomer';

class AnswerGroups extends React.Component {
    constructor(props) {
        super(props)
    }
 
    render() {
       
        return (
            <div>
                <div id="answerGroups" className="tile is-parent tile uk-card-hover uk-card-default">
                    {this.props.answerOptions.map(answerOption => {
                        return (
                           <Box className="tile answerGroup uk-card-default" >
                        <h2>Did you mean...</h2>
                        <h3>{answerOption}</h3>
                            </Box>
                        )
                    })}
                    <Box className="tile answerGroup uk-card-default">
                        <h3>Create new prediction</h3>
                    </Box>
                </div>    
            </div>
        )
    }
}

export default AnswerGroups