import React from 'react'
import './css/NewsCard.css'
import {Label, Control, TextArea, Field, Modal, ModalBackground, ModalContent, ModalClose, ModalCardBody, Notification} from 'bloomer';


class Prediction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive : true 
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
            <div className="tile">
                <i onClick={this.displayInfo} className="fa fa-info-circle" aria-hidden="true"></i>
                <Modal id="predictionInfo" isActive={this.state.modalActive}>
                    <ModalBackground />
                        <ModalContent>
                    {/* Any other Bulma elements you want */}
                            <ModalCardBody id="modalBody">
                                    <i onClick={this.displayInfo} className="fa fa-times tile is-3" aria-hidden="true"></i>
                                <h1>Making a prediction</h1>
                                <Notification ></Notification>
                                {/* <Notification className="notification"> </Notification>
                                <Notification className="notification"> </Notification> */}
                            </ModalCardBody>
                        </ModalContent>
                    {/* <ModalClose /> */}
                </Modal>
                <Field>
                    <Label>What happens next...</Label>
                    <Control>
                        <div className="predictionText">
                            <TextArea  placeholder={'Prediction here'} />
                        </div>    
                    </Control>
                </Field>         
            </div>
        )
    }
}

export default Prediction