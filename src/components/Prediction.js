import React from 'react'
import './css/NewsCard.css'
import {Label, Button, Control, TextArea, Field, Modal, ModalBackground, ModalContent, ModalClose, ModalCardBody, Notification} from 'bloomer';


class Prediction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive : false
        }
        this.displayInfo = this.displayInfo.bind(this);
    }

    displayInfo () {
     
       const newModalActive = !this.state.modalActive;
       this.setState({
           modalActive: newModalActive
       })
    }

    render() {
       
        return (
            <div className="tile All">
                <i onClick={this.displayInfo} className="fa fa-info-circle" aria-hidden="true"></i>
                {/* <PredictionInfo/> */}
                <Modal id="predictionInfo" isActive={this.state.modalActive}>
                    <ModalBackground />
                        <ModalContent>
                            <ModalCardBody id="modalBody">
                                    <i onClick={this.displayInfo} className="fa fa-times tile is-3" aria-hidden="true"></i>
                                <h1>Making a prediction</h1>
                                <Notification className="notification"></Notification>
                                <Notification className="notification"></Notification>
                                <Notification className="notification"></Notification>
                            </ModalCardBody>
                        </ModalContent>
                </Modal>
                <Field>
                    <Label>What happens next...</Label>
                    <Control>
                        <div className="predictionText">
                            <TextArea  placeholder={'Prediction here'} />
                        </div>    
                    </Control>
                <Button onClick={this.props.showAnswerOptions}>Check prediction</Button>
                </Field>         
            </div>
        )
    }

}

export default Prediction