import { useState, useContext } from 'react'
import Header from '../../components/header'
import InputGroup from '../../components/inputGroup'
import { Body, Form, Title, Footer } from './styles'
import { register } from '../../fetch/accounts'
import { useHistory } from "react-router-dom"
import { DarkModeCtx } from '../../context/DarkModeCtx'


const Login = () => {

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

    let history = useHistory()

    const [info, setInfo] = useState({
        email: '',
        password: ''
    })

    const submitRegister = () => {
        register({ email: info.email, password: info.password })
            .then(result => {
                if (result.data) {
                    localStorage.setItem('@calendar-token', `Bearer ${result.data}`)
                    history.push('/login')
                }
            })
    }

    return (
        <>
            <Header />
            <Body>
                <Form>
                    <Title theme={darkMode}>Register</Title>
                    <InputGroup>
                        <>
                            <label>E-mail:</label>
                            <input onChange={e => setInfo({ ...info, email: e.target.value })} value={info.title}></input>
                        </>
                    </InputGroup>

                    <InputGroup>
                        <>
                            <label>Password:</label>
                            <input type="password" onChange={e => setInfo({ ...info, password: e.target.value })} value={info.title}></input>
                        </>
                    </InputGroup>
                    <InputGroup>
                        <>
                            <label>Password confirmation:</label>
                            <input type="password" onChange={e => setInfo({ ...info, password: e.target.value })} value={info.title}></input>
                        </>
                    </InputGroup>

                    <InputGroup>
                        <button onClick={() => submitRegister()}>Register</button>
                    </InputGroup>
                    <Footer theme={darkMode}>Taylon Studios (c) 2021</Footer>
                </Form>
            </Body>
        </>
    )
}



export default Login;