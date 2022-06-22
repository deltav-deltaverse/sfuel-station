import styled from "styled-components";
import { H1, SubTitle, SectionContainer } from "../../components";

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
        <SectionContainer backgroundImage="linear-gradient(135deg, #DD1173, #350e47)">
            <ContentContainer>
                <H1>sFUEL Station</H1>
                <SubTitle>Fuel for the #SKALEVERSE</SubTitle>
            </ContentContainer>
        </SectionContainer>
    );
}

export {
    Disconnected
}