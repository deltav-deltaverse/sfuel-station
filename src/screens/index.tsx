import { useWeb3React, Web3ContextType, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import styled from "styled-components";
import { Footer, Navigation, SectionContainer } from '../components';
import { Disconnected } from './disconnected';
import { Gasless } from './gasless';
import { MyLilius } from './mylilius';
import { useEffect, useState } from 'react';
import { SFuelFaucet } from '../logic/api';
import { Connected } from './connected';

const Container = styled.div``;


const HomeScreen = () => {
    
    const [hasInterval, setHasInterval] = useState<boolean>(false);
    const [sFuel, setSFuel] = useState<SFuelFaucet | undefined>(undefined);
    

    const web3: Web3ContextType<Web3Provider> = useWeb3React();
    const { connector } = web3;
    
    useEffect(() => {
        const sFuelApi = new SFuelFaucet();
        setSFuel(sFuelApi);
    }, [])

    const checkLogic = () => {
        sFuel?.fillUp(web3.accounts)
            .then((res) => {
                console.log("RES: ", res)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (connector.provider) {
            if (!hasInterval) {
                checkLogic();
                setHasInterval(true);
                const interval = setInterval(() => {
                    checkLogic();
                }, 60000); /// Every 60 seconds after initial call
                return () => clearInterval(interval);
            }
        }

        
    }, [connector.provider])

    return (
        <Container>
            <Navigation web3={web3} />
            <SectionContainer backgroundColor="linear-gradient(135deg, #DD1173, #350E47)">
                {web3.account || web3.accounts ? <Connected sFuelApi={sFuel} /> : <Disconnected />}
            </SectionContainer>
            <Gasless />
            <MyLilius />
            <Footer />
        </Container>
    )
}

export {
    HomeScreen
}