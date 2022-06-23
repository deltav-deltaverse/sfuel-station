import { useEffect, useState } from "react";
import styled from "styled-components";
import { H1, SubTitle, SectionContainer, H3 } from "../components";
import { ChainCard } from "../components/chain_card";
import { IBalance, IStatus, SFuelFaucet } from "../logic/api";
import { Border, BorderRadius, Theme } from "../utils";

const ConnectedContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

const ContentContainer = styled.div`
    position: absolute;
    bottom: 15%;
    left: 7.5%;
    height: 100px;
    width: 50%;
`;

const StatusContainer = styled.div`
    position: absolute;
    right: 5%;
    height: 50%;
    width: 50%;
    // background: linear-gradient(165deg, ${Theme.colors.primary}, ${Theme.colors.secondary});
    // background: ${Theme.colors.primary};
    ${Border('0.5px', 'white')};
    top: 25%;
    bottom: 25%;
    ${BorderRadius()};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const StatusTitleContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ChainCardsContainer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    border-radius: 0 0 16px 16px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
`;

interface Props {
    sFuelApi?: SFuelFaucet;
}


const Connected = ({ sFuelApi }: Props) => {

    const [status, setStatus] = useState<IStatus | undefined>(undefined);
    const [minLength, setMinLength] = useState<string>('100px');

    useEffect(() => {
        const interval = setInterval(() => {
            if (sFuelApi) {
                setStatus(sFuelApi.status());
                let maximum = 0;
                status ? Object.entries(status).forEach((status) => {
                    const length = Object.keys(status[1].balances).length;
                    if (length > maximum) {
                        maximum = length;
                    }
                }) : maximum = 2;
                const _minimum = (maximum * 150).toString() + 'px;';
                setMinLength(_minimum);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [sFuelApi?.status()]);


    return (
        <ConnectedContainer>
            <ContentContainer>
                <H1>sFUEL Station</H1>
                <SubTitle>Fuel for the #SKALEVERSE</SubTitle>
            </ContentContainer>
            <StatusContainer>
                <StatusTitleContainer>
                    <H3 customStyle="text-align: center;">sFUEL Status</H3>
                </StatusTitleContainer>
                <ChainCardsContainer>
                    {status && Object.entries(status).map((_status, index) => {
                        const chainKey: string = _status[0];
                        const chain: string = _status[1].chain;
                        const balances: IBalance = _status[1].balances;
                        return <ChainCard key={index} chainKey={chainKey} minLength={minLength} chain={chain} balances={balances} />
                    })}
                </ChainCardsContainer>
            </StatusContainer>
        </ConnectedContainer>
    );
}

export {
    Connected
}