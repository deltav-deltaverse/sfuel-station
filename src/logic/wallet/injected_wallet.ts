import { Eip1193Bridge } from '@ethersproject/experimental';
import { JsonRpcProvider } from '@ethersproject/providers';
import { initializeConnector } from '@web3-react/core';
import { EIP1193 } from '@web3-react/eip1193';
import { URLS } from '../../utils/wallet';

class InjectedWallet extends Eip1193Bridge {
    request(request: { method: string; params?: any[] }): Promise<any> {
        if (request.method === 'eth_requestAccounts' || request.method === 'eth_accounts') return Promise.resolve([]);
        return super.request(request);
    };
}

const ethersProvider = new JsonRpcProvider(URLS[1258188407][0], 1);
const eip1193Provider = new InjectedWallet(ethersProvider.getSigner(), ethersProvider);

export const [eip1193, hooks] = initializeConnector<EIP1193>((actions) => new EIP1193({ actions, provider: eip1193Provider }));