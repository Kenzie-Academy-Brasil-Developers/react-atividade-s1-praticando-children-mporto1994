import logo from './logo.svg';
import './App.css';
import CenteredCard from './components/CenteredCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <p>Algo Dentro</p>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
