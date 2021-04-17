import { useContext } from 'react'
import { Container } from './styles'
import { DarkModeCtx } from '../../context/DarkModeCtx'

const InputGroup = ({ children }) => {

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

    return (
        <Container theme={darkMode}>
            {children}
        </Container>
    )
}

export default InputGroup