import styled from "styled-components";
import { Theme } from "../utils";

const FooterContainer = styled.div`
    background: ${Theme.colors.background};
    height: 5vh;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>Footer</p>
        </FooterContainer>
    );
}

export {
    Footer
}