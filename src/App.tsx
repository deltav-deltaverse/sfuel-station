import './App.css';
import { ApplicationContainer } from './components';
import { Web3Provider } from './components/web3_provider';

function App() {
  return (
    <ApplicationContainer>
      <Web3Provider />
    </ApplicationContainer>
  )
}

export default App;
