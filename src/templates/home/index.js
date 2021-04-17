import Calendar from '../../components/calendar'
import Details from '../../components/details'
import Header from '../../components/header'
import { Container } from './styles.js'
import { useParams } from 'react-router-dom'

const Home = () => {

    const { id } = useParams()

    return (
        <>
            <Header></Header>
            <Container>
                <Calendar id={id}></Calendar>
                <Details calendarId={id}></Details>
            </Container>
        </>
    )
}



export default Home;