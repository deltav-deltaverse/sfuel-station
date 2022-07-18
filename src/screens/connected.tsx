import styled from "styled-components";
import { H3 } from "../components";
import { ChainCard } from "../components/chain_card";
import { BorderRadius } from "../utils";

const ConnectedContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;


const StatusContainer = styled.div`
    position: absolute;
    right: 5%;
    height: 75%;
    width: 85%;
    top: 10%;
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
    min-height: 90%;
    height: auto;
    width: 100%;
    display: flex;
    border-radius: 0 0 16px 16px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

const ChainCardMargin = styled.div`
    width: 28%;
    height: 22.5%;
    @media(max-width: 1024px) {
        width: 45%;
        margin: 4px 8px;
    }
    @media(max-width: 800px) {
        width: 100%;
        margin: 16px 0;
    }
`;


const _devKeys: string[] = ['naive-musty-merope', 'actual-secret-cebalrai'];
const _devNames: string[] = ['MyLilius', 'Calypso'];

const _prodKeys: string[] = [];
const _prodNames: string[] = [];

const Connected = () => {
    const keys: string[] = process.env.REACT_APP_ENV === 'development' ? _devKeys : _prodKeys;
    const names: string[] = process.env.REACT_APP_ENV === 'development' ? _devNames : _prodNames;


    return (
        <ConnectedContainer>
            <StatusContainer>
                <StatusTitleContainer>
                    <H3 customStyle="text-align: center;">sFUEL Status</H3>
                </StatusTitleContainer>
                <ChainCardsContainer>
                    {keys.map((chainKey, index) => {
                        return (
                            <ChainCardMargin>
                                {ChainCard(chainKey, names[index])}
                            </ChainCardMargin>
                        );
                    })}
                </ChainCardsContainer>
            </StatusContainer>
        </ConnectedContainer>
    );
}

export {
    Connected
}