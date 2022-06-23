import { BigNumber, ethers } from 'ethers';

interface IProvider {
    [key: string]: ethers.providers.WebSocketProvider;
}

interface IBalance {
    [key: string]: {
        balance?: number;
        isFilled?: boolean;
    };
}

interface IStatus {
    [key: string]: {
        chain: string
        balances: IBalance;
    }
    
}

class Balance {


    private _providers: IProvider = {};
    private MIN_USER_BALANCE: number = 1000000000;
    private _balances: IStatus = {
        'naive-musty-merope': {
            chain: 'MyLilius',
            balances: {}
        },
        'actual-secret-cebalrai': {
            chain: 'Calypso',
            balances: {}
        }
    };

    constructor(keys: string[], isMainnet: boolean) {
        for (const _key of keys) {
            this._providers[_key] = new ethers.providers.WebSocketProvider(`wss://${isMainnet ? 'mainnet' : 'staging-v2'}.skalenodes.com/v1/ws/${_key}`);
        }
    }

    public async getBalances(_account: string) : Promise<{[key: string]: boolean}[]> {
        try {
            return await Promise.all(Object.entries(this.providers).map(async(value) : Promise<{[key: string]: boolean}> => {
                const _key: string = value[0];
                const _provider: ethers.providers.WebSocketProvider = value[1];
                const _balance: BigNumber = await _provider.getBalance(ethers.utils.getAddress(_account));
                const _requiresTopUp: boolean = (Number(_balance) <= this.MIN_USER_BALANCE);
                this._balances[_key]['balances'][_account] = {
                    balance: Number(_balance),
                    isFilled: !_requiresTopUp
                };
                const map = {[_key]: _requiresTopUp};
                return map;
            }));
        } catch (err: any) {
            throw new Error(err);
        }
    }

    get providers() : IProvider {
        return this._providers;
    }

    get status() : IStatus {
        return this._balances;
    }

}

export {
    Balance,
    type IBalance,
    type IProvider,
    type IStatus
}