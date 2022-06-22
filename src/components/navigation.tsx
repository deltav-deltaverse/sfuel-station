import styled from "styled-components";
import { Theme } from "../utils";
import { H2 } from "./text";
import { WalletButton } from "./wallet";

const NavigationContainer = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    height: 5vh;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NavigationTitle = styled.div`
    position: absolute;
    left: 10%;
`;

const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationTitle>
                <H2>sFUEL Station</H2>
            </NavigationTitle>
            <WalletButton />
        </NavigationContainer>
    );
}

export {
    Navigation
}