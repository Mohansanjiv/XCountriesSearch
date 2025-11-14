
import './App.css';
import Countries from './components/Countries';
import { API_ENDPOINT } from './Config/Config'

function App() {
  return (
    <div className="App">
      <Countries API_ENDPOINT={API_ENDPOINT} />
    </div>
  );
}

export default App;