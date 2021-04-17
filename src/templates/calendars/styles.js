import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, calc(calc(100% - 30px) / 4));
    padding: 30px;
    gap: 10px;
    flex-wrap: wrap;
    a{
        text-decoration: none;
    }

    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(2, calc(50% - 5px));
    }
    
`

export const Plus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    
    background-color: ${props => (props.theme === true ? 'var(--primary)' : 'var(--light-primary)')};
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    font-size: 32px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
    &:hover{
        background-color: ${props => (props.theme === true ? 'var(--tertiary)' : 'var(--light-tertiary)')};
        cursor: pointer;
    }
    
`