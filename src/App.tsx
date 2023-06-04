import { FC } from 'react';
import logo from './assets/react.svg';
import './App.css';

const App: FC = () => {
  const name = 'Patty';
  const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{greet(name)}</div>
      </header>
    </div>
  );
};

export default App;
