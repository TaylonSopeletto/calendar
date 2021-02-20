import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const View = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 50%;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0, 0.1);
`

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    border: none;
    outline: none;
    padding: 20px;

    h2{
        justify-self: flex-start;
        margin-right: auto;
    }

    button{
        background-color: transparent;
        &:hover{
            cursor: pointer;
        }
    }
`

export const Body = styled.div`
    display : flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
`