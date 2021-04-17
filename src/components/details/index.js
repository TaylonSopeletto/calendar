import React, { useContext, useEffect } from 'react'
import { Container, Tab, Tabs, Header, Body, Item } from './styles'
import { DarkModeCtx } from '../../context/DarkModeCtx'
import { getByDate } from '../../fetch/plans'

const Details = ({ calendarId }) => {

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)

    useEffect(() => {
        getByDate({
            calendarId,
            date: '2021-04-01'
        })
            .then(result => console.log(result.data))
    }, [])

    return (
        <Container>
            <Header theme={darkMode}>
                <Tabs theme={darkMode}>
                    <Tab theme={darkMode}>Events</Tab>
                </Tabs>
            </Header>
            <Body theme={darkMode}>
                <Item theme={darkMode}>
                    <p>04/09/2020</p>
                    <p>Taylon's aniversary</p>
                </Item>

                <Item theme={darkMode}>
                    <p>04/09/2020</p>
                    <p>Taylon's aniversary</p>
                </Item>
            </Body>
        </Container>
    )
}

export default Details