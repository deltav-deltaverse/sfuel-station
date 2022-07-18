import BN from "bn.js";
import Web3 from "web3";
import mineGasForTransaction from "./skale-miner";

const _testContracts: {[key: string]: string} = {
    'naive-musty-merope': '0xdd8161Fd402B2F5089FECCb78C2F4144B058e856',
    'actual-secret-cebalrai': '0x6A15024cd025066700d27190dD5F2F220c4d3824'
};

const _prodContracts: {[key: string]: string} = {}

const contracts = process.env.REACT_APP_ENV === 'development' ? _testContracts : _prodContracts;

async function runPoW(account: string, rpcUrl: string, chainKey: string): Promise<[string, boolean]> {
    const web3 = new Web3(rpcUrl);
    let sessionKeyCredentials = web3.eth.accounts.create();

    const sessionKey = sessionKeyCredentials.privateKey;
    const sessionKeyAddress = sessionKeyCredentials.address;

    let nonce = await web3.eth.getTransactionCount(sessionKeyAddress);
    let tx: any = {
        from: sessionKeyAddress,
        to: contracts[chainKey],
        data: "0x0c11dedd000000000000000000000000" + account.substring(2),
        nonce: nonce,
        gas: new BN(30000)
    }
    await mineGasForTransaction(web3, tx);
    let signed = await web3.eth.accounts.signTransaction(tx, sessionKey);
    const txHash = await web3.eth.sendSignedTransaction(signed.rawTransaction!);

    return [txHash.transactionHash, txHash.status];

}

export default runPoW;