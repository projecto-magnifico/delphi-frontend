import React from 'react';
import { Box, Image } from 'bloomer';

class UserPrediction extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Box>
                    <Box className="innerBox">
                        <Image isSize='48x48' src='https://via.placeholder.com/48x48' />
                        <p>{this.props.name}</p>
                    </Box>
                    <Box className="innerBox">
                        <h1>{this.props.prediction}</h1>
                    </Box>
                </Box>
            </div>
        )
    }
}

export default UserPrediction;