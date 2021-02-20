import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    button{
        background-color: blue;
        width: 50%;
        height: 50px;
        color: white;
        justify-self: flex-end;
        margin-top: auto;

        &:hover{
            cursor: pointer;
            box-shadow: 0px 0px 2px 2px rgba(0,0,0, 0.15);
        }

    }
    

    label{
        margin-bottom: 5px;
    }

    input{
        margin-bottom: 10px;
        border: 1px solid #ddd;
        height: 40px;
        padding: 10px;
        width: 100%;
        &:focus{
            border: 1px solid #bbb;
            box-shadow: 0px 0px 2px 2px rgba(0,0,0, 0.05);
        }
    }
`