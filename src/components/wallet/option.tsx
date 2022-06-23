import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { Web3ReactHooks } from "@web3-react/core";
import { EIP1193 } from "@web3-react/eip1193";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import styled from "styled-components";
import { Border, BorderRadius, Theme } from "../../utils";
import { Text } from "../text";

import { CoinbaseWalletSVG } from "../icons/coinbase_wallet";
import { GnosisSafeSVG } from "../icons/gnosis_safe";
import { MetamaskSVG } from "../icons/metamask";
import { WalletConnectSVG } from "../icons/wallet_connect";
import { MyLiliusWalletSVG } from "../icons/mylilius_wallet";
// import GnosisSafeSVG from "../../config/wallet_icons/gnosis_safe.svg";

const WalletOptionContainer = styled.div`
    height: 25px;
    width: 90%;
    margin: 8px 5%;
    ${BorderRadius()};
    ${Border('0.5px', 'white')};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 35px;
    position: relative;
    p {
        position: absolute;
        left: 25%;
    }
    &:hover {
        background-color: ${Theme.colors.primary};
    }
`;

const SVGContainer = styled.div`
    position: absolute;
    left: 10%;
    height: 75%;
`;

interface Props {
    label: string;
    img: string;
    instance: MetaMask | CoinbaseWallet | WalletConnect | EIP1193 | Network | GnosisSafe
    hooks: Web3ReactHooks;
}

interface ISVGOption {
    [key: string]: JSX.Element;
}

const WalletOption = ({ label, img, instance, hooks } : Props ) => {

    const svgOptions: ISVGOption = {
        'metamask': <MetamaskSVG />,
        'gnosis_safe': <GnosisSafeSVG />,
        'coinbase_wallet': <CoinbaseWalletSVG />,
        'wallet_connect': <WalletConnectSVG />,
        'mylilius_wallet': <MyLiliusWalletSVG />
    };

    const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;


    const chainId = useChainId() ?? 1;
    const connect = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        instance.activate(chainId)
            .then(() => console.log("Success"))
            .catch((err) => console.log("Error: ", err));
    }

    // let svg;
    // if (img === 'coinbase_wallet') {
    //     svg = <CoinbaseWalletSVG />;
    // } else if (img === 'gnosis_safe') {
    //     svg = <GnosisSafeSVG />
    //     // svg = <img style={{ width: '24px', height: '24px', zIndex: '100000'}}src={GnosisSafeSVG} />;
    // } else if (img === 'metamask') {
    //     svg = <MetamaskSVG />
    // }  else {
    //     svg = <span></span>;
    // }
    // console.log(img, svg);

    return (
        <WalletOptionContainer onClick={connect}>
            <SVGContainer>
                {svgOptions[img] ?? <span></span>}
            </SVGContainer>
            <Text>{label}</Text>
        </WalletOptionContainer>
    )
}

export {
    WalletOption
}