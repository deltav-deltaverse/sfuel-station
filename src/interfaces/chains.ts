import type { AddEthereumChainParameter } from '@web3-react/types';

interface ChainInformation {
    blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
    name: string;
    nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
    urls: string[];
};

export type {
    ChainInformation
}