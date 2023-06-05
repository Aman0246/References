import logo from './logo.svg';
import './App.css';





//==================================================================
//never connect 6000port that is reserved
axios.defaults.baseURL="http://127.0.0.1:7000"
axios.defaults.withCredentials=true;
//==================================================================

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
