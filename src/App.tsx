import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface TypeTest {
  name: string;
  id: number;
}

function App() {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<TypeTest>({ name: 'aaa', id: 123 });

  const a = 'ddd';
  const a = 'ddd';

  const setActiveItem = () => {
    setActive(true);
  };

  useEffect(() => {
    console.log(value);

    setValue({
      name: 'nbb',
      id: 455,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{active ? 'active' : 'inactive'}</div>
        <button onClick={setActiveItem}>Click</button>
      </header>
    </div>
  );
}

export default App;
