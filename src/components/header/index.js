import React, { useContext, useEffect } from 'react'
import { Container, SearchBar, Profile, Avatar, DarkMode } from './styles'
import { DarkModeCtx } from '../../context/DarkModeCtx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

    useEffect(() => {
        document.body.style = `background-color: ${darkMode === true ? 'var(--secundary)' : 'var(--light-secundary)'}`
    }, [darkMode])

    return (
        <Container theme={darkMode}>
            <a href="/calendars"><h1>Calendar</h1></a>

            <SearchBar theme={darkMode}>
                <input placeholder="search"></input>
            </SearchBar>
            <Profile>
                <DarkMode theme={darkMode} onClick={() => setDarkMode(!darkMode)}><FontAwesomeIcon icon={darkMode ? faSun : faMoon} /></DarkMode>
                <Avatar />
            </Profile>
        </Container>
    )
}

export default Header;