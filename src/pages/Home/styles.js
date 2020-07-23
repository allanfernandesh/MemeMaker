import styled from 'styled-components';

export const Wrapper =  styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Card = styled.div`
    background: #fff;
    width: 550px;
    border-radius: 8px;
    padding: 20px;
    margin-top: 15px;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-size: 22px;
        color: #392D2D;
        margin-bottom: 10px;
    }
    button {
        margin-top: 15px;
        font-size: 14px;
    }
`;

export const Templates = styled.div`
    width: 100%;
    height: 135px;
    background: #eee;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;

    button {
        background: transparent;
        margin-right: 10px;
        border: 4px solid transparent;

        &.selected {
            border-color: #4395D8;
        }

        img {
            width: 120px;
            height: 120px;
        }
    }
`;

export const Form = styled.form`
    input {
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #dbdbdb;
        padding: 0 15px;
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
        width: 100%;
        height: 40px;
        border: 0;
        border-radius: 8px;
        background: #4395D8;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        transition: background 0.2s ease-in;
        

        &:hover {
            background:#3672A3;
        }
`;