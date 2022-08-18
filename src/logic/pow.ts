import BN from "bn.js";
import Web3 from "web3";
import mineGasForTransaction from "./skale-miner";

const _testContracts: {[key: string]: {[key: string]: string}} = {
    developer: {
        'actual-secret-cebalrai': '0x18B2BF317ED21dE2A24F7176204463867Df598d9',
    },
    general: {
        'naive-musty-merope': '0xdd8161Fd402B2F5089FECCb78C2F4144B058e856',
        'actual-secret-cebalrai': '0x6A15024cd025066700d27190dD5F2F220c4d3824',
        'whispering-turais': '0xb2241D4E1aBABbeD041f99A2a0aCea972015Cd2f'
    }
};

const _prodContracts: {[key: string]: {[key: string]: string}} = {
    developer: {
        'honorable-steel-rasalhague': '0x000E9c53C4e2e21F5063f2e232d0AA907318dccb'
    },
    general: {
        'elated-tan-skat': '0x2B267A3e49b351DEdac892400a530ABb2f899d23',
        'honorable-steel-rasalhague': '0x02891b34B7911A9C68e82C193cd7A6fBf0c3b30A',
        'affectionate-immediate-pollux': '0xFcE116dB669A22CF811D86F0591F8AeCA68abB01'
    }
}

const contracts = process.env.REACT_APP_ENV === 'development' ? _testContracts : _prodContracts;

async function runPoW(account: string, rpcUrl: string, chainKey: string, isDeveloper: boolean = false): Promise<[string, boolean]> {
    const web3 = new Web3(rpcUrl);
    let sessionKeyCredentials = web3.eth.accounts.create();

    const sessionKey = sessionKeyCredentials.privateKey;
    const sessionKeyAddress = sessionKeyCredentials.address;

    let nonce = await web3.eth.getTransactionCount(sessionKeyAddress);
    console.log("ENV: ", process.env.REACT_APP_ENV);
    console.log("Contract Address: ", contracts[isDeveloper ? 'developer': 'general'][chainKey]);

    let tx: any = {
        from: sessionKeyAddress,
        to: contracts[isDeveloper ? 'developer': 'general'][chainKey],
        data: (chainKey === 'elated-tan-skat' ? "0x6a627842000000000000000000000000" : "0x0c11dedd000000000000000000000000") + account.substring(2),
        nonce: nonce,
        gas: new BN(30000)
    }
    await mineGasForTransaction(web3, tx);
    let signed = await web3.eth.accounts.signTransaction(tx, sessionKey);
    const txHash = await web3.eth.sendSignedTransaction(signed.rawTransaction!);

    return [txHash.transactionHash, txHash.status];

}

export default runPoW;