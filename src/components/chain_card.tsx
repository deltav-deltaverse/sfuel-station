import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import styled from "styled-components";
import runPoW from "../logic/pow";
import { Border, Theme } from "../utils";
import { LoadingIcon } from "./loading";
import { H4, Text } from "./text";

const ChainCardContainer = styled.div`
    background: ${Theme.colors.secondary};
    height: 100%;
    z-index: 10000;
    width: 100%;
    ${Border('1px', 'white')};
    box-shadow:
        1px 1px #FFF,
        -1px 1px #FFF,
        1px -1px #FFF,
        -1px -1px #FFF;
    border-radius: 16px;
    position: relative;
    @media(max-width: 800px) {
        width: 100%;
    }
`;

const ChainTitleContainer = styled.div`
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 10%;
    left: 2.5%;
    h4 {
        color: white;
        font-size: 1.5rem;
    }
    p  {
        color: white;
        font-size: 1.15rem;
    }
    @media(max-width: 800px) {
        h4 {
            color: white;
            font-size: 1rem;
        }
        p {
            color: white;
            font-size: 0.85rem;
        }
    }
`;


const ChainBalanceContainer = styled.div`
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5%;
    right: 2.5%;
    p {
        text-align: right;
        width: 100%;
        color: silver;
        @media(max-width: 800px) {
            font-size: 0.85rem;
        }
        
    }
`;

const Column = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const BalanceListContainer = styled.div`
    height: 70%;
    position: absolute;
    bottom:0;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
`;

const FillUpButton = styled.button`
    padding: 4px 16px;
    border: 1px solid white;
    background: none;
    border-radius: 16px;
    color: white;
    &:hover {
        background: ${Theme.colors.primary};
    }
`;

const ChainCard = (chainKey: string, chainName: string) => {
    const { account } = useWeb3React();

    const [currentAccount, setCurrentAccount] = useState<string>();

    const rpcUrl: string = `https://${process.env.REACT_APP_ENV === 'development' ? 'staging-v2' : 'mainnet'}.skalenodes.com/v1/${chainKey}`;
    const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const [balance, setBalance] = useState<BigNumber | undefined>();
    const [runningPow, setRunningPow] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const getBalance = async() => {
        setIsLoading(true);
        const balance = await provider.getBalance(account!);
        setBalance(balance);
        setIsLoading(false);
    }

    useEffect(() => {
        if (!currentAccount || currentAccount !== account) {
            getBalance();
            setCurrentAccount(account);
        }
    }, [account]);


    useEffect(() => {
        const interval = setInterval(async() => await getBalance(), 30000);
        return () => clearInterval(interval);
    }, [])
    
    const runPow = async(counter: number = 0) => {

        const watchStatus = async(hash: string) => {
            while (true) {
                const receipt: ethers.providers.TransactionReceipt = await provider.getTransactionReceipt(hash);
                if (receipt.status) {
                    if (receipt.status === 1) {
                        break;
                    } else {
                        setTimeout(async() => {
                            return await watchStatus(hash);
                        }, 2500);
                    }
                }
            }
        }

        try {
            if (account) {
                setRunningPow(true);
                let response: [string, boolean] = await runPoW(account, rpcUrl, chainKey);
                let status: boolean = response[1];
                if (!status) {
                    await watchStatus(response[0]);
                }
                console.log("Done Watching");
                await getBalance();
                setRunningPow(false);
            } else {
                throw new Error('No Account Detected');
            }
        } catch (err) {
            if (counter < 3) {
                await runPow(counter++);
            } else {
                throw err;
            }
            
        }
    }

    return (
        <ChainCardContainer>
            <ChainTitleContainer>
                <h4>{chainName}</h4>
                <p>{chainKey}</p>
            </ChainTitleContainer>
            <ChainBalanceContainer>
                {balance && <p>{ethers.utils.formatEther(BigNumber.from(balance))} sFUEL</p>}
            </ChainBalanceContainer>
            <BalanceListContainer>
                <Column>
                    {balance && !runningPow && !isLoading ? 
                        <>
                        {balance && Number(balance) >= Number(ethers.utils.parseEther('0.00005')) 
                            ? <Text customStyle={{ color: 'lightgreen'}}>sFUEL Filled Up</Text>
                            : <FillUpButton onClick={async(e) => {
                                e.preventDefault();
                                await runPow();
                            }}>Click for sFUEL on {chainName}</FillUpButton>}
                        </>
                        : <LoadingIcon primary={true} />
                    }
                    
                </Column>
            </BalanceListContainer>
        </ChainCardContainer>
    );
}

export {
    ChainCard
}