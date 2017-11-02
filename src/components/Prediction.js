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
            <div className="tile All">
                <i onClick={this.displayInfo} className="fa fa-info-circle" aria-hidden="true"></i>
                <Modal id="predictionInfo" isActive={this.state.modalActive}>
                    <ModalBackground />
                    <ModalContent>
                        <ModalCardBody id="modalBody">
                            <i onClick={this.displayInfo} className="fa fa-times tile is-3" aria-hidden="true"></i>
                            <h1>Making a prediction</h1>
                            <Notification className="notification">Make predictions short and relevant.</Notification>
                            <Notification className="notification">Use present continuous tense.</Notification>
                        </ModalCardBody>
                    </ModalContent>
                </Modal>
                <Field>
                    <Label>What happens next...</Label>
                    <Control>
                        <div className="predictionText">
                            <TextArea onChange={this.handleChange} value={this.state.userPrediction} id="userPrediction" placeholder={'Prediction here'} />
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