import React, { useState, useEffect } from 'react'
import { Container, View, Header, Body } from './styles'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import InputGroup from '../inputGroup'


const Modal = ({ onClose, onConfirm, type, dayInfo }) => {

    const [info, setInfo] = useState({
        title: dayInfo.name,
        description: dayInfo.description
    })

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost/api/plan/find.php?id=3144a86c-0c83-428d-8086-021994c8dd06',
            headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYjcwZGU3Ni0wNTg4LTRkOWMtOGIyMS0xNjQyNDk4NzYyZTQifQ==.2yZCxWpYimEhRMHEhgx9+dGksY/ZdUns4+hKnEH1Qu0=' }
        })
    }, [])

    return (
        <Container>
            <View>
                <Header>
                    {
                        type === 'merge' &&
                        <h2>Add Schedule</h2>
                    }

                    {
                        type === 'remove' &&
                        <h2>Remove {dayInfo.id}</h2>
                    }
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