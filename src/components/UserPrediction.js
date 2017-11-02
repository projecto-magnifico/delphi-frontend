import React from 'react';
import { Box, Image } from 'bloomer';

class UserPrediction extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                
                    <Box className="innerBox">
                        <p>{this.props.name ? this.props.name : 'You'}:</p>
                        <h1>{this.props.prediction}</h1>
                    </Box>
              
            </div>
        )
    }
}

export default UserPrediction;