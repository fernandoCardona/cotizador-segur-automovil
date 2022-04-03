import React, {Fragment} from 'react';
import Header from './components/Header'; 

//1.1-importamos el componente Header

function App() {
  return (
    //1.2-Añadimos el componente Header dentro de la etiqueta Fragment
    <Fragment>
    
      <Header titulo='Cotizador de Seguros'/>

    </Fragment>
    
  );
}

export default App;
