import { Web3ContextType } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import styled from "styled-components";
import { BorderRadius, Theme } from "../../utils";
import { useState } from "react";
import { WalletConnected } from "./connected";
import { WalletNotConnected } from "./not_connected";

const WalletContainer = styled.div`
    position: absolute;
    right: 5%;
    min-height: 85%;
    height: auto;
    width: 15%;
    background: ${Theme.colors.secondary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${BorderRadius()};
`;

interface Props {
    web3: Web3ContextType<Web3Provider>;
}

const WalletButton = ({ web3 } : Props) => {

    const [walletDropDown, setWalletDropDown] = useState(false);
    
    const { hooks } = web3;

    const hasConnection: boolean = hooks.useSelectedIsActive(web3.connector);

    const showConnectionOptions = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setWalletDropDown(!walletDropDown);
    }

    return (
        <WalletContainer onClick={!walletDropDown ? showConnectionOptions : (e) => {e.preventDefault()}}>
            {hasConnection ? <WalletConnected walletDropDown={walletDropDown} web3={web3} /> : <WalletNotConnected walletDropDown={walletDropDown} web3={web3} />}
        </WalletContainer>
    );
}

export {
    WalletButton
}