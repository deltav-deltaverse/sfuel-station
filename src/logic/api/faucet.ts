import { AxiosInstance } from "axios";
import { ethers } from "ethers";
import { AxiosClient, IInstance } from "../../utils/api";
import { Balance, IProvider, IStatus } from "./balance";

class SFuelFaucet {

    private api: AxiosClient;
    private balance: Balance;
    

    constructor() {
        this.api = new AxiosClient();
        this.balance = new Balance(Object.keys(this.api.instances), this.api.isMainnet);
    }



    private async _hitAPI(account: string, chain: string) {
        try {
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
            for (const _account of accounts) {
                const isAddress: boolean = this._checkAddress(_account);
                if (!isAddress) {
                    const err = new Error('Not a valid address: ' + _account);
                    errors.push(err);
                }
                /// Check Balances For Each, Use Key to Fill Up If Under Necessary Amount
                const _balances: {[key: string]: boolean}[] = await this.balance!.getBalances(_account);

                for (const _balance of _balances) {
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

    public status(): IStatus {
        return this.balance.status;
    }
}

export {
    SFuelFaucet
}