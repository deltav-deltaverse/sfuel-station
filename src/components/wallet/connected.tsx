import { Web3ContextType } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';

interface Props {
    web3: Web3ContextType<Web3Provider>;
    walletDropDown: boolean;
}

const WalletConnected = ({ walletDropDown, web3 }: Props) => {
    return (
        <p>Wallet Connected</p>
    )
}

export {
    WalletConnected
}