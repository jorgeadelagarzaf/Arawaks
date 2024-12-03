import logo from './logo.svg';
import './App.css';
import CardComponent from './components/utils/Card';
import ColorModeButton from './components/utils/ColorMode';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button colorPalette="teal" variant="solid">
           Email
        </Button>
        <CardComponent />
        <ColorModeButton />
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
