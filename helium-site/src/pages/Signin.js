import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Modal from 'react-modal';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: this.open
        };
    }


    openmodal = () => {
        this.setState({isOpen: true});
    }

    closemodal = () => {
        this.setState({isOpen: false});
    }

    render() {
        return(
            <div>
                <Modal isOpen={this.state.isOpen}>
                    <Container style={
                        {
                            display: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '20px'
                        }
                    }>
                        <Row>
                            <Col style={{color: '#15cdfc'}}><h1>Sign In</h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                <form>
                                    <label style={{background: 'black', fontSize: '28px', position: 'absolute', left: '-7rem', color: '#15cdfc'}} for={'username'}>
                                        Username 
                                    </label>
                                    <input type={'text'} name={'username'} placeholder={'Type Here ....'} style={{padding: '9px 20px'}} size={'50'}/>
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <form>
                                    <label style={{background: 'black', fontSize: '28px', position: 'absolute', left: '-6rem', color: '#15cdfc'}} for={'username'}>
                                        Password 
                                    </label>
                                    <input type={'password'} name={'username'} placeholder={'Type Here ....'} style={{padding: '9px 20px'}} size={'50'}/>
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <button onClick={this.closemodal}>Submit</button>
                        </Row>
                    </Container>
                </Modal>
            </div>
        )
    }
}

export default Signin