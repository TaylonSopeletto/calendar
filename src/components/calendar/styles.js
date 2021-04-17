import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4em;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
`

export const Day = styled.button`
    border: none;
    outline: none;
    background-color: ${props => {

        if (props.theme === true && props.pin) {
            return 'var(--tertiary)'
        }

        if (props.theme === true) {
            return 'var(--primary)'
        }

        if (props.theme !== true && props.pin) {
            return 'var(--light-tertiary)'
        }

        if (props.theme !== true) {
            return 'var(--light-primary)'
        }


    }};
    
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    &:hover{
        background-color: ${props => (props.theme === true ? 'var(--tertiary)' : 'var(--light-tertiary)')};
        color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => (props.theme === true ? 'var(--primary)' : 'var(--light-primary)')};
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    height: 4em;
    font-weight: bold;
    button{
        padding: 20px;
        border: none;
        background-color: transparent;
        outline: none;
        color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
        &:hover{
            color: white;
            cursor: pointer;
        }
    }
`

export const Body = styled.div`
    display: grid;
    
    grid-template-rows: repeat(5, 60px);
    grid-template-columns: repeat(7, 60px);
`