import React from 'react'

class LatestDevelopmentComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default LatestDevelopmentComponent