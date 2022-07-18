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
    @media(max-width: 1400px) {
        min-height: 35px;
        margin: 4px 5%;
    }
    @media(max-width: 800px) {
        min-height: 35px;
        margin: 16px 5%;
    }
    min-height: 35px;
    position: relative;
    p {
        @media(max-width: 1400px) {
            font-size: 1rem;
            width: 75%;
            text-align: left;
        }
        @media(max-width: 800px) {
            font-size: 1rem;
            width: 85%;
        }
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
    width: 10%;
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

    const { useChainId } = hooks;


    const chainId = useChainId();
    const connect = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        instance.activate(chainId)
            .then(() => console.log("Success"))
            .catch((err) => console.log("Error: ", err));
    }
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