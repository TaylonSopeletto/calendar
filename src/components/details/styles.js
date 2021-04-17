import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4em;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
    width: 420px;
    
`

export const Header = styled.div`
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.1);
    
`

export const Tabs = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => (props.theme === true ? 'var(--primary)' : 'var(--light-primary)')};

`

export const Tab = styled.button`
    background-color: transparent;
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    font-weight: bold;
    font-size: 16px;
    padding: 20px;
`

export const Body = styled.div`
    background-color: ${props => (props.theme === true ? 'var(--primary)' : 'var(--light-primary)')};
    

`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => (props.theme === true ? 'var(--text)' : 'var(--light-text)')};
    padding: 20px;
    font-size: 14px;
   

`