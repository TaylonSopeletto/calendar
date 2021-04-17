import { useEffect, useState, useContext } from 'react'
import Header from '../../components/header'
import CalendarThumb from '../../components/calendarThumb'
import { Container, Plus } from './styles'
import { find } from '../../fetch/calendars'
import { Link } from "react-router-dom"
import Modal from '../../components/baseModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { DarkModeCtx } from '../../context/DarkModeCtx'

const Home = () => {

    const [calendars, setCalendars] = useState([])
    const [modal, setModal] = useState(false)
    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

    const reloadCalendars = () => {
        find()
            .then(result => setCalendars(result.data))
    }

    useEffect(() => {
        reloadCalendars()
    }, [])

    return (
        <>
            <Header></Header>
            <Container>
                {
                    calendars.length > 0 && calendars.map((calendar, i) =>
                        <Link to={`/calendar/${calendar.id}`} >
                            <CalendarThumb theme={darkMode} role={calendar.role} title={calendar.name} />
                        </Link>
                    )
                }
                <Plus theme={darkMode} onClick={() => setModal(true)}><FontAwesomeIcon icon={faPlusCircle} /></Plus>
                {
                    modal && <Modal theme={darkMode} reloadCalendars={reloadCalendars} onClose={() => setModal(false)} />
                }
            </Container>
        </>
    )
}



export default Home;