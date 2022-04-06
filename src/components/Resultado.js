import React from 'react'
//8.1-Importamos a este archivo la dependencia Style Components (import styled from '@emotion/styled')
import styled from '@emotion/styled' 
//9.0-Instalamos la dependencia react-transition-group(npm i react-transition-group) y la importamos al documento Resultado
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
//11.0-Importamos PropTypes al componente Resultado:
import PropTypes from 'prop-types';

//8.2-creamos el style componente de Resultado 
const Mensaje  = styled.p`
    background-color: rgb(127,224,237);
    margin-top:2rem;
    padding:1rem;
    text-align:center;
`;
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:  rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;;
`;
const TextoCotizacion  = styled.p`
    color:#00838F;
    padding:1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin:0;   
`;

const Resultado = ({cotizacion}) => {
    //8.3-creamos una condicional ternario para comprobar si existe cotizacion 
    return (  
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> : 
        ( 
          <ResultadoCotizacion> 
          <TransitionGroup
                            component="span"
                            className="resultado"
                        >
                            <CSSTransition
                                classNames="resultado"
                                key={cotizacion}
                                timeout={{ enter: 500, exit: 500}}
                            >
                                <TextoCotizacion>El total es: $ <span> {cotizacion} </span>  </TextoCotizacion>
                            </CSSTransition>
                        </TransitionGroup>
                
          </ResultadoCotizacion>  
        )
        
         
     );
}


//11.1-Creamos los PropTypes del componente Resultado:
Resultado.prototype = {
    cotizacion: PropTypes.number.isRequired
} 
export default Resultado;  