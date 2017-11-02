import React from 'react'
import './css/NewsCard.css'
import { Label, Button, Control, TextArea, Field, Modal, ModalBackground, ModalContent, ModalClose, ModalCardBody, Notification } from 'bloomer';


class Prediction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            userPrediction: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    displayInfo() {

        const newModalActive = !this.state.modalActive;
        this.setState({
            modalActive: newModalActive
        })
    }

    render() {

        return (
            <div className="tile">
                <Field>
                    <Control>
                        <div className="predictionText">
                            <TextArea onChange={this.handleChange} value={this.state.userPrediction} id="userPrediction" placeholder={'What happens next?'} />
                        </div>
                    </Control>
                    <Button onClick={this.handleClick}>Check prediction</Button>
                </Field>
            </div>
        )
    }

    handleClick (e) {
        e.preventDefault()
        this.props.showAnswerOptions(this.state.userPrediction)
    }

    handleChange(event) {
        const newStr = event.target.value;
        this.setState({
            userPrediction: newStr
        })
    }
}

export default Prediction