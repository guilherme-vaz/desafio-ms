import styled from "styled-components";
// import { Colors } from "../../Resources/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 87px auto auto auto;
    width: 1144px;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    color: #5E3E7B;
    width: 100%;
    padding: 26px 32px;
    border-radius: 20px;
    background-color: #F7F7F9;

    button {
        width: 118px;
        height: 48px;
        background-color: #3B3045;
        border: none;
        border-radius: 15px;
        color: white;
        font-family: 'Poppins';
        font-size: 20px;
        font-weight: 600;
        margin-left: 100px;
    }

`;

export const Header = styled.h1`
    margin-top: 80px;
    font-size: 64px;
    font-weight: 700;
    font-family: 'Poppins';
    background: linear-gradient(to right, #E36C86, #B875AE, #9D7BC7, #7E82E3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    p {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #3B3045;
    }
`;

export const Subtitle = styled.p`
    font-family: 'Poppins';
    font-size: 24px;
    color: #3B3045;
    opacity: 80%;
    margin-top: 32px;
    line-height: 40px;

`;