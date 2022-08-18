import { Web3ContextType } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import styled from "styled-components";
import { H2 } from "./text";
import { WalletButton } from "./wallet/wallet";

const NavigationContainer = styled.div`
    position: fixed;
    z-index: 1000;
    top: 65px;
    @media(max-width: 600px) {
        top: 85px;
    }
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
    h2 {
        @media(max-width: 800px) {
            font-size: 1.25rem;
            top: 5%;
        }
    }
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