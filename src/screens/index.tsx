import { useWeb3React, Web3ContextType } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import styled from "styled-components";
import { Footer, Navigation, SectionContainer } from '../components';
import { Disconnected } from './disconnected';
import { Connected } from './connected';

const Container = styled.div``;


const HomeScreen = () => {
    
    const web3: Web3ContextType<Web3Provider> = useWeb3React();
    const { isActive } = useWeb3React();

    return (
        <Container>
            <Navigation web3={web3} />
            <SectionContainer backgroundColor="linear-gradient(135deg, #DD1173, #350E47)">
                {isActive ? <Connected /> : <Disconnected />}
            </SectionContainer>
            <Footer />
        </Container>
    )
}

export {
    HomeScreen
}