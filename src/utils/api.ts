import axios, { AxiosInstance } from 'axios';

class AxiosClient {

    private ENVIRONMENT: string = process.env.REACT_APP_ENV as string;

    private _instances: AxiosInstance[];

    private _testnetUrls: string[] = [
        "https://testnet.facuet.mylilius.com/", /// naive-musty-merope | MyLilius
        "https://sfuel-faucet.skale.network/" /// actual-secret-cebelrai | Calpso
    ];

    private _mainnetUrls: string[] = [];

    constructor() {
        this._instances = this._initialize();
    }

    private _initialize() : AxiosInstance[] {
        const _urls: string[] = this.ENVIRONMENT === 'testnet' ? this._testnetUrls : this._mainnetUrls;
        return _urls.map((_url: string): AxiosInstance => {
            return axios.create({
                baseURL: _url,
                timeout: 10000,
            });
        });
    }

    get instances() : AxiosInstance[] {
        return this._instances;
    }
}