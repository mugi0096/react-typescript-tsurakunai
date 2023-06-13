import { FC } from 'react';
import logo from './assets/react.svg';
import './App.css';

import Greet from './components/Greet/Greet';
import Summary from './components/Summary/Summary';
import TextInput from './components/TextInput/TextInput';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

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
        <p>{title}</p>
        <Greet name="Patty" times={1} />
        {evenOrOdd(n, threshold)}
      </header>
      <Summary title="maple Town">
        <p>
          Patty Hope-rabbit, along with her family, arrives in Maple Town, a
          small town inhabited by friendly animals.
        </p>
        <p>
          Soon, the Rabbit Family settles in Maple Town as mail carriers and the
          bitter, yet sweet friendship of Patty and Bobby begins to blossom.
        </p>
      </Summary>
      <TextInput />
    </div>
  );
};

export default App;
