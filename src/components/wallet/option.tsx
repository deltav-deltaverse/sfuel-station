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

const Image = styled.img`
    position: absolute;
    left: 10%;
    height: 75%;
    background: red;
`;

interface Props {
    label: string;
    img: string;
    instance: MetaMask | CoinbaseWallet | WalletConnect | EIP1193 | Network | GnosisSafe
    hooks: Web3ReactHooks;
}

const WalletOption = ({ label, img, instance, hooks } : Props ) => {

    const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;


    const chainId = useChainId() ?? 1;
    const connect = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        instance.activate(chainId)
            .then(() => console.log("Success"))
            .catch((err) => console.log("Error: ", err));
    }

    return (
        <WalletOptionContainer onClick={connect}>
            <Image src={img} />
            <Text>{label}</Text>
        </WalletOptionContainer>
    )
}

export {
    WalletOption
}