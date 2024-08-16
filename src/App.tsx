import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button';

function App() {
  const [av1, setAv1] = useState('');
  const [av2, setAv2] = useState('');
  const [res, setRes] = useState('');

  function calcular() {
    const media = (parseFloat(av1) + parseFloat(av2)) / 2;
    setRes(media.toFixed(2));
  }

  function limpar() {
    setAv1('');
    setAv2('');
    setRes('');
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Calcule sua média</h1>
        </div>
        <Input
          placeholder={"AV1"}
          value={av1}
          onChange={(e) => setAv1((e.target.value))}
        />
        <Input
          placeholder={"AV2"}
          value={av2}
          onChange={(e) => setAv2((e.target.value))}
        />
        <div className='buttonContainer'>
          <Button label={"Calcular"} onClick={calcular} />
          <Button label={"Limpar"} onClick={limpar} />
        </div>
        {
          res && <div className="res">Resultado: {res}</div>
        }
      </div>
    </>
  )
}

export default App
