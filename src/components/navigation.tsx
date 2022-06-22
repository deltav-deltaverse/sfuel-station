import styled from "styled-components";
import { Theme } from "../utils";

const NavigationContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${Theme.colors.background};
    height: 5vh;
    color: white;
`;

const Navigation = () => {
    return (
        <NavigationContainer>
            <p>Navigation</p>
        </NavigationContainer>
    );
}

export {
    Navigation
}