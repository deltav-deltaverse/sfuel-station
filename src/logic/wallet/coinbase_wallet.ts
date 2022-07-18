import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { initializeConnector } from '@web3-react/core';
import { URLS } from '../../utils/wallet';

export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
  (actions) => {
    console.log("URLS: ", URLS);
    console.log("URLS 2: ", [1258188407]);
    return new CoinbaseWallet({
      actions,
      options: {
        url: URLS[1258188407][0],
        appName: 'web3-react',
      },
    });
  }
);