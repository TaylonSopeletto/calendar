import React, { useState, useContext } from 'react'
import { Container, Day, Header, Body } from './styles'
import axios from 'axios'
import useCalendar from '../../hooks/useCalendar'
import Modal from '../modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { uuid } from 'uuidv4'
import { convertMonth } from '../../utils'
import { DarkModeCtx } from '../../context/DarkModeCtx'

const Calendar = ({ id }) => {

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

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
                'Authorization': localStorage.getItem('@calendar-token')
            },
            data: {
                name: info.title,
                description: info.description,
                date: `${year}-${month}-${day}`,
                calendarId: id
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
        <Container theme={darkMode}>
            <Header theme={darkMode}>
                <button onClick={decreaseMonth}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <p>{convertMonth(month)} - {year}</p>
                <button onClick={increaseMonth}><FontAwesomeIcon icon={faArrowRight} /></button>
            </Header>
            <Body>

                {
                    days.map((days, i) =>
                        <Day theme={darkMode}
                            day={days.day}
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