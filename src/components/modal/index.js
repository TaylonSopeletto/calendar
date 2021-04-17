import React, { useState, useEffect, useContext } from 'react'
import { Container, View, Header, Body } from './styles'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InputGroup from '../inputGroup'
import { useParams } from 'react-router-dom'
import { DarkModeCtx } from '../../context/DarkModeCtx'

const Modal = ({ onClose, onConfirm, type, dayInfo }) => {

    const { id } = useParams()

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

    const [info, setInfo] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost/api/plan/find.php?id=${id}`,
            headers: {
                'Authorization': localStorage.getItem('@calendar-token')
            },
        })
    }, [])

    return (
        <Container>
            <View theme={darkMode}>
                <Header theme={darkMode}>
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