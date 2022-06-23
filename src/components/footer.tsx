import styled from "styled-components";
import { Theme } from "../utils";
import { Text } from "./text";

const FooterContainer = styled.div`
    height: 5vh;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Text>Powered by MyLilius. Built for SKALE.</Text>
        </FooterContainer>
    );
}

export {
    Footer
}