import Calendar from '../../components/calendar'
import Header from '../../components/header'
import { Container } from './styles.js'

const Home = () => {

    return (
        <>
            <Header></Header>
            <Container>

                <Calendar></Calendar>
            </Container>
        </>
    )
}



export default Home;