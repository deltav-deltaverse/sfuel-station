import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { initializeConnector } from '@web3-react/core';

export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
  (actions) => {
    return new CoinbaseWallet({
      actions, 
      options: {
        appName: process.env.REACT_APP_ENV === 'development' ? 'sFUEL Station - Testnet' : 'sFUEL Station',
        overrideIsCoinbaseBrowser: true,
        url: "https://rpc.ankr.com/eth"
      }
    });
  }
);