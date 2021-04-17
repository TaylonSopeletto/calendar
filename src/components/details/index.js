import React, { useContext, useEffect, useState } from 'react'
import { Container, Tab, Tabs, Header, Body, Item } from './styles'
import { DarkModeCtx } from '../../context/DarkModeCtx'
import { find } from '../../fetch/plans'
import { convertDate } from '../utils/'

const Details = ({ calendarId, reload, month }) => {

    const [darkMode, setDarkMode] = useContext(DarkModeCtx)
    const [days, setDays] = useState([])

    useEffect(() => {
        find({
            calendarId,
        })
            .then(result => {
                const filteredDays = result.data.filter(item => {

                    const [year, dateMonth, day] = item.date.split('-')
                    if (Number(dateMonth) === month) {
                        return day
                    }
                })

                setDays(filteredDays)
            })
    }, [reload, month])

    return (
        <Container>
            <Header theme={darkMode}>
                <Tabs theme={darkMode}>
                    <Tab theme={darkMode}>Events</Tab>
                </Tabs>
            </Header>
            <Body theme={darkMode}>
                {
                    days.map((day, i) =>
                        <Item key={i} theme={darkMode}>
                            <p>{convertDate(day.date)}</p>
                            <p>{day.name}</p>
                        </Item>
                    )
                }
            </Body>
        </Container>
    )
}

export default Details