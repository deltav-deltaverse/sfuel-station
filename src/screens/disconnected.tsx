import styled from "styled-components";
import { H1, SubTitle } from "../components";

const ContentContainer = styled.div`
    position: absolute;
    bottom: 10%;
    left: 7.5%;
    height: 100px;
    width: 50%;
    @media(max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        bottom: 20%;
        width: 100%;
        left: 0;
        right: 0;
        top: 20%;
        h1 {
            font-size: 2.5rem;
        }
        h5 {
            font-size: 1.25rem;
        }
    }
`;


const Disconnected = () => {
    return (
        <ContentContainer>
            <H1>sFUEL Station</H1>
            <SubTitle>Fuel for the #SKALEVERSE</SubTitle>
        </ContentContainer>
    );
}

export {
    Disconnected
}