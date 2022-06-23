import { Web3ContextType } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { getName } from "../../utils/wallet";
import { ConnectedWalletBase } from "./connected_base";

interface Props {
    web3: Web3ContextType<Web3Provider>;
    walletDropDown: boolean;
}

const WalletConnected = ({ walletDropDown, web3 }: Props) => {

    const { accounts, chainId, connector } = web3;
    const connectionMedium = getName(connector);
    
    // if (walletDropDown) {
    //     return <p>Connected - DD</p>
    // }
    
    return <ConnectedWalletBase accounts={accounts} chainId={chainId} wallet={connectionMedium} />
}

export {
    WalletConnected
}