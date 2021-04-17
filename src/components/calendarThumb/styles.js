import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 200px;
    
    background-color: ${props => (props.theme === true ? 'var(--input)' : 'var(--light-primary)')};
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
    i{
        color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
        font-size: 32px;
    }

    &:hover{
        background-color: ${props => (props.theme === true ? 'var(--tertiary)' : 'var(--light-tertiary)')};
        cursor: pointer;
    }
    p{
        color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    }
`

export const Title = styled.div`
    font-size: 18px;
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    font-weight: bold;
`

