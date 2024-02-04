import './App.css';
import Contador from './Componentes/Contador';
import Boton from './Componentes/Boton';
import mueblerialogo from './Logo/logomuebles .jpeg';
import { useState } from 'react';



function App() {

  const [ ininumClics, actuNumClics] = useState (0);

  const manejarClic = () => {
    actuNumClics(ininumClics + 1);
  }
  const reiniciarContador = () => {
    actuNumClics(0);
  }
  return (
    <div className='App'>
      <div className='muebles-maya'>
        <img 
        className='logo-maya'
        src={mueblerialogo}
        alt='Logo de la Muebleria'/>
      </div>
      <div className='contenedor-contador'>
        <Contador
        numClic={ ininumClics }        
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>

      </div>      
    </div>
  );
}

export default App;
