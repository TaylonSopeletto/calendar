import React, { useState, useEffect, useContext } from 'react'
import { Container, View, Header, Body } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InputGroup from '../inputGroup'
import { merge } from '../../fetch/calendars'
import { DarkModeCtx } from '../../context/DarkModeCtx'

const Modal = ({ onClose, reloadCalendars, theme }) => {

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

    const [payload, setPayload] = useState({
        name: '',
        description: ''
    })

    const onConfirm = () => {
        merge({ ...payload })
            .then(result => {
                onClose()
                reloadCalendars()
            })
    }

    return (
        <Container>
            <View theme={darkMode}>
                <Header theme={darkMode}>
                    <h2>Add Calendar</h2>
                    <button onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button>
                </Header>
                <Body>
                    <InputGroup>
                        {
                            <>
                                <label>Name:</label>
                                <input onChange={e => setPayload({ ...payload, name: e.target.value })} value={payload.name}></input>
                            </>
                        }
                    </InputGroup>

                    <InputGroup>
                        {
                            <>
                                <label>Description:</label>
                                <input onChange={e => setPayload({ ...payload, description: e.target.value })} value={payload.description}></input>
                            </>
                        }
                    </InputGroup>

                    <InputGroup>
                        {
                            <button onClick={() => onConfirm()}>Create calendar</button>
                        }
                    </InputGroup>
                </Body>
            </View>
        </Container>
    )
}

export default Modal