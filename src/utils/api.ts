import axios, { AxiosInstance } from 'axios';

interface IUrl {
    [key: string]: string;
}

export interface IInstance {
    [key: string]: AxiosInstance;
}

class AxiosClient {
    
    private ENVIRONMENT: string = process.env.NODE_ENV as string;

    private _instances: IInstance;

    private _testnetUrls: IUrl = {
        "naive-musty-merope": "http://localhost:8080"
        // "naive-musty-merope": "https://testnet.facuet.mylilius.com/", ///  | MyLilius
        // "actual-secret-cebalrai": "https://sfuel-faucet.skale.network/" /// | Calpso
    }

    private _mainnetUrls: IUrl = {};

    constructor() {
        console.log(process.env);
        this._instances = this._initialize();
    }

    private _initialize() : IInstance {
        console.log("ENV: ", this.ENVIRONMENT);
        const _urls: IUrl = this.ENVIRONMENT === 'development' ? this._testnetUrls : this._mainnetUrls;
        let _map: IInstance = {};
        console.log("URLS: ", _urls);
        for (const entry of Object.entries(_urls)) {
            _map[entry[0]] = axios.create({
                baseURL: entry[1],
                timeout: 10000,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
        }
        return _map;
        
    }

    get instances() : IInstance {
        return this._instances;
    }

    get isMainnet() : boolean {
        return this.ENVIRONMENT === 'production';
    }
}

export {
    AxiosClient
}