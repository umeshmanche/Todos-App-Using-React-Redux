import './App.css';
import Home from './Components/Home';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Home />
    </div>
  );
}

export default App;
