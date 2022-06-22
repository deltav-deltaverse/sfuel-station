import { Web3ContextType, Web3ReactHooks,  } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { Connector } from "@web3-react/types";
import styled from "styled-components";
import { Theme } from "../utils";
import { H2 } from "./text";
import { WalletButton } from "./wallet/wallet";

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

interface Props {
    web3: Web3ContextType<Web3Provider>;
}

const Navigation = ({ web3 } : Props) => {
    return (
        <NavigationContainer>
            <NavigationTitle>
                <H2>sFUEL Station</H2>
            </NavigationTitle>
            <WalletButton web3={web3} />
        </NavigationContainer>
    );
}

export {
    Navigation
}