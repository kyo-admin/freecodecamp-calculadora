import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('load...');

  const agregarInput = val => {
    setInput(input + val);
  };


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input ={input}/>
        <div className='fila'>
        <Boton>1</Boton>
        <Boton>2</Boton>
        <Boton>3</Boton>
        <Boton>+</Boton>
        </div>
        <div className='fila'>
        <Boton>4</Boton>
        <Boton>5</Boton>
        <Boton>6</Boton>
        <Boton>-</Boton>
        </div>
        <div className='fila'>
        <Boton>7</Boton>
        <Boton>8</Boton>
        <Boton>9</Boton>
        <Boton>X</Boton>
        </div>
        <div className='fila'>
        <Boton>=</Boton>
        <Boton>0</Boton>
        <Boton>.</Boton>
        <Boton>/</Boton>
        </div>
        <div className='fila'></div>
        <BotonClear>Clear</BotonClear>
      </div>
    </div>
  );
}

export default App;
