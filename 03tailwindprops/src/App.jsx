import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"chirucode",
    age:21
  }
  let newArr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

      <Card username="Chirucode" btnText="click me"/>
      <Card  username="chiru" btnText="visit me"/>

    </>
  );
}

export default App
