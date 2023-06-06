import { FC } from 'react';
import logo from './assets/react.svg';
import './App.css';

import Greet from './components/Greet/Greet';

const App: FC = () => {
  const n = Math.floor(Math.random() * 10);
  const threshold = 5;
  const evenOrOdd = (num: number, threshold: number) => (
    <div>
      {num > threshold && (
        <p>
          {num} は {threshold} よりも大きい値です
        </p>
      )}
      {num > threshold || (
        <p>
          {num} は {threshold} 以下の値です
        </p>
      )}
      <p>
        {num} は {num % 2 === 0 ? '偶数' : '奇数'}です
      </p>
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet name="Patty" times={n} />
        {evenOrOdd(n, threshold)}
      </header>
    </div>
  );
};

export default App;
