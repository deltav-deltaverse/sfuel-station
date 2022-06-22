import type { AddEthereumChainParameter } from "@web3-react/types";
import type { ChainInformation } from "../interfaces/chains";

const SFUEL: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'SKALE Fuel',
    symbol: 'sFUEL',
    decimals: 18
};

export const CHAINS: { [chainId: number]: ChainInformation } = {
    1258188407: {
      urls: ['https://staging-v2.skalenodes.com/v1/naive-musty-merope'],
      name: 'MyLilius SKALE Chain',
      nativeCurrency: SFUEL,
      blockExplorerUrls: ['https://naive-musty-merope.explorer.staging-v2.skalenodes.com'],
    },
    104734457: {
        urls: ['https://staging-v2.skalenodes.com/v1/actual-secret-cebalrai'],
        name: 'Calypso NFT Hub',
        nativeCurrency: SFUEL,
        blockExplorerUrls: ['https://actual-secret-cebalrai.explorer.staging-v2.skalenodes.com'],
    }
}