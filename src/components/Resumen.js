import React, {Fragment} from 'react'
//7.1-Importamos a este archivo la dependencia Style Components (import styled from '@emotion/styled')
import styled from '@emotion/styled' 
//7.4-Importamos el archivo Helper.js para poder utilizas la funcion primeraMasyusculas
import { primeraMayusculas } from '../helper';
//11.0-Importamos PropTypes al componente Resumen:
import PropTypes from 'prop-types';


//7.2-creamos el style componente de Resumen y sustituimos la etiqueta Fragment por ContenedorResumen
const ContenedorResumen = styled.div`
    background-color: #00838F;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
    color: #FFFFFF;
`;

const Resumen = ({datos}) => {
    //extraer datos
    const {marca, year, plan} = datos;
    //console.log(datos);
     
    if(marca === '' || year === '' || plan === ''){
        return null;
    }
    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2> 
            <ul>
                    <li>Marca: {primeraMayusculas(marca)}</li>
                    <li>Año: {primeraMayusculas(year)}</li>
                    <li>Plan: {primeraMayusculas(plan)}</li>
            </ul>
        </ContenedorResumen>
     );
}


//11.1-Creamos los PropTypes del componente Resumen:
Resumen.prototype = {
    datos: PropTypes.object.isRequired
}
export default Resumen;