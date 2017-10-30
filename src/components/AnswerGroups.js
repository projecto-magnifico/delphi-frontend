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
                    <Box className="tile answerGroup" >
                        <h3>Mariano Rajoy will regisn as prime-minister</h3>
                    </Box>
                    <Box className="tile answerGroup" >
                        <h3>Spanish government will block Catalonian independence</h3>
                    </Box>
                    <Box className="tile answerGroup">
                        <h3>Create new prediction</h3>
                    </Box>  
                </div>    
            </div>
        )
    }
}

export default AnswerGroups