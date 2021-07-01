import API from './utils/spotifysearch';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <header className="App-header">
        <button onClick={API}>Click ME</button>
      </header>
    </div>
  );
}

export default App;
