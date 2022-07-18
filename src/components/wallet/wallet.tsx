import { Web3ContextType } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import styled from "styled-components";
import { BorderRadius, Theme } from "../../utils";
import { useState } from "react";
import { WalletNotConnected } from "./not_connected";


import { CoinbaseWalletSVG } from "../icons/coinbase_wallet";
import { GnosisSafeSVG } from "../icons/gnosis_safe";
import { MetamaskSVG } from "../icons/metamask";
import { WalletConnectSVG } from "../icons/wallet_connect";
import { MyLiliusWalletSVG } from "../icons/mylilius_wallet";
import { Text } from "../text";
import { getName } from "../../utils/wallet";

const SVGContainer = styled.div`
    height: auto;
    position: absolute;
    right: 2.5%;
`;


interface ISVGOption {
    [key: string]: JSX.Element;
}

const svgOptions: ISVGOption = {
    'MetaMask': <MetamaskSVG />,
    'Gnosis Safe': <GnosisSafeSVG />,
    'Coinbase Wallet': <CoinbaseWalletSVG />,
    'Wallet Connect': <WalletConnectSVG />,
    'MyLilius Wallet': <MyLiliusWalletSVG />
};

const WalletContainer = styled.div<any>`
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
    @media(max-width: 800px) {
        width: 30%;
        right: ${props => props.isDropped ? '15%' : '5%'};
        p {
            font-size: 0.85rem;
        }
    }
    @media(max-width: 1400px) {
        width: 40%;
    }
`;

interface Props {
    web3: Web3ContextType<Web3Provider>;
}

const WalletButton = ({ web3 } : Props) => {

    const [walletDropDown, setWalletDropDown] = useState(false);
    
    const { account, connector, hooks } = web3;

    const hasConnection: boolean = hooks.useSelectedIsActive(web3.connector);

    const showConnectionOptions = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setWalletDropDown(!walletDropDown);
    }

    const showConnectedOptions = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setWalletDropDown(!walletDropDown);
    }

    if (hasConnection) {
        const _account = account!.substring(0, 6) + '...' + account!.substring(36);
        const wallet = getName(connector);
        return (
            <WalletContainer onClick={(e: { preventDefault: () => void; }) => { e.preventDefault()}}>
                <Text customStyle="position: absolute; left: 5%;">{_account}</Text> 
                <SVGContainer>
                        {svgOptions[wallet] ?? <span></span>}
                </SVGContainer>               
            </WalletContainer>
        );
    }

    return (
        <WalletContainer isDropped={walletDropDown} onClick={!walletDropDown ? showConnectionOptions : showConnectedOptions} >
            <WalletNotConnected walletDropDown={walletDropDown} web3={web3} />
        </WalletContainer>
    );
}

export {
    WalletButton
}