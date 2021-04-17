import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 30em;
    gap: 20px;
`

export const Title = styled.p`
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    font-size: 22px;
    font-weight: lighter;
`

export const Footer = styled.p`
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    
`