import styled from "styled-components";
import { Web3ContextType, Web3ReactHooks,  } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { BorderRadius, Theme } from "../../utils";
import { H3, Text } from "../text";
import { WalletOption } from "./option";
import * as MetamaskConfig from "../../logic/wallet/metamask";
import * as CoinbaseWalletConfig from '../../logic/wallet/coinbase_wallet';
import * as WalletConnectConfig from '../../logic/wallet/wallet_connect';
import * as Eip1159Config from '../../logic/wallet/injected_wallet';
import * as GnosisSafeConfig from '../../logic/wallet/gnosis_safe';

import GnosisSafeLogo from '../../config/wallet_icons/gnosis_safe.svg';
import MetaMaskLogo from '../../config/wallet_icons/metamask.svg';
import CoinbaseWalletLogo from '../../config/wallet_icons/coinbase_wallet.svg';
import WalletConnectLogo from '../../config/wallet_icons/wallet_connect.svg';

interface Props {
    web3: Web3ContextType<Web3Provider>;
    walletDropDown: boolean;
}

const Dropdown = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2000;
    background: ${Theme.colors.secondary};
    min-height: 225px;
    height: auto;
    ${BorderRadius()};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`;

const DropdownTitle = styled.div`
    margin: 8px 0;
    text-align: center;
`;

const WalletNotConnected = ({ walletDropDown, web3 }: Props) => {

    if (!walletDropDown) {
        return (
            <Text customStyle="font-weight: bold;">Click to Connect Wallet</Text>
        );
    }

    return (
        <Dropdown>
            <DropdownTitle>
                <H3>Select Wallet</H3>
                <span style={{ height: '10px' }}></span>
                <WalletOption img="metamask" label="MetaMask" instance={MetamaskConfig.metaMask} hooks={MetamaskConfig.hooks} />
                <WalletOption img="coinbase_wallet" label="Coinbase Wallet" instance={CoinbaseWalletConfig.coinbaseWallet} hooks={CoinbaseWalletConfig.hooks} />
                <WalletOption img="wallet_connect" label="WalletConnect" instance={WalletConnectConfig.walletConnect} hooks={WalletConnectConfig.hooks}  />
                {/* <WalletOption img="gnosis_safe" label="Gnosis Safe" instance={GnosisSafeConfig.gnosisSafe} hooks={GnosisSafeConfig.hooks}  /> */}
                {/* <WalletOption img="browser_wallet" label="Browser Wallet" instance={Eip1159Config.eip1193} hooks={Eip1159Config.hooks} /> */}
                <WalletOption img="mylilius_wallet" label="MyLilius Wallet" instance={WalletConnectConfig.walletConnect} hooks={WalletConnectConfig.hooks} />
            </DropdownTitle>
        </Dropdown>
    )
    
}

export {
    WalletNotConnected
}