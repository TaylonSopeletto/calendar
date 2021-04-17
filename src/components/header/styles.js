import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 80px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
    background-color: ${props => (props.theme === true ? 'var(--primary)' : 'var(--light-primary)')};
    
    a{
        text-decoration: none;
    }
    gap: 30px;

    h1{
        color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
        font-weight: lighter;
    }
`

export const SearchBar = styled.div`
    margin-left: auto;
    justify-self: flex-end;

    input{
        padding: 10px 20px;
        background-color: ${props => (props.theme === true ? 'var(--input)' : 'var(--light-input)')};
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Avatar = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
`

export const DarkMode = styled.div`
    
    background-color: transparent;
    color: ${props => (props.theme === true ? '#e5de44' : '#ef810e')};
    font-size: 24px;
    &:hover{
        cursor: pointer;
    }
`

