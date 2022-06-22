import styled from "styled-components";
import { BorderRadius, Theme } from "../utils";

const WalletContainer = styled.div`
    position: absolute;
    right: 5%;
    height: 65%;
    width: 10%;
    background: ${Theme.colors.secondary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${BorderRadius()};
`;

const WalletButton = () => {
    return (
        <WalletContainer>
            <p>Wallet Button</p>
        </WalletContainer>
    );
}

export {
    WalletButton
}