import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;

    display: flex;
`
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width:130px;
        height: auto
    }
`
export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
    &:hover {
        color: #EE6B26;
    }

    }
    #notification {
        background: none;
        border: none;
        cursor: pointer;
        &:focus {
            outline: none;
        }

        img {
            width: auto;
            height: 25px;
        }

        span {
            background-color: #FFF;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px
        }

        a, button {
            color: #FFF;
            font-weight: bold;
            text-decoration: none;
            margin: 0 10px;
        }

        button {
            background: none;
            border: none;
        }

        &:hover {
            opacity: 0.5s;
        }
    }
    .dividir:after {
        content: '|';
        margin: 0 10px;
        color: #fff
    }

    button {
        font-size: 18px;
        border: 0;
        background: none;
        color: #FFF
    }
`