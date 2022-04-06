import React, { useState } from 'react';
//1.1-importamos el componente Header
import Header from './components/Header'; 
//3.3-importamos el componente Formulario y agregamos su etiqueta html
import Formulario from './components/Formulario';
//7.0-importamos el componente Resumen 
import Resumen from './components/Resumen';
//8.0-importamos el componente Resultado  
import Resultado from './components/Resultado'; 
//8.0-importamos el componente Spinner  
import Spinner from './components/Spinner'; 

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

  //6.0- Creamos el useState para guardar el resumen de los datos del Formulario.js: Se lo pasamos tambien como argumento en la funcion Formulario en el archivo de Formulario.js
  const [ resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
 //extraer datos
 const { cotizacion, datos } = resumen;

  //10.2-Creamops un State para El Spinner creamos un ternario con 'cargando' y 'guardarCargando' lo agregamos a los props de la etiqueta formulario y tambien se lo pasamos como argumenta al componente formulario en formulario.js
  const [ cargando, guardarCargando] = useState(false);


  return (
    //1.2-Añadimos el componente Header dentro de la etiqueta Fragment
    <Contenedor>
    
      <Header titulo='Cotizador de Seguros'/>

      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} guardarCargando={guardarCargando}/>
         
         {cargando ? <Spinner /> : null}

         <Resumen datos={datos} cotizacion={cotizacion} /> 
         { !cargando  ?
                <Resultado 
                  cotizacion={cotizacion}
                /> : null
            }
         
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
