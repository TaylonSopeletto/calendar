import React, { useState } from 'react'
import { Container, View, Header, Body } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InputGroup from '../inputGroup'


const Modal = ({ onClose, onConfirm }) => {

    const [info, setInfo] = useState({
        title: '',
        description: ''
    })

    return (
        <Container>
            <View>
                <Header>
                    <h2>Add Schedule</h2>
                    <button onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button>
                </Header>
                <Body>
                    <InputGroup>
                        {
                            <>
                                <label>Title:</label>
                                <input onChange={e => setInfo({ ...info, title: e.target.value })} value={info.title}></input>
                            </>
                        }
                    </InputGroup>

                    <InputGroup>
                        {
                            <>
                                <label>Description:</label>
                                <input onChange={e => setInfo({ ...info, description: e.target.value })} value={info.description}></input>
                            </>
                        }
                    </InputGroup>

                    <InputGroup>
                        {
                            <button onClick={() => onConfirm(info)} >Submit</button>
                        }
                    </InputGroup>
                </Body>
            </View>
        </Container>
    )
}

export default Modal