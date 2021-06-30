import logo from './logo.svg';
import './App.css';
import API from './utils/spotifysearch';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={API}>Click ME</button>
      </header>
    </div>
  );
}

export default App;
