import { ethers } from 'ethers';

interface IProvider {
    [key: string]: ethers.providers.WebSocketProvider;
}

class Balance {


    private _providers: IProvider = {};

    constructor(keys: string[], isMainnet: boolean) {
        for (const _key of keys) {
            this._providers[_key] = new ethers.providers.WebSocketProvider(`wss://${isMainnet ? 'mainnet' : 'staging-v2'}.skalenodes.com/v1/ws/${_key}`);
        }
    }

    get providers() : IProvider {
        return this._providers;
    }

}

export {
    Balance,
    type IProvider
}