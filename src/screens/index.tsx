import { useWeb3React, Web3ContextType, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import styled from "styled-components";
import { Footer, Navigation } from '../components';
import { Disconnected } from './disconnected';
import { Gasless } from './gasless';
import { MyLilius } from './mylilius';
import { useEffect, useState } from 'react';
import { SFuelFaucet } from '../logic/api';

const Container = styled.div``;


const HomeScreen = () => {
    
    const [hasInterval, setHasInterval] = useState<boolean>(false);
    const sFuelApi = new SFuelFaucet();
    

    const web3: Web3ContextType<Web3Provider> = useWeb3React();
    const { connector } = web3;
    
    const checkLogic = () => {
        sFuelApi.fillUp(web3.accounts)
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
            <Disconnected />
            <Gasless />
            <MyLilius />
            <Footer />
        </Container>
    )
}

export {
    HomeScreen
}