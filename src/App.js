import React from 'react';
import {ComputerClock, WorldClock} from './components/Clock/'



function App(props) {
  return (<div>
    <h1>Clock: Exemplo de acesso a API externa</h1>
    <ComputerClock />
    <WorldClock />
  </div>);
}
export default App;
