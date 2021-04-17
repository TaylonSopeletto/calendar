import Calendar from '../../components/calendar'
import Details from '../../components/details'
import Header from '../../components/header'
import { useState } from 'react'
import { Container } from './styles.js'
import { useParams } from 'react-router-dom'

const Home = () => {

    const now = new Date()

    const { id } = useParams()
    const [reload, setReload] = useState(0)
    const [month, setMonth] = useState(now.getMonth() + 1)

    return (
        <>
            <Header></Header>
            <Container>
                <Calendar month={month} setMonth={setMonth} reload={reload} setReload={setReload} id={id}></Calendar>
                <Details month={month} reload={reload} setReload={setReload} calendarId={id}></Details>
            </Container>
        </>
    )
}



export default Home;