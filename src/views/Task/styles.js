import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`
export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative {
        opacity: 0.5;
    }

    button {
        border: 0;
        background: none;

        &:focus {
            outline: none;
        }
    }

    img {
        width: 40px;
        height: 40px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    
`

export const Input = styled.div`

    width: 100%;

    display: flex;
    flex-direction:column;
    margin: 20px 0;

    span {
        color: #c6c6c6;
        margin-bottom: 5px;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B28;
    }

    img {
        width: 20px;
        height: 20px;
        position: relative;
        left: 90%;
        bottom: 40px;
    }
`

export const TextArea = styled.div`
    width: 100%;

    display: flex;
    flex-direction:column;
    margin: 20px 0;

    span {
        color: #c6c6c6;
        margin: 5px 0;
        
    }

    textarea {
        font-size: 16px;
        border: 1px solid #EE6B28
    }
    
`
export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        text-transform: uppercase;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;

        color: #EE6B28;
        font-weight: bold;
        font-size: 18px;

    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button {
    background: #EE6B28;
    width: 100%;
    border: none;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    padding: 20px;

    border-radius: 30px;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
    }
`
