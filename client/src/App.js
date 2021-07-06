import logo from './logo.svg';
import './App.css';
import API from './utils/spotifysearch';
import registerUser from './utils/registerUser';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={registerUser}>Click ME</button>
      </header>
    </div>
  );
}

export default App;
