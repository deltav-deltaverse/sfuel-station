import { useWeb3React } from '@web3-react/core';
import styled from "styled-components";
import { Footer, Navigation } from '../components';
import { Disconnected } from './home/disconnected';
import { Gasless } from './home/gasless';
import { MyLilius } from './home/mylilius';

const Container = styled.div``;


const HomeScreen = () => {

    const { connector } = useWeb3React();

    return (
        <Container>
            <Navigation />
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