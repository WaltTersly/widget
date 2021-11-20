import React, {useState} from 'react';
import './App.css';
import Accordionn from './Components/Accordionn';
import Wikipedia from './Components/Wikipedia';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

function App() {

  const items = [
    {
      title: 'What is React ?',
      content: 'React is a frontend web development framework.'
    },
    {
      title: 'why use React?',
      content: 'React is a favourite among developers and is easy to use and learn'

    },
    {
      title: 'what is the backbone of react ?',
      content: 'React is a javaScript framework that is aminly developed and maintained by facebook{meta}.'
    }
  ];

  const options = [
    {
      label: 'The color is red!',
      value: 'red',
    },

    {
      label: 'The color is green!',
      value: 'green',
    },

    {
      label: 'The color is blue! ',
      value: 'blue',
    },

    {
      label: 'The color is magenta!',
      value: 'magenta',
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  const [toogle, setToogle] = useState(true);

  return (
    <div>

      <Header />

      <Route path="/">
        <Accordionn items={items} /> 
      </Route>
      <Route path="/list">
        <Wikipedia /> 
      </Route>
      <Route path="/dropdown" >

      <button onClick={() => setToogle(!toogle)}>Toogle dropdown </button>
      {
        toogle ?
        <Dropdown label="Select a Label" options={ options } selected={selected} onSelected={setSelected}/> : null
      } 
      </Route>
      <Route path="/translate" >
        <Translate />
      </Route>

    </div>
  );
}

export default App;
