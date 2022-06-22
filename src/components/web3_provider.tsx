import React from 'react';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { coinbaseWallet, hooks as coinbaseWalletHooks } from '../logic/wallet/coinbase_wallet'
import { hooks as metaMaskHooks, metaMask } from '../logic/wallet/metamask'
import { hooks as networkHooks, network } from '../logic/wallet/network'
import { hooks as walletConnectHooks, walletConnect } from '../logic/wallet/wallet_connect';
import { WalletManagerScreen } from '../screens/index';

const connectors: [MetaMask | WalletConnect | CoinbaseWallet | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
];

const Web3Provider = () => {

  return (
    <Web3ReactProvider connectors={connectors}>
      <WalletManagerScreen />
    </Web3ReactProvider>
  )
}

export { 
    Web3Provider
}