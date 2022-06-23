import styled from "styled-components";
import { Text } from "../text";

import { CoinbaseWalletSVG } from "../icons/coinbase_wallet";
import { GnosisSafeSVG } from "../icons/gnosis_safe";
import { MetamaskSVG } from "../icons/metamask";
import { WalletConnectSVG } from "../icons/wallet_connect";
import { MyLiliusWalletSVG } from "../icons/mylilius_wallet";

interface Props {
    accounts: string[] | undefined;
    chainId: number | undefined;
    wallet: string;
}

const ConnectedWalletBaseContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const SVGContainer = styled.div`
    height: auto;
    position: absolute;
    right: 2.5%;
`;


interface ISVGOption {
    [key: string]: JSX.Element;
}

const ConnectedWalletBase = ({ accounts, chainId, wallet }: Props) => {

    const svgOptions: ISVGOption = {
        'MetaMask': <MetamaskSVG />,
        'Gnosis Safe': <GnosisSafeSVG />,
        'Coinbase Wallet': <CoinbaseWalletSVG />,
        'Wallet Connect': <WalletConnectSVG />,
        'MyLilius Wallet': <MyLiliusWalletSVG />
    };

    const account = accounts![0].substring(0, 12) + '...' + accounts![0].substring(32);

    return (
        <ConnectedWalletBaseContainer>
           <Text customStyle="position: absolute; left: 5%;">{account}</Text> 
           <SVGContainer>
                {svgOptions[wallet] ?? <span></span>}
           </SVGContainer>
        </ConnectedWalletBaseContainer>
    );
}

export {
    ConnectedWalletBase
}