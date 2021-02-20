import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4em;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
`

export const Day = styled.button`
    border: none;
    outline: none;
    background-color: ${props => (props.pin ? "#f5f5f5" : "white")};
    color: ${props => (props.pin ? "black" : "black")};
    &:hover{
        background-color: #f5f5f5;
        color: black;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e8e8e8;
    color: black;
    height: 4em;
    button{
        padding: 10px;
        border: none;
        background-color: transparent;
        outline: none;
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