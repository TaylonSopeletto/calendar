import React from 'react'
import { Container, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CalendarThumb = ({ title, role, plus, theme }) => {
    return (
        <Container theme={theme}>

            {
                plus ?

                    <i><FontAwesomeIcon icon={faPlusCircle} /></i>

                    :
                    <>
                        <Title theme={theme}>{title}</Title>
                        <p>role: {role === 'ROLE_MASTER' ? 'admin' : 'guest'}</p>
                    </>
            }
        </Container >
    )
}

export default CalendarThumb;