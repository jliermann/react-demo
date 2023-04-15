import './App.css';
import CounterUnified from './components/counterUnified';
import { useState } from 'react';
import OrderTable from './components/orderTable';

function App() {

  const [counter, SetCounter] = useState(0);
  const [person, SetPerson] = useState({name: "", age: 0})

  return (
    <div className="App">
      <header className="App-header">
        <OrderTable />
      </header>
    </div>
  );
}

function EditPerson( {person, SetPerson} ) {

  return(
    <div>
      <h2>The person</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <h2>Edit</h2>
      <input
        onChange={(e) => SetPerson({...person, name: e.target.value})}
      /><br />
      <button
        onClick={() => SetPerson({...person, age: person.age+1})}
      >+</button>
      <button
        onClick={() => SetPerson({...person, age: person.age-1})}
>-</button>
    </div>
  )

}


export default App;
