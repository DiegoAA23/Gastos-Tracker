
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Income } from './components/Income';
import { TransactionList } from './components/TransactionList';
import { NewTransaction } from './components/NewTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
