import { useWeb3React, Web3ContextType } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import styled from "styled-components";
import { Footer, Navigation, SectionContainer } from '../components';
import { Disconnected } from './disconnected';
import { Connected } from './connected';
import { Theme } from '../utils';

const Container = styled.div`
    background: linear-gradient(135deg, #DD1173, #350E47);
`;

const BannerContainer = styled.div`
    width: 100%;
    height: 50px;
    color: white;
    text-align: center;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${Theme.colors.secondary};
    @media(max-width: 600px) {
        height: auto;
        padding: 8px 0;
        p {
            width: 90%;
            font-size: 0.85rem;
        }
    }
`;

const HomeScreen = () => {
    
    const web3: Web3ContextType<Web3Provider> = useWeb3React();
    const { isActive } = useWeb3React();

    return (
        <Container>
            <Navigation web3={web3} />
            <BannerContainer>
                <p>You may be connected to any compatible network to use the sFUEL Station. Any sFUEL received will be visible under that network specifically in your wallet.</p>
            </BannerContainer>
            <SectionContainer>
                {isActive ? <Connected /> : <Disconnected />}
            </SectionContainer>
            <Footer />
        </Container>
    )
}

export {
    HomeScreen
}