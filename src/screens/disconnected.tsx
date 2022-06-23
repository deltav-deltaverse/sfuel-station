import styled from "styled-components";
import { H1, SubTitle, SectionContainer } from "../components";

const ContentContainer = styled.div`
    position: absolute;
    bottom: 10%;
    left: 7.5%;
    height: 100px;
    width: 50%;
`;
const PageTitleContainer = styled.div``;


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