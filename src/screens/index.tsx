import { useWeb3React } from '@web3-react/core';
import styled from "styled-components";
import { Footer, Navigation } from '../components';

const Container = styled.div``;


const WalletManagerScreen = () => {

    const { connector } = useWeb3React();

    return (
        <Container>
            <Navigation />
            <h1>Wallet Manager Screen</h1>
            <p>{JSON.stringify(connector)}</p>
            <Footer />
        </Container>
    )
}

export {
    WalletManagerScreen
}