import styled from "styled-components";
import { Text } from "../text";

interface Props {
    accounts: string[] | undefined;
    chainId: number | undefined;
    wallet: string;
}

const ConnectedWalletBaseContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ConnectedWalletBase = ({ accounts, chainId, wallet }: Props) => {
    return (
        <ConnectedWalletBaseContainer>
           <Text>{wallet} | to {accounts?.length ?? 0} {accounts && accounts.length > 1 ? 'accounts' : 'account'} </Text> 
        </ConnectedWalletBaseContainer>
    );
}

export {
    ConnectedWalletBase
}