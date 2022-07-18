import styled from "styled-components";
import { Web3ContextType } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { getName } from "../../utils/wallet";
import { ConnectedWalletBase } from "./connected_base";

interface Props {
    web3: Web3ContextType<Web3Provider>;
}

const Container = styled.div`
    height: 100px;
    width: 100%;
`;

const WalletConnected = ({ web3 }: Props) => {

    const { accounts, chainId, connector } = web3;
    const connectionMedium = getName(connector);
    
    return (
        <Container>
            <ConnectedWalletBase accounts={accounts} chainId={chainId} wallet={connectionMedium} />
        </Container>
    );
}

export {
    WalletConnected
}