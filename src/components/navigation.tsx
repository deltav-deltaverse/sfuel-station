import styled from "styled-components";
import { Theme } from "../utils";

const NavigationContainer = styled.div`
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