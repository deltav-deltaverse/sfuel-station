import { AxiosInstance } from "axios";
import { ethers } from "ethers";
import { AxiosClient, IInstance } from "../../utils/api";
import { Balance, IProvider } from "./balance";

class SFuelFaucet {

    private api: AxiosClient;
    private balance: Balance;
    private MIN_USER_BALANCE: number = 1000000000;

    constructor() {
        this.api = new AxiosClient();
        this.balance = new Balance(Object.keys(this.api.instances), this.api.isMainnet);
    }



    private async _hitAPI(account: string, chain: string) {
        try {
            console.log(this.api.instances[chain])
            const response = await this.api.instances[chain].get(`general/${account}`);
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    public async fillUp(accounts: string[] | undefined) {
        try {
            let errors: Error[] = [];
            if (!accounts) {
                throw new Error('No Accounts Provided');
            }
            console.log("ACCOUNTS: ", accounts);
            for (const _account of accounts) {
                const isAddress: boolean = this._checkAddress(_account);
                if (!isAddress) {
                    const err = new Error('Not a valid address: ' + _account);
                    errors.push(err);
                }
                /// Check Balances For Each, Use Key to Fill Up If Under Necessary Amount
                const balances: {[key: string]: boolean}[] = await Promise.all(Object.entries(this.balance.providers).map(async(value) : Promise<{[key: string]: boolean}> => {
                    const _key: string = value[0];
                    const _provider: ethers.providers.WebSocketProvider = value[1];
                    const _balance = await _provider.getBalance(_account);
                    const _requiresTopUp: boolean = (Number(_balance) <= this.MIN_USER_BALANCE);
                    const map = {[_key]: _requiresTopUp};
                    return map;
                }));
                for (const _balance of balances) {
                    if (Object.values(_balance)[0]) {
                        const _key = Object.keys(_balance)[0];
                        const _res = await this._hitAPI(_account, _key);                        
                    }
                }
            }
        } catch (err: any) {
            throw new Error(err);
        }
    }

    private _checkAddress(account: string) : boolean {
        return ethers.utils.isAddress(account);
    }
}

export {
    SFuelFaucet
}