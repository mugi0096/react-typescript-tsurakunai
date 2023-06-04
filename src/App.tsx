import { FC } from 'react';
import logo from './assets/react.svg';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
      </header>
    </div>
  );
};

export default App;
