import React, { useState } from 'react'
import { Container, Day, Header, Body } from './styles'
import axios from 'axios'
import useCalendar from '../../hooks/useCalendar'
import Modal from '../modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { uuid } from 'uuidv4'
import { convertMonth } from '../../utils'

const Calendar = ({ id }) => {

    const now = new Date()

    const [year, setYear] = useState(now.getFullYear())
    const [month, setMonth] = useState(now.getMonth() + 1)
    const [modal, setModal] = useState(false)
    const [reload, setReload] = useState(0)
    const [currentDay, setCurrentDay] = useState()
    const [modalType, setModalType] = useState('')
    const [dayInfo, setDayInfo] = useState('')
    const { days } = useCalendar(year, month, id, reload)

    const createPin = (day, info) => {
        axios({
            method: 'POST',
            url: 'http://localhost/api/plan/merge.php',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYjcwZGU3Ni0wNTg4LTRkOWMtOGIyMS0xNjQyNDk4NzYyZTQifQ==.2yZCxWpYimEhRMHEhgx9+dGksY/ZdUns4+hKnEH1Qu0='
            },
            data: {
                name: info.title,
                description: info.description,
                date: `${year}-${month}-${day}`,
                calendarId: "3144a86c-0c83-428d-8086-021994c8dd06"
            }
        })
            .then(result => {
                setModal(false)
                setReload(reload + 1)
            })

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

    const onClickDay = (day, type, info) => {
        setModalType(type)
        setDayInfo(info)
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
                        <Day day={days.day}
                            onClick={() => onClickDay(days.day, days.pin ? 'remove' : 'merge', { id: days.id, name: days.name, description: days.description, date: days.date })}
                            pin={days.pin}
                            key={i}>
                            {days.day}
                        </Day>
                    )
                }
            </Body>
            {
                modal &&
                <Modal dayInfo={dayInfo} type={modalType} onConfirm={(info) => createPin(currentDay, info)} onClose={() => setModal(false)} />
            }
        </Container>
    )
}

export default Calendar;