import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { coinbaseWallet, hooks as coinbaseWalletHooks } from '../logic/wallet/coinbase_wallet'
import { hooks as metaMaskHooks, metaMask } from '../logic/wallet/metamask'
import { hooks as networkHooks, network } from '../logic/wallet/network'
import { hooks as walletConnectHooks, walletConnect } from '../logic/wallet/wallet_connect';
import { getName } from '../utils/wallet'

const connectors: [MetaMask | WalletConnect | CoinbaseWallet | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
]

function Child() {
  const { connector } = useWeb3React()
  console.log(`Priority Connector is: ${getName(connector)}`)
  return null
}

interface Props {
    widget: any;
}

const Web3Provider = ({ widget } : Props) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      {widget}
      <Child />
    </Web3ReactProvider>
  )
}

export { 
    Web3Provider
}