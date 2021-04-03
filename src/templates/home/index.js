import Calendar from '../../components/calendar'
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
            </Container>
        </>
    )
}



export default Home;