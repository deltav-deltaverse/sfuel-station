import { AxiosInstance } from "axios";
import { ethers } from "ethers";
import { AxiosClient, IInstance } from "../../utils/api";
import { Balance, IProvider } from "./balance";

class SFuelFaucet {

    private api: AxiosClient;
    private balance: Balance;

    constructor() {
        this.api = new AxiosClient();
        this.balance = new Balance(Object.keys(this.api.instances), this.api.isMainnet);
    }



    private async _buildCall(account: string) {
        try {
            const res = await Promise.all(Object.entries(this.api.instances).map((value) => {
                value[1].get(`general/${account}`);
            }));
            console.log("RES: ", res);
        } catch (err) {
            console.log(err);
        }
    }

    public async fillUp(account: string) {
        try {
            const isAddress: boolean = ethers.utils.isAddress(account);
            if (!isAddress) {
                throw new Error('Not a valid address');
            }



            /// Check Balances by 
        } catch (err: any) {
            throw new Error(err);
        }
    }
}

export {
    SFuelFaucet
}