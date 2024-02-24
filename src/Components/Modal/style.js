import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContent = styled.div`
    width: 1100px;
    height: 900px;
    overflow-y: auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    
`;

export const Header = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    background-color: #EEECFF;
    padding: 40px;
    border-radius: 8px 8px 0px 0px;

    .hours {
        border: solid 1px #5E3E7B;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 400;
        color: #5E3E7B;
        background-color: transparent;
        padding: 12px 16px;
        border-radius: 10px;
        width: fit-content;
    }

    h1 {
        font-family: 'Inter';
        font-size: 64px;
        font-weight: 700;
        color: #5E3E7B;
        margin-top: 16px;
    }

    p {
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 400;
        color: #5E3E7B;
        text-align: justify;
        margin-top: 20px;
        line-height: 20px;
    }

    img {
        width: 300px;
        height: 280px;
    }

    @media(max-width: 800px) {

        padding: 60px;
        
        h1 {
            font-size: 32px;
        }
        p {
            height: 100px;
            overflow: hidden; 
        }
        
    }

    @media(max-width: 480px){
        padding: 20px;

        img {
            display: none;
        }
    }
`;

export const Schedule = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F7F9;
    margin: 30px 40px;
    padding-left: 32px;
    padding-top: 24px;
    padding-bottom: 32px;
    border-radius: 6px;

    h1 {
        font-family: 'Poppins';
        font-size: 32px;
        font-weight: 600;
        color: #5E3E7B;
    }

    .lists {
        display: flex;
        gap: 84px;
        margin-left: 16px;
        
        ul {
            list-style-type: disc;
        }

        li {
            font-family: 'Poppins';
            font-size: 16px;
            font-weight: 400;
            color: #5E3E7B;
            margin-top: 16px;
        }
    }

    @media(max-width: 800px) {
        padding-right: 20px;
    }

    @media(max-width: 480px) {
        .lists {
            flex-direction: column;
            gap: 12px;
        }
    }
`;


export const GetStarted = styled.div`
    padding-top: 24px;
    padding-left: 40px;
    display: flex;
    gap: 80px;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding-bottom: 40px;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 433px;

    h1 {
        font-family: 'Poppins';
        font-size: 32px;
        font-weight: 600;
        color: #5E3E7B;
        margin-bottom: 16px;
    }

    input {
        width: 433px;
        background-color: #F7F7F9;
        border-radius: 8px;
        border: none;
        padding: 16px 20px;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 500;
        color: RGBA(94, 62, 123, 0.5);
        margin-bottom: 16px;
    }

    button {
        width: 473px;
        background-color: #F7F7F9;
        border-radius: 6px;
        border: none;
        padding: 11px 0px;
        font-family: 'Poppins';
        font-size: 24px;
        font-weight: 500;
        color: white;
        margin-bottom: 16px;
        cursor: pointer;
        background: linear-gradient(to right, #EF7137, #E96162, #E55388);
    }

    @media(max-width: 480px){
        h1 {
            font-size: 24px;
        }

        input {
            width: 350px;
        }

        button {
            width: 390px;
        }
    }
`;

export const ProfsContainer = styled.div`
    display: flex;
    flex-direction: column;

    .profs {
        display: flex;
        gap: 50px;
        margin-top: 16px;
    }

    h1 {
        font-family: 'Poppins';
        font-size: 32px;
        font-weight: 600;
        color: #5E3E7B;
        margin-bottom: 8px;
    }

    @media(max-width: 480px) {
        .profs {
            gap: 10px;
        }

        h1 {
            font-size: 24px;
        }
    }
`;

export const ProfsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
    }

    h1 {
        font-family: 'Inter';
        font-size: 20px;
        font-weight: 700;
        color: #3B3045;
    }

    p {
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        color: #3B3045;
        text-align: center;
        width: 213px;
        line-height: 20px;
    }

    span {
        font-weight: 700;
    }

    @media(max-width: 480px){
        gap: 8px;

        h1 {
            font-size: 16px;
        }

        p {
            width: 80px;
        }
    }
`;

export const CloseButton = styled.div`
    position: fixed;
    top: 120px;
    right: 445px;
    cursor: pointer;
    opacity: 70%;

    @media(max-width: 1900px) {
        display: flex;
        top: 25px;
        right: 250px;
    }

    @media(max-width: 800px) {
        top: 40px;
        right: 32px;
    }
`;
