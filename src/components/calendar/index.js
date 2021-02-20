import React, { useState } from 'react'
import { Container, Day, Header, Body } from './styles'
import firebase from '../../firebase'
import useCalendar from '../../hooks/useCalendar'
import Modal from '../modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { uuid } from 'uuidv4'
import { convertMonth } from '../../utils'

const Calendar = () => {

    const now = new Date()

    const [year, setYear] = useState(now.getFullYear())
    const [month, setMonth] = useState(now.getMonth() + 1)
    const [modal, setModal] = useState(false)
    const [currentDay, setCurrentDay] = useState()
    const { days } = useCalendar(year, month)

    const createPin = (day, info) => {
        firebase.database().ref(`teste/`).push({
            date: `${year}-${day}-${month}`,
            title: info.title,
            description: info.description
        })

        setModal(false)
    }


    const increaseMonth = () => {
        if (month < 11) {
            setMonth(month + 1)
        } else {
            setYear(year + 1)
            setMonth(1)
        }
    }

    const decreaseMonth = () => {
        if (month < 2) {
            setMonth(11)
            setYear(year - 1)
        } else {
            setMonth(month - 1)
        }
    }

    const onClickDay = day => {
        setModal(true)
        setCurrentDay(day)
    }

    return (
        <Container>
            <Header>
                <button onClick={decreaseMonth}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <p>{convertMonth(month)} - {year}</p>
                <button onClick={increaseMonth}><FontAwesomeIcon icon={faArrowRight} /></button>
            </Header>
            <Body>
                {
                    days.map((days, i) =>
                        <Day day={days.day} onClick={() => onClickDay(days.day)} pin={days.pin} key={i}>{days.day}</Day>
                    )
                }
            </Body>
            {
                modal &&
                <Modal onConfirm={(info) => createPin(currentDay, info)} onClose={() => setModal(false)} />
            }
        </Container>
    )
}

export default Calendar;