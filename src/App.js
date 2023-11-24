import logo from './logo.svg';
import './App.css';
import './theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/Base/Header'
import PageHeader from './Component/Base/Header';
import Sidebar from './Component/Base/Sidebar';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Sidebar></Sidebar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
