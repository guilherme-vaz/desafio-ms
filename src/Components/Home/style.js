import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 87px auto auto auto;
    width: 1144px;

    @media(max-width: 1000px){
        width: 800px;
    }

    @media(max-width: 480px){
        width: 400px;
    }
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
    

    @media(max-width: 800px) {
        gap: 12px;
        max-width: 90vw;

        button {
            margin-left: 0px;
        }
    }

    @media(max-width: 480px){
        width: 350px;
        flex-direction: column;
        justify-content: space-between;

        p, button {
            display:  ${({ open }) => (open ? 'block' : 'none')};
        }

        .menuHamburger {
            display: flex;
            width: 350px;
            justify-content: space-between;
            align-items: center;
        }
       
    }

`;

export const MenuHidden = styled.div`
    p,
    button {
        display: ${({ open }) => (open ? 'block' : 'none')};
        cursor: pointer;
    }

    @media(max-width: 480px){
        opacity: ${({ open }) => (open ? 1 : 0)};
        visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
        transition: opacity 0.3s ease-in-out;  /* Adiciona uma transição suave */
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 350px;
        background-color: #F7F7F9;

        p,
        button {
            display: ${({ open }) => (open ? 'block' : 'none')};
            cursor: pointer;
        }
    }
`;

export const HamburgerIcon = styled.div`

@media(max-width: 480px){
    display: flex;
    flex-direction: column;
    cursor: pointer;

    div {
        width: 30px;
        height: 4px;
        background-color: #5E3E7B;
        margin: 2px 0;
        border-radius: 4px;
        transition: 0.3s;

        &:first-child {
            transform: ${({ open }) => (open ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:last-child {
            transform: ${({ open }) => (open ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)')};
        }
    }
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
     @media(max-width: 800px) {
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-size: 48px;
    font-weight: 600;
    color: #3B3045;
    margin-top: 80px;
    text-align: ${(props) => props.textAlign};

    @media(max-width: 800px) {
        text-align: center;
    }
   

`;

export const Subtitle = styled.p`
    font-family: 'Poppins';
    font-size: 24px;
    color: #3B3045;
    opacity: 80%;
    margin-top: 32px;
    line-height: 40px;
    text-align: ${(props) => props.textAlign};

    @media(max-width: 800px) {
        text-align: center;
        width: 700px;
        margin-left: 32px;
    }

    @media(max-width: 480px) {
        width: 400px;
        font-size: 16px;
        line-height: 20px;
        margin-left: 12px;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:  ${(props) => props.gap};
    margin-top: 64px;

    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

export const BulletButton = styled.button`
    width: fit-content;
    height: 88px;
    border: #5E3E7B solid 2px;
    border-radius: 40px;
    color: #3B3045;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Poppins';
    padding: 20px 52px;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background: linear-gradient(to right, #EF7137, #E96162, #E55388);
        color: white;
        border: transparent;
        transition: all ease 0.3s;
    }

    &:nth-child(7) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background: linear-gradient(to right, #EF7137, #E96162, #E55388);
        color: white;
        border: transparent;
    }
`;

export const CourseContainer = styled.div`
    width: ${(props) => props.width};
    height: 466px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    align-items:  ${(props) => props.align};
    background-color: ${(props) => props.color};
    color: white;
    border: none;
    border-radius: 15px;
    font-family: 'Inter';
    background: ${(props) => props.bg};
    padding-left: ${(props) => props.pdLeft};

    h1 {
        font-size: 40px;
        font-weight: 700;
    }

    p {
        font-size: 24px;
        font-weight: 300;
        width: ${(props) => props.textWidth};
        text-align: ${(props) => props.textAlign};
        line-height: 35px;
    }

    .beforeTitle {
        font-weight: 500;
        font-size: 24px;
        line-height: 0px;
    }

    button {
        width: 441px;
        height: 76px;
        color: white;
        background-color: #3B3045;
        border: none;
        font-size: 20px;
        font-family: 'Poppins';
        font-weight: 500;
        border-radius: 20px;
        cursor: pointer;
    }

    @media(max-width: 480px) {
        width: 300px;
        height: fit-content;
        padding: 20px;

        h1 {
            font-size: 24px;
            font-weight: 700;
        }

        p {
            font-size: 16px;
            font-weight: 300;
            width: 300px;
            text-align: justify;
            line-height: 25px;
        }

        button {
            width: 280px;
            height: 56px;
            font-size: 16px;
            border-radius: 8px;
        } 

        .beforeTitle {
            display: none;
        }
    }

   
`;

export const CourseCard = styled.div`
    width: 562px;
    height: fit-content;
    background-color:  white;
    border-radius: 15px;
    border: solid black 2px;
    padding-bottom: 24px;
    cursor: pointer;

    &:hover {
        box-shadow:  2px 2px 2px 1px rgb(0 0 0 / 30%);
        transform: scale(1.02);
    }

    img {
        width: 100%;
        border-radius: 15px 15px 0px 0px;
    }

    .horas {
        opacity: 80%;
        width: fit-content;
        height: 40px;
        display: flex;
        align-items: center;

        color: #3B3045;
        background-color: transparent;
        padding: 2px 12px;

        margin-left: 32px;
        margin-top: 16px;
        margin-bottom: 16px;

        font-family: 'Poppins';
        font-size: 16px;
        border: solid #3B3045 2px;
        border-radius: 10px;
    }

    .titleStart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 32px;
        margin-left: 32px;
        margin-bottom: 24px;
        border: none;
        width: 90%;

        h1 {
            font-family: 'Inter';
            font-size: 32px;
            font-weight: 700;
            color: #3B3045;
        }

        button {
            border: none;
            background: linear-gradient(to right, #EF7137, #E96162, #E55388);
            color: white;
            font-family: 'Inter';
            font-size: 24px;
            padding: 8px 24px;
            border-radius: 25px;
            cursor: pointer;
        }
    }
    
    p {
        width: 498px;
        margin-left: 32px;
        text-align: justify;
        line-height: 20px;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 12px;
    }

    @media(max-width: 480px) {
        width: 362px;

        .horas {
            height: 20px;
            font-size: 12px;
        }

        .titleStart {
            gap: 16px; 
            margin-left: 20px;
            h1 {
                font-size: 24px;
             }
    
             button {
                background-color: red;
                font-size: 20px;
                padding: 4px 12px;
             }
        }

        p {
            width: 298px;
            margin-left: 32px;
            text-align: justify;
            line-height: 20px;
            font-weight: 400;
        }
    }

`;

export const TeacherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    img {
        width: 225px;
        height: 224px;
        border-radius: 50%;
    }

    h1 {
        font-family: 'Inter';
        font-size: 32px;
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
    
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 394px;
    padding: 24px 0px 24px 0px;
    background-color: #5E3E7B;
    border-radius: 15px;
    gap: 129px;
    margin-top: 80px;
    box-shadow:  0px 4px 4x rgb(0 0 0 / 25%);
    color: white;

    .info {
        display: flex;
        flex-direction: column;
        gap: 12px;

        p {
            font-family: 'Poppins';
            font-size: 20px;
            font-weight: 300;
        }

        h1 {
            font-family: 'Inter';
            font-weight: 700;
            font-size: 48px;
            line-height: 60px;
            text-transform: uppercase;
        }
    }
    
    .access {
        display: flex;
        flex-direction: column;
        gap: 24px;

        p {
            font-family: 'Poppins';
            font-size: 16px;
            font-weight:  500;
            text-align: center;
            width: 590px;
            line-height: 25px;
        }

        button {
            border: none;
            border-radius: 40px;
            background: linear-gradient(to right, #EF7137, #E96162, #E55388);
            font-family: 'Inter';
            font-size: 24px;
            font-weight: 700;
            padding: 24px 89px;
            color: white;
            cursor: pointer;
        }
        
    } 
    
    @media(max-width: 1000px){
        flex-direction: column;
        gap: 30px;
        padding: 64px 0px;
        border-radius: 0px;

        .info {
           justify-content: center;
           text-align: center;
        }
    }

    @media(max-width: 480px) {
        flex-direction: column;
        width: 100%;
        height: 394px;

        .info {
            gap: 8px;
            width: 80%;
            padding: 24px;
    
            h1 {
                font-weight: 700;
                font-size: 24px;
                line-height: 25px;
            }
        }

        .access {
            p {
                width: fit-content;
                padding: 0px 12px;
                font-size: 16px;
                font-weight: 300;
            }

            button {
                align-self: center;
                width: 300px;
                border-radius: 16px;
                font-size: 16px;
                padding: 20px 0px;
            }
        }
        
    }
`;

export const StudentCard = styled.div`
    width:562px;
    height: 396px;
    background-color: white;
    border-radius: 8px;
    border: 2px solid #5E3E7B;
   
    img {
        width: 110px;
        height: 109px;
        border-radius: 50%;
    }

    .student {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-top: 32px;
        margin-left: 32px;
    }

    .studentInfo {
        display: flex;
        flex-direction: column;
        gap: 4px;

        h1 {
            font-family: 'Inter';
            font-size: 20px;
            font-weight: 700;
            color: #3B3045;
        }

        p {
            font-family: 'Poppins';
            font-size: 14px;
            font-weight: 400;
            color: #3B3045;
        }
    }

    .testimonial {
            font-family: 'Poppins';
            font-size: 14px;
            font-weight: 400;
            color: #3B3045;
            opacity: 80%;
            text-align: justify;
            width: 498px;
            margin-top: 16px;
            margin-left: 32px;
            line-height: 30px;
    }

    @media(max-width: 480px) {
        width: 398px;

        .testimonial {
            width: 330px;
            height: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

` ;

export const SendHelpBanner = styled.div`
    width: 1120px;
    height: 299px;
    background: linear-gradient(to right, #E36C86, #B875AE, #9D7BC7, #7E82E3);
    margin-top: 80px;
    border-radius: 15px;
    padding-top: 32px;
    padding-left: 32px;

    h1 {
        font-family: 'Inter';
        font-size: 48px;
        font-weight: 700;
        color: white;
    }

    p {
        font-family: 'Inter';
        font-size: 20px;
        font-weight: 300;
        color: white;
        margin-top: 12px;
        width: 1056px;
        line-height: 25px;
        margin-bottom: 32px;
    }

    .form {
        display: flex;
        gap: 12px;
        input {
            background-color: white;
            padding: 16px 0px 16px 16px;
            color: RGBA(59, 48, 69, 0.7);
            font-family: 'Poppins';
            font-size: 16px;
            font-weight: 400;
            border: none;
            border-radius: 10px;
            width: 260px; 
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            width: 216px;
            font-family: 'Poppins';
            font-size: 20px;
            font-weight: 600;
            border: none;
            border-radius: 10px;
            padding: 16px 80px;
            background-color: #3B3045;

        }
    }

    @media(max-width: 1000px) {
        width: 90%;
        height: fit-content;
        justify-content: center;
        text-align: center;
        padding: 24px;
        p {
            font-size: 16px;
            margin-top: 12px;
            width: 700px;
            line-height: 25px;
            margin-bottom: 32px;
            justify-self: center;
        }

        .form {
            flex-direction: column;
            justify-content: center;

            input {
                width: 700px;
                
            }

            button {
                width: 700px;
                justify-content: center;
                align-self: center;
            }
        }
    }

    @media(max-width: 480px) {
        p {
            width: 350px;
        }
        .form {
            input {
                width: 350px;
            }
            button {
                width: 350px;
            }
    }
`;

export const Footer = styled.div`
    width: 1160px;
    height: fit-content;
    margin-top: 80px;
    margin-bottom: 80px;
    background-color: #F7F7F9;
    border: none;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 73px;
    padding-bottom: 80px;

    h3 {
        font-family: 'Inter';
        font-size: 24px;
        font-weight: 600;
        color: #3B3045;
    }

    li {
        color: #5E3E7B;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        margin-top: 24px;
        cursor: pointer;
    }

    .content{
        display: flex;
        gap: 32px;
    }

    .logo {
        width: 303px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        p {
            font-family: 'Inter';
            font-size: 16px;
            font-weight: 600;
            color: #3B3045;
            opacity: 50%;
            line-height: 30px;
        }
    }

    .addMarginTop {
        margin-top: 48px;
    }

    .divisor {
        width: 944px;
        height: 2px;
        background-color: #3B3045;
        opacity: 20%;
        margin-top: 40px;
        border-radius: 5px;
    }

    .contact {
        display: flex;
        width: 944px;
        margin-top: 24px;
        justify-content: space-between;
    }

    .info {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 12px;

        h1 {
            font-family: 'Inter';
            font-size: 14px;
            font-weight: 300;
            color: #3B3045;
        }

        p {
            font-family: 'Inter';
            font-size: 16px;
            font-weight: 700;
            color: #3B3045;
        }
    }


    .social {
        display: flex;
        gap:20px;
        margin-top: 12px;
        cursor: pointer;
    }

    @media(max-width: 1000px){
        width: 800px;
        margin-top: 80px;
        margin-bottom: 80px;
        padding: 40px 20px; 
            
        h3 {
            font-size: 16px;
        }

        li {
            font-size: 16px;
            margin-top: 12px;
        }

        
    .logo {
        width: 203px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        p {
            font-size: 12px;
            font-weight: 400;
        }
    }

    .divisor {
        width: 80%;
    }

    .contact {
        width: 780px;
       
    }
    }

    @media(max-width: 480px) {
        width: 400px;
        padding: 20px 0px; 
            
            h3 {
                font-size: 16px;
            }
            .areas {
                margin-top: 12px;
            }

            li {
                font-size: 16px;
                margin-bottom: 16px;
            }
            .content {
                flex-direction: column;
                gap: 0px;
            }

                
            .logo {
                width: 203px;
                display: flex;
                flex-direction: column;
                gap: 24px;

                p {
                    font-size: 12px;
                    font-weight: 400;
                }
            }

            .addMarginTop {
                margin-top: 8px;
            }

            .contact {
                justify-content: center;
                align-items: center;
                text-align: center;
                gap: 24px;
                flex-direction: column;
                width: 480px;
                
            }
        }
    }
`
