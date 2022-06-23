import styled from "styled-components";
import { IBalance } from "../logic/api";
import { Border, Theme } from "../utils";
import { LoadingIcon } from "./loading";
import { H3, Text } from "./text";

interface ChainProps {
    height: string;
}

const ChainCardContainer = styled.div<ChainProps>`
    background: ${Theme.colors.secondary};
    height: ${props => props.height};
    z-index: 10000;
    width: 30%;
    ${Border('1px', 'white')};
    box-shadow:
        1px 1px #FFF,
        -1px 1px #FFF,
        1px -1px #FFF,
        -1px -1px #FFF;
    border-radius: 16px;
    margin: 8px auto;
`;

const ChainTitleContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

interface Props {
    chain: string;
    balances: IBalance;
    minLength: string;
    chainKey: string;
}

const Row = styled.div`
    width: 100%;
    margin: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const BalanceListContainer = styled.div`
    height: 75%;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const AddressContainer = styled.div`
    width: 80%;
`;
const LoadingContainer = styled.div`
    width: 5%;
`;

const ChainCard = ({ chain, balances, minLength, chainKey } : Props) => {
    return (
        
        <ChainCardContainer height={minLength}>
            <ChainTitleContainer>
                <H3 customStyle="font-size: 1.5rem; text-align: center;">{chain}</H3>
                <Text customStyle="font-size: 0.85rem; text-align: center;" >{chainKey}</Text>
            </ChainTitleContainer>
            <BalanceListContainer>
                {balances && Object.entries(balances).map((balance) => {
                    const _address: string = balance[0].substring(0, 12) + '...' + balance[0].substring(32);
                    const _isFilled: boolean | undefined = balance[1].isFilled;

                    return (
                        <Row>
                            <AddressContainer><Text>{_address}</Text></AddressContainer>
                            <LoadingContainer>
                            {_isFilled ? <Text>&#9989;</Text> : <LoadingIcon primary={true}/>}
                            </LoadingContainer>
                        </Row>
                    );
                })}
            </BalanceListContainer>
        </ChainCardContainer>
    );
}

export {
    ChainCard
}