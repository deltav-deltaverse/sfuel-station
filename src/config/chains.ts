import type { AddEthereumChainParameter } from "@web3-react/types";
import type { ChainInformation } from "../interfaces/chains";

const SFUEL: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'SKALE Fuel',
    symbol: 'sFUEL',
    decimals: 18
};

export const CHAINS: { [chainId: number]: ChainInformation} = process.env.REACT_APP_ENV === 'development' ? {
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
} : {
    1564830818: {
        urls: ['https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague'],
        name: 'Calypso SKALE Chain',
        nativeCurrency: SFUEL,
        blockExplorerUrls: ['https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/']
    },
    2046399126: {
        urls: ['https://mainnet.skalenodes.com/v1/elated-tan-skat'],
        name: 'Europa SKALE Chain',
        nativeCurrency: SFUEL,
        blockExplorerUrls: ['https://elated-tan-skat.explorer.mainnet.skalenodes.com/']
    }
}