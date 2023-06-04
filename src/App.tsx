import { FC } from 'react';
import logo from './assets/react.svg';
import './App.css';

const App: FC = () => {
  const name = 'Patty';
  const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>;

  const n = Math.floor(Math.random() * 10);
  const threshold = 5;
  const evenOrOdd = (num: number) => (
    <div>
      {n > threshold && (
        <p>
          {n} は {threshold} よりも大きい値です
        </p>
      )}
      {n > threshold || (
        <p>
          {n} は {threshold} 以下の値です
        </p>
      )}
      <p>
        {n} は {n % 2 === 0 ? '偶数' : '奇数'}です
      </p>
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{greet(name)}</div>
        {evenOrOdd(n)}
      </header>
    </div>
  );
};

export default App;
