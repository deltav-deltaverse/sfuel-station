import { CHAINS } from '../config/chains';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import type { Connector } from '@web3-react/types';
import { GnosisSafe } from '@web3-react/gnosis-safe';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask';
  if (connector instanceof WalletConnect) return 'WalletConnect';
  if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet';
  if (connector instanceof Network) return 'Network';
  if (connector instanceof GnosisSafe) return 'Gnosis Safe';
  return 'Unknown'
}


export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
    (accumulator, chainId) => {
      const validURLs: string[] = CHAINS[Number(chainId)].urls;
  
      if (validURLs.length) {
        accumulator[Number(chainId)] = validURLs;
      }
  
      return accumulator;
    },
    {}
);



