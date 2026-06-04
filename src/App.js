import './App.css';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import { APP_LABELS } from './App.constants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
            {APP_LABELS.TITLE}
        </h1>
      </header>
      <CustomerDetails />
    </div>
  );
}

export default App;
