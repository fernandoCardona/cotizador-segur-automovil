import React from 'react';
//1.1-importamos el componente Header
import Header from './components/Header'; 
//3.3-importamos el componente Formulario y agregamos su etiqueta html
import Formulario from './components/Formulario';

//2.0-instalamos Style Components (import styled from '@emotion/styled') y lo importamos:
import styled from '@emotion/styled'

 //2.1-Con Style components creamos los estilos del contenedor principal
  const Contenedor = styled.div`
    max-width: 600px;   
    margin: 0 auto;
  `;
 //2.2-Con Style components creamos los estilos del contenedor del Formulario
 const ContenedorFormulario = styled.div`
    background-color: #FFFFFF;
    padding: 3rem;
  `;


function App() {
  return (
    //1.2-Añadimos el componente Header dentro de la etiqueta Fragment
    <Contenedor>
    
      <Header titulo='Cotizador de Seguros'/>

      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
